import React from "react";

// loading the sass style fot the component
import "./index.scss";

function TestingItAgain(props) {
  const { className = "", children, ...other } = props;

  return (
    <div className={"atom__testing-it-again-container " + className} {...other}>
      {/*
       // TODO: Add your component's body here.
    */}
      Component atom "testing it again" is working.
      <br />
      {children}
    </div>
  );
}

export default TestingItAgain;
