import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './Breadcrumb.css';

/**
 * Reusable, semantic Visual Breadcrumb Component
 * @param {Array} items - Array of objects `{ name: string, path: string }` 
 * @param {Object} style - Optional inline styles overriding the container wrapper (e.g. paddingTop)
 */
const Breadcrumb = ({ items = [], style = {} }) => {
  return (
    <div className="breadcrumb-wrapper" style={style}>
      <div className="breadcrumb-container">
        <nav aria-label="Breadcrumb" className="breadcrumb-nav">
          <ol className="breadcrumb-list" itemScope itemType="https://schema.org/BreadcrumbList">
            {/* Constant root Home link */}
            <li className="breadcrumb-item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/" className="breadcrumb-link" itemProp="item">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>

            {/* Dynamic path components */}
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              const position = index + 2;

              return (
                <li key={index} className="breadcrumb-item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <ChevronRight size={14} className="breadcrumb-separator" aria-hidden="true" />
                  
                  {isLast ? (
                    <>
                      <span className="breadcrumb-current" itemProp="name" aria-current="page">
                        {item.name}
                      </span>
                      {/* Hidden schema link for validation on final node */}
                      <meta itemProp="item" content={window.location.href} />
                    </>
                  ) : (
                    <Link to={item.path} className="breadcrumb-link" itemProp="item">
                      <span itemProp="name">{item.name}</span>
                    </Link>
                  )}
                  
                  <meta itemProp="position" content={position} />
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
