import React from "react";

// loading the sass style fot the component
import "./index.scss";

function GooglePlayButton(props) {
  const { className = "", children, ...other } = props;

  return (
    <div
      className={"atom__google-play-button-container " + className}
      {...other}
    >
      <a href="https://play.google.com/store/apps/details?id=br.com.uconex&hl=pt-BR">
        <img src="/google-play.png" alt="" />
      </a>

      {children}
    </div>
  );
}

export default GooglePlayButton;
