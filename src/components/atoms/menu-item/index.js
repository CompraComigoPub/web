import React from "react";
import { useHistory } from "react-router-dom";

// loading the sass style fot the component
import "./index.scss";

function MenuItem(props) {
  const {
    className = "",
    children,
    selected = false,
    url = null,
    ...other
  } = props;

  const history = useHistory();

  const handleClick = () =>{
    history.push('/entrar');
  };

  return (
    <li
      className={"atom__menu-item-container " + className}
      data-selected={selected ? selected : null}
      {...other}
    >
      {url ? <a href="/" onClick={handleClick}>{children}</a> : children}
    </li>
  );
}

export default MenuItem;
