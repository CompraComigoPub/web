import React from "react";

import { Link } from "react-router-dom";

// loading the sass style fot the component
import "./index.scss";

function Notification(props) {
  const {
    className = "",
    children,
    title,
    description,
    icon,
    href = "/",
    variant = "primary",
    ...other
  } = props;
  return (
    <div
      className={"molecule__notification-container " + className}
      data-variant={variant}
      {...other}
    >
      <div className="notification">
        <div className="notification-icon">
          <div className="icon">{icon}</div>
        </div>
        <div className="notification-text">
          <div className="notification-title">{title}</div>
          <Link to={href} className="notification-description">
            clique aqui para visualizar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Notification;
