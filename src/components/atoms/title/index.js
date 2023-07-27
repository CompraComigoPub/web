import React from "react";

// loading the sass style fot the component
import "./index.scss";

function Title(props) {
  const { className = "", children, level = 2, ...other } = props;

  return (
    <div
      className={"atom__title-container " + className}
      data-level={level}
      {...other}
    >
      <div className="text">
        {children}
      </div>
    </div>
  );
}

export default Title;
