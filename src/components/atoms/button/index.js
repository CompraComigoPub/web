import React from 'react';

// loading the sass style fot the component
import './index.scss';

function Button (props) {
  const {
    className = "",
    children,
    full = false,
    variant = "regular", // regular (default), secondary, success, alert, link or error
    ...other
  } = props;

  return <button
    className={"atom__button-container " + className}
    data-full={full ? 1 : null}
    data-variant={variant}
    {...other}
  >
    {children}
  </button>;
}

export default Button;
