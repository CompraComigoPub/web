import React from "react";
import Profile from "../";

import "./styles.scss";

export default {
  title: "Molecules/Profile",
};

function ProfileEl() {
  return (
    <div style={{ height: "100%" }}>
      <h3>Profile</h3>
      <div className="molecule__profile-el-container">
        <Profile />
      </div>
    </div>
  );
}

export function ProfileLarge() {
  return (
    <div style={{ height: "100%" }}>
      <h3>Profile</h3>
      <div className="molecule__profile-el-container">
        <Profile large />
      </div>
    </div>
  );
}

export { ProfileEl as Profile };
