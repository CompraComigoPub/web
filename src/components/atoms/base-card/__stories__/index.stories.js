import React from "react";
import BaseCard from "../";
import BellIcon from "../../../icons/Bell";

import "./styles.scss";

export default {
  title: "Atoms/BaseCard",
};

function BaseCardEl() {
  return (
    <div style={{ height: "100%" }}>
      <h3>Base Card</h3>
      <div className="atom__base-card-el-container">
        <BaseCard>
          <h2>Item</h2>
          <p>text text text text</p>
          <br />
          <p>text text text text</p>
          <br />
          <p>text text text text</p>
          <br />
        </BaseCard>
      </div>
    </div>
  );
}
export function BaseCardBadge() {
  return (
    <div style={{ height: "100%" }}>
      <h3>Base Card</h3>
      <div className="atom__base-card-el-container">
        <BaseCard badge={true}>
          <BellIcon />
        </BaseCard>
      </div>
    </div>
  );
}

export { BaseCardEl as BaseCard };
