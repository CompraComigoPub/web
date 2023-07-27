import React from "react";

// loading the sass style fot the component
import "./index.scss";

function Tag(props) {
  const {
    className = "",
    id,
    children,
    large,
    success,
    attention,
    error,
    disabled,
    ...other
  } = props;

  return (
    <div
      className={"atom__tag-container " + className}
      id={"" + id}
      {...other}
      data-success={success}
      data-attention={attention}
      data-error={error}
      data-large={large}
    >
      <span>{children}</span>
    </div>
  );
}

export default Tag;
