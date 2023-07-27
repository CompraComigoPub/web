import React from "react";

// loading the sass style fot the component
import "./index.scss";

function Title(props) {
  const {
    className = "",
    dataType,
    dataSubtitle,
    separator = false,
    children,
    ...other
  } = props;

  let titleStyle = dataType === 'medium' ? 'medium-title' : 'big-title';
  let subtitleStyle = dataType === 'medium' ? 'medium-subtitle' : 'big-subtitle';

  return (
    <div
      className={"molecule__title-container " + className}
      data-separator={separator ? 1 : null}
      {...other}
    >
      <span className={titleStyle}>{children}</span>
      { dataSubtitle ?
        <span className={subtitleStyle}>{dataSubtitle}</span>
        : null
      }
    </div>
  );
}

export default Title;
