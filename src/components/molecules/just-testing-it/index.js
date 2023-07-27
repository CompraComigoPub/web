import React from "react";
import Sample1 from "components/atoms/sample-1";

// loading the sass style fot the component
import "./index.scss";

function JustTestingIt(props) {
  const { className = "", children, ...other } = props;

  return (
    <div
      className={"molecule__just-testing-it-container " + className}
      {...other}
    >
      {/*
       // TODO: Add your component's body here.
    */}
      Component molecule "Just testing it" is working.
      <br />
      <Sample1 />
      {children}
    </div>
  );
}

export default JustTestingIt;
