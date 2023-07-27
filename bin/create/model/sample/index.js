import React from 'react';

// loading the sass style fot the component
import './index.scss';

function %CamelName% (props) {
  const {
    className = "",
    children,
    ...other
  } = props;

  return <div
    className={"%kind%__%dashed-name%-container " + className}
    {...other}
  >
    {/*
       // TODO: Add your component's body here.
    */}
    Component %kind% "%name%" is working.<br/>

    {children}
  </div>;
}

export default %CamelName%;
