import React from "react";
import CardImage from "../";

import "./styles.scss";

export default {
  title: "Atoms/CardImage",
};

const image = "/images/img-card.jpg";

function CardImageEl() {
  return (
    <div style={{ height: "100%" }}>
      <h3>Card Image</h3>
      <div className="atom__card-image-el-container">
        <CardImage image={image} />
      </div>
    </div>
  );
}
export function CardImageFull() {
  return (
    <div style={{ height: "100%" }}>
      <h3>Card Image</h3>
      <div className="atom__card-image-el-container">
        <CardImage full image={image} />
      </div>
    </div>
  );
}

export { CardImageEl as CardImage };
