import React from 'react';
import LogoCompraComigo from 'components/icons/LogoCompraComigo';
import Menu from 'components/molecules/menu';
// loading the sass style fot the component
import './index.scss';

function Header (props) {
  const {
    className = "",
    children,
    menuList = [],
    ...other
  } = props;

  return <header
    className={"molecule__header-container " + className}
    {...other}
  >
    <div className="wrapper-icon">
      <a href="/">
        <LogoCompraComigo/>
      </a>
    </div>

    <div className="wrapper-menu">
      <Menu
        list={menuList}
      />
    </div>
  </header>;
}

export default Header;
