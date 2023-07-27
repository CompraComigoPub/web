import React from "react";
import Tag from "../";

import "./styles.scss";

export default {  // eslint-disable-next-line 
  title: "Atoms/Tag", // eslint-disable-next-line 
}; // eslint-disable-next-line 

function TagLargeSuccess() {
  return (
    <div style={{ height: "100%" }}>
      <h3>Tag Large Success</h3>
      <div className="atom__tag-el-container">
        <Tag large success>
          label
        </Tag>
      </div>
    </div>
  );
}

export function TagLargeAttention() {
  return (
    <div style={{ height: "100%" }}>
      <h3>Tag Large Attention</h3>
      <div className="atom__tag-el-container">
        <Tag large attention>
          label
        </Tag>
      </div>
    </div>
  );
}

export function TagLargeError() {
  return (
    <div style={{ height: "100%" }}>
      <h3>Tag Large Error</h3>
      <div className="atom__tag-el-container">
        <Tag large error>
          label
        </Tag>
      </div>
    </div>
  );
}

export function TagRegularSuccess() {
  return (
    <div style={{ height: "100%" }}>
      <h3>Tag Large Success</h3>
      <div className="atom__tag-el-container">
        <Tag success>label</Tag>
      </div>
    </div>
  );
}

export function TagRegularAttention() {
  return (
    <div style={{ height: "100%" }}>
      <h3>Tag Large Attention</h3>
      <div className="atom__tag-el-container">
        <Tag attention>label</Tag>
      </div>
    </div>
  );
}

export function TagRegularError() {
  return (
    <div style={{ height: "100%" }}>
      <h3>Tag Large Error</h3>
      <div className="atom__tag-el-container">
        <Tag error>label</Tag>
      </div>
    </div>
  );
}

export { TagLargeSuccess };
