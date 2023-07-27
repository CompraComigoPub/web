import React from 'react';

// loading the sass style fot the component
import './index.scss';

function TabButton (props) {
  const {
    className = "",
    id,
    selected = false,
    label,
    onClick,
    children,
    ...other
  } = props;

  function handleClick() {
    onClick(id);
  }

  return <div
    className={"atom__tab-button-container " + className}
    {...other}
  >

    <div className={selected ? "bullet selected" : "bullet"} onClick={handleClick}>
      <span className="label">{label}</span>
    </div>

    {children}
  </div>;
}

export default TabButton;
