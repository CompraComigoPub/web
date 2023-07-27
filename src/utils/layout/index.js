// import Modal from "components/atoms/modal";
// import OuterHeader from "components/molecules/header";
import Header from "components/molecules/inner-header";
// import AccountModalContent from "components/organisms/account-modal-content";
// import Footer from "components/organisms/footer";
import NotificationBar from "components/organisms/notification-bar";
import SideBar from "components/organisms/side-bar";
import React from "react";
import { useUser } from "utils/contexts/user";
import "./index.scss";
import { useLocation } from "react-router-dom";

// const PUBLIC_PAGES = new RegExp(
//   '^(\\/' +[
//     'landing',
//     'cadastro',
//     'login',
//     'logout',
//     'signup'
//   ].join('|\\/') +
//   ')'
// );

function Layout(props) {
  const { className = "", children, page, ...other } = props;
  const [notifbarOpen, setNotifbarOpen] = React.useState(false);
  const [hasNotifications, setHasNotifications] = React.useState(false);
  const location = useLocation();

  const { userData } = useUser();
  // const [modalOpened, setModalOpened] = React.useState(false);

  function toggleNotifications() {
    setNotifbarOpen(!notifbarOpen);
  }

  const pathName = window.location.pathname.replace(/^\//, "");

  return (
    <div
      className={"page__Layout-container " + className}
      data-current-page={pathName}
      {...other}
    >
      <div className="sidebar-container">
        <SideBar />
      </div>

      <div className="main-area">
        {userData.companyStatus === "VALID" ? (
          <>
            {(location.pathname !== "/" ||
              userData.roleCompany !== "BUYER") && (
              <Header
                hasNotifications={hasNotifications}
                onToggleNotifications={toggleNotifications}
                className="header-el"
              />
            )}
            <NotificationBar
              hasNotifications={hasNotifications}
              setNotifbarOpen={setNotifbarOpen}
              active={notifbarOpen}
              setHasNotifications={setHasNotifications}
              onClose={(_) => {
                setNotifbarOpen(false);
              }}
            />

            <main data-content-wrapper={1}>{children}</main>
          </>
        ) : (
          <>{children}</>
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
