import React from "react";
import BrandGlobal from "../../icons/LogoGlobal";
import BrandUser1 from "../../icons/LogoUser1";
import BrandUser2 from "../../icons/LogoUser2";

// loading the sass style fot the component
import "./index.scss";

function Brand(props) {
  const { className = "", children, color = "brand-global", ...other } = props;

  let logo;
  if (color === "brand-global") {
    logo = <BrandGlobal />;
  }
  if (color === "brand-user1") {
    logo = <BrandUser1 />;
  }
  if (color === "brand-user2") {
    logo = <BrandUser2 />;
  }

  return (
    <div className={"atom__brand-container " + className} {...other}>
      {logo}
    </div>
  );
}

export default Brand;
