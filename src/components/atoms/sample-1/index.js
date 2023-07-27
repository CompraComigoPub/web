import React from "react";
import CompraComigoIcon from "components/icons/CompraComigoIcon";

// loading the sass style fot the component
import "./index.scss";

function Sample1(props) {
  const { className = "", children, ...other } = props;

  return (
    <div className={"atom__sample-1-container " + className} {...other}>
      {/*
       // TODO: Add your component's body here.
    */}
      Component atom "Sample 1" is working.
      <br />
      <CompraComigoIcon />
      {children}
    </div>
  );
}

export default Sample1;
