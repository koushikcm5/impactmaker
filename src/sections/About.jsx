import './About.css';

const About = ({ data }) => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>{data.title}</h2>
            <p className="about-intro">{data.intro}</p>
            {data.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            
            <div className="founder-section">
              <h3>{data.founder.title}</h3>
              <blockquote className="founder-quote">
                {data.founder.quote}
              </blockquote>
              <p>{data.founder.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
