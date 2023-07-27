import React from 'react';

// loading the sass style fot the component
import './index.scss';

function MenuItem(props) {
  const {
    className = "",
    children,
    selected = false,
    icon,
    badge,
    onClick = _ => {},
    ...other
  } = props;

  return <div
    className={"molecule__menu-item-container " + className}
    data-select={selected ? 1 : null}
    data-badge={badge ? null : 1}
    {...other}
  >
    <div className="menu-content-container" onClick={onClick}>
      <div className="menu-content">
        <div className="icon">{icon}</div>
        <div className="menu-text">{children}</div>
        <div className="badge-container">
          <div className="badge"><span>{badge}</span></div>
        </div>
      </div>
    </div>
  </div>;
}

export default MenuItem;
