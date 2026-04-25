import React from 'react';
import './DomainExpertise.css';

const domains = [
  'ESG',
  'Finance P&A',
  'Automobile',
  'Government & Diplomats',
  'FMCG',
  'Retail',
  'Banking',
  'Healthcare'
];

const DomainExpertise = () => {
  return (
    <section className="domain-expertise" id="domains">
      <div className="container">
        <h2 className="domain-heading">Domain Expertise</h2>
        
        <div className="ticker-wrapper">
          <div className="ticker-container">
            <div className="ticker-track">
              {[...domains, ...domains, ...domains].map((domain, index) => (
                <div key={index} className="domain-pill">
                  {domain}
                </div>
              ))}
            </div>
          </div>
          <div className="ticker-fade-left" />
          <div className="ticker-fade-right" />
        </div>
      </div>
    </section>
  );
};

export default DomainExpertise;
