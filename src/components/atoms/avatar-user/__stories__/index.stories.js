import React from "react";
import AvatarUser from "../";

import "./styles.scss";

const url = "http://placekitten.com/200/300";

export default {
  title: "Atoms/AvatarUser",
};

function AvatarUserEl() {
  return (
    <div style={{ height: "100%" }}>
      <h3>Avatar User</h3>
      <div className="atom__avatar-user-el-container">
        <AvatarUser imageUrl={url} />
      </div>
    </div>
  );
}

export function AvatarUserSmall() {
  return (
    <div style={{ height: "100%" }}>
      <h3>Avatar User</h3>
      <div className="atom__avatar-user-el-container">
        <AvatarUser imageUrl={url} smaller />
      </div>
    </div>
  );
}

export { AvatarUserEl as AvatarUser };
