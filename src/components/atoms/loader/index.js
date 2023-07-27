import React from 'react';

// loading the sass style fot the component
import './index.scss';

/**
 * Atom Loader
 *
 * The atomic loader
 */
function Loader (props) {
  const {
    className = "",
    animation = true,
    children,
    ...other
  } = props;

  return <div
    className={"atom__loader-container " + className}
    {...other}
  >
    {animation && <div className="loader-circle-container"></div>}
    <div className="loader-label-container">
      {children}
    </div>
  </div>;
}

export default Loader;
