import React from "react";

// loading the sass style fot the component
import "./index.scss";

function Footer(props) {
  const { className = "", children, ...other } = props;

  return (
    <footer className={"organism__footer-container " + className} {...other}>
      <div>
        <span>&copy; 2021 - Compra Comigo</span>
        <a href="https://openbox.ai/certificado-ias" target="_blank" rel="noreferrer"><img src="/images/seloNotaTres.png" alt="Ecocert" title="Ecocert" /></a>
      </div>
    </footer>
  );
}

export default Footer;
