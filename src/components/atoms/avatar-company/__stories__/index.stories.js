import React from "react";
import AvatarCompany from "../";

import "./styles.scss";

export default {
  title: "Atoms/AvatarCompany",
};

const image = "http://placekitten.com/200/300";

function AvatarCompanyEl() {
  return (
    <div style={{ height: "100%" }}>
      <h3>Avatar Company</h3>
      <div className="atom__avatar-company-el-container">
        <AvatarCompany imageUrl={image} />
      </div>
    </div>
  );
}

export function AvatarCompanySmall() {
  return (
    <div style={{ height: "100%" }}>
      <h3>Avatar Company</h3>
      <div className="atom__avatar-company-el-container">
        <AvatarCompany small imageUrl={image} />
      </div>
    </div>
  );
}

export function AvatarCompanyMedium() {
  return (
    <div style={{ height: "100%" }}>
      <h3>Avatar Company</h3>
      <div className="atom__avatar-company-el-container">
        <AvatarCompany medium imageUrl={image} />
      </div>
    </div>
  );
}

export { AvatarCompanyEl as AvatarCompany };
