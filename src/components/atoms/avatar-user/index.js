import React from "react";

// loading the sass style fot the component
import "./index.scss";

function AvatarUser(props) {
  const {
    className = "",
    children,
    imageUrl,
    smaller,
    ...other
  } = props;

  return (
    <div
      className={"atom__avatar-user-container " + className}
      {...other}
      data-smaller={smaller}
    >
      <div
        className="image-wrapper"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
    </div>
  );
}

export default AvatarUser;
