import React from "react";

// loading the sass style fot the component
import "./index.scss";

function CardImage(props) {
  const { className = "", children, image, full, alt="", ...other } = props;

  return (
    <div
      className={"atom__card-image-container " + className}
      data-full={full ? 1 : null}
      {...other}
    >
      <div className="card-image">
        <img src={image} alt={alt} />
      </div>
    </div>
  );
}

export default CardImage;
