import React from "react";
import IcnCheck from "components/icons/IcnCheck";
// loading the sass style fot the component
import "./index.scss";

function TagCheck(props) {
  const {
    className = "",
    children,
    checked,
    onClick,
    primary,
    secondary,
    label = null,
    ...other
  } = props;

  return (
    <div
      className={"atom__tagcheck-container " + className}
      {...other}
      onClick={onClick}
      data-checked={checked ? 1 : null}
      data-primary={primary ? 1 : null}
      data-secondary={secondary ? 1 : null}
    >
      <div className="icon-container">
        <IcnCheck />
      </div>
      {
        label
          ? <span className="label-container">{label}</span>
          : null
      }
    </div>
  );
}

export default TagCheck;
