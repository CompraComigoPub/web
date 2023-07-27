import React from "react";
import Search from "../";

import "./styles.scss";

export default {
  title: "Atoms/Search",
};

function SearchEl() {
  return (
    <div style={{ height: "100%" }}>
      <h3>Search</h3>
      <div className="atom__search-el-container">
        <Search placeholder={"Buscar produtos"} />
      </div>
    </div>
  );
}

export { SearchEl as Search };
