import React from "react";

// loading the sass style fot the component
import "./index.scss";

function AvatarCompany(props) {
  const {
    className = "",
    children,
    imageUrl,
    small,
    medium,
    ...other
  } = props;

  return (
    <div
      className={"atom__avatar-company-container " + className}
      {...other}
      data-small={small}
      data-medium={medium}
    >
      <div
        className="image-wrapper"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
    </div>
  );
}

export default AvatarCompany;
