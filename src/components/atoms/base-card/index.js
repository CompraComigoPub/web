import React from "react";
import DotPurpleIcon from "./../../icons/DotPurple";
// loading the sass style fot the component
import "./index.scss";


function BaseCard(props) {
  const {
    className = "",
    containerClassName = "",
    children,
    full = false,
    onClick,
    selected = false,
    badge = false,
    ...other
  } = props;

  return (
    <div
      className={"atom__base-card-container " + containerClassName}
      data-badge={badge ? 1 : null}
      data-selected={selected ? 1 : null}
      data-full={full ? 1 : null}
      data-has-click={onClick ? 1 : null}
      onClick={onClick}
    >
      <div className="dot-purple-icon">
        <DotPurpleIcon />
      </div>
      <div className={"card-content " + className} {...other}>{children}</div>
    </div>
  );
}

export default BaseCard;
