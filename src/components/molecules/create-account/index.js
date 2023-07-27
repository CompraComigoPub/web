import React from 'react';

// loading the sass style fot the component
import './index.scss';

function CreateAccount (props) {
  const {
    className = "",
    children,
    ...other
  } = props;

  return <div
    className={"molecule__create-account-container " + className}
    {...other}
  >
    {/*
       // TODO: Add your component's body here.
    */}
    Component molecule "Create Account" is working.<br/>

    {children}
  </div>;
}

export default CreateAccount;
