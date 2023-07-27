import React from "react";
import TagCheck from "../";

import "./styles.scss";

const obj = {
  title: "Atoms/TagCheck",
};
export default obj;

function TagCheckUnchecked() {
  return (
    <div style={{ height: "100%" }}>
      <h3>Tag Check Unchecked</h3>
      <div className="atom__tagcheck-el-container">
        <TagCheck label="Label for it" />
      </div>
    </div>
  );
}

export function TagCheckChecked() {
  return (
    <div style={{ height: "100%" }}>
      <h3>Tag Check Checked</h3>
      <div className="atom__tagcheck-el-container">
        <TagCheck checked />
      </div>
    </div>
  );
}

export function TagCheckCheckedPrimary() {
  return (
    <div style={{ height: "100%" }}>
      <h3>Tag Check Checked Secondary</h3>
      <div className="atom__tagcheck-el-container">
        <TagCheck checked primary />
      </div>
    </div>
  );
}
export function TagCheckCheckedSecondary() {
  return (
    <div style={{ height: "100%" }}>
      <h3>Tag Check Checked Secondary</h3>
      <div className="atom__tagcheck-el-container">
        <TagCheck checked secondary />
      </div>
    </div>
  );
}

export { TagCheckUnchecked };
