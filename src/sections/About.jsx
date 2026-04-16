import './About.css';

const About = ({ data }) => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>{data.title}</h2>
            <p className="about-intro">{data.intro}</p>
            <p className="about-mission">{data.mission}</p>
            {data.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            
            <div className="founder-section">
              <h3>Founder</h3>
              <p>{data.founder.description}</p>
              <blockquote className="positioning">
                {data.founder.philosophy}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
