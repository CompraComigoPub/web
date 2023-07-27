import React from 'react';
import CardBase from 'components/atoms/base-card';
import LockerIcon from 'components/icons/Locker';
import CheckIcon from 'components/icons/Check';
import ErrorIcon from 'components/icons/Exit';

// loading the sass style fot the component
import './index.scss';

function Alert (props) {
  const {
    className = "",
    title = '',
    subtitle = '',
    kind = 'warn', // ok, warn (defualt) or error
    icon = null,
    children,
    ...other
  } = props;

  let Icon = null;
  if (icon) {
    Icon = icon;
  } else {
    switch (kind) {
    case "ok":
      Icon = CheckIcon;
      break;
    case "error":
      Icon = ErrorIcon;
      break;

    default:
      Icon = LockerIcon;
      break;
    }
  }

  return <CardBase
    full
    className={"molecule__alert-container " + className}
    data-kind={kind}
    {...other}
  >
    <div className="icon-container">
      <div className="circle">
        <Icon />
      </div>
    </div>
    <div className="text-container">
      <h3>{title}</h3>
      <p>{subtitle}</p>
      {children}
    </div>
  </CardBase>;
}

export default Alert;
