import React from "react";
import Menu from "../";

import "./styles.scss";

export default {
  title: "Molecules/Menu",
};

function MenuEl() {
  const menuList = [
    {
      label: "Sobre",
      url: "/#about",
    },
    {
      label: "Clientes e Parceiros",
      url: "/#partners",
    },
  ];

  return (
    <div style={{ height: "100%" }}>
      <h3>Menu</h3>
      <div className="molecule__menu-el-container">
        <Menu list={menuList} />
      </div>
    </div>
  );
}

export { MenuEl as Menu };
