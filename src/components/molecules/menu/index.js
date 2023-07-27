import React from "react";

import MenuItem from "components/atoms/menu-item";
// loading the sass style fot the component
import "./index.scss";

function Menu(props) {
  const {
    className = "",
    children,
    list = [],
    // selected = null,
    ...other
  } = props;

  return (
    <ul className={"molecule__menu-container " + className} {...other}>
      {list.map((item) => {
        const { label, ...other } = item;
        return (
          <MenuItem key={label} {...other}>
            {label}
          </MenuItem>
        );
      })}
    </ul>
  );
}

export default Menu;
