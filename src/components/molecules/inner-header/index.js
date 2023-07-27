import React from "react";
import { Link, useLocation } from "react-router-dom";

import Button from "components/atoms/button";
import Search from "components/atoms/search";
import BaseCard from "components/atoms/base-card";
import BellIcon from "../../icons/Bell";

import { useUser } from "utils/contexts/user";

import MessageIcon from "../../icons/Message";

// loading the sass style fot the component
import "./index.scss";

function InnerHeader(props) {
  const {
    className = "",
    children,
    hasNotifications = false,
    onToggleNotifications,
    setSearch,
    ...other
  } = props;

  const location = useLocation();
  const { userData } = useUser();

  const getHeaderButtons = () => {
    if (userData.roleCompany === "BUYER" && location.pathname === "/") {
      return (
        <>
          <div data-hide={location.pathname === "/" ? 0 : 1}>
            <Search
              placeholder="Buscar compras"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="button">
            <Link to="/compra/nova">
              <Button full>
                <MessageIcon />
                Cadastrar nova compra
              </Button>
            </Link>
          </div>
          <BaseCard badge={hasNotifications} onClick={onToggleNotifications}>
            <BellIcon />
          </BaseCard>
        </>
      );
    } else if (userData.roleCompany === "OPERATOR") {
      return (
        <div className="notification-operator">
          <BaseCard badge={hasNotifications} onClick={onToggleNotifications}>
            <BellIcon />
          </BaseCard>
        </div>
      );
    }
  };

  return (
    <div
      className={
        userData.roleCompany === "OPERATOR"
          ? "notification-operator"
          : "molecule__inner-header-container " + className
      }
      data-content-wrapper={0}
      {...other}
    >
      {getHeaderButtons()}

      {/* <BaseCard>
      <SettingsIcon />
    </BaseCard> */}

      {children}
    </div>
  );
}

export default InnerHeader;
