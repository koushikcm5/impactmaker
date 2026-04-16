import './Button.css';

const Button = ({ children, variant = 'primary', onClick, href, ...props }) => {
  const className = `btn btn-${variant}`;
  
  if (href) {
    return (
      <a href={href} className={className} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={className} onClick={onClick} type="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
