import React from 'react';
import LoaderMolecule from '../../molecules/loader';

// loading the sass style fot the component
import './index.scss';

/**
 * Organism Loader
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
    className={"organism__loader-container " + className}
    {...other}
  >
    <LoaderMolecule>
      {children}
    </LoaderMolecule>
  </div>;
}

export default Loader;
