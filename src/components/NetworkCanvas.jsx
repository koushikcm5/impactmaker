import { useEffect, useRef, memo } from 'react';

const NetworkCanvas = memo(({ fixed = false }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const setSize = () => {
      if (fixed) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      } else if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
    };

    let mouse = { x: null, y: null, radius: 150 };

    const handleMouseMove = (e) => {
      if (fixed) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      } else {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      }
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const target = fixed ? window : canvas.parentElement;
    if (target) {
      target.addEventListener('mousemove', handleMouseMove);
      if (!fixed) target.addEventListener('mouseleave', handleMouseLeave);
    }

    setSize();
    window.addEventListener('resize', setSize);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 0.5;
        this.density = (Math.random() * 30) + 1;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.color = Math.random() > 0.8
          ? 'rgba(242, 140, 40, 0.6)'
          : 'rgba(22, 96, 167, 0.4)';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        if (mouse.x != null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const fx = dx / distance;
            const fy = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= fx * force * this.density * 0.6;
            this.y -= fy * force * this.density * 0.6;
          }
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      let count = (canvas.width * canvas.height) / 10000;
      if (count > 150) count = 150;
      for (let i = 0; i < count; i++) particles.push(new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 140) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(22, 96, 167, ${0.2 - (distance / 140) * 0.2})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', setSize);
      if (target) {
        target.removeEventListener('mousemove', handleMouseMove);
        if (!fixed) target.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [fixed]);

  return (
    <canvas
      ref={canvasRef}
      className="network-canvas"
      style={fixed ? {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: -1,
      } : {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
});

export default NetworkCanvas;
