import React from 'react';
import LoaderAtom from '../../atoms/loader';

// loading the sass style fot the component
import './index.scss';

/**
 * Molecule Loader
 * 
 * <!-- TODO: add a description here! -->
 */
function Loader (props) {
  const {
    className = "",
    children,
    ...other
  } = props;

  return <div
    className={"molecule__loader-container " + className}
    {...other}
  >
    <LoaderAtom>
      {children}
    </LoaderAtom>
  </div>;
}

export default Loader;
