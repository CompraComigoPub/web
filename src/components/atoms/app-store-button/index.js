import React from "react";

// loading the sass style fot the component
import "./index.scss";

function AppStoreButton(props) {
  const { className = "", children, ...other } = props;

  return (
    <div className={"atom__app-store-button-container " + className} {...other}>
      <a href="https://apps.apple.com/br/app/uconex/id1357751776">
        <img src="/app-store.png" alt="" />
      </a>

      {children}
    </div>
  );
}

export default AppStoreButton;
