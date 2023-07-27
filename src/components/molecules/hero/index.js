import React from "react";
// import GooglePlayButton from "../../atoms/google-play-button";
// import AppStoreButton from "../../atoms/app-store-button";

// loading the sass style fot the component
import "./index.scss";

function Hero(props) {
  const {
    className = "",
    children,
    topHat,
    title,
    description,
    language,
    ...other
  } = props;

  return (
    <section className={"molecule__hero-container " + className} {...other}>
      <div className="wrapper-texts-buttons">
        { language === 'pt-BR' && <h4>Sobre</h4>}
        { language === 'en-US' && <h4>About</h4>}

        <h1>Compra Comigo</h1>

        { language === 'pt-BR' && (
          <p>
            O Compra Comigo é uma
            <strong> plataforma B2B de compras colaborativas </strong>
            com a missão de entregar
            <strong> inteligência em compras </strong>
            para todos os peers do sistema.
          </p>
        )}

        { language === 'en-US' && (
          <p>
            Compra Comigo is a
            <strong> B2B collaborative purchasing platform </strong>
            with a mission to deliver
            <strong> purchasing intelligence </strong>
            to all peers in the system
          </p>
        )}

        {/* <div className="buttons">
          <GooglePlayButton />
          <AppStoreButton />
        </div> */}
      </div>

      <div>
        <img className="hero-img" src="/cc2.png" alt="" />
      </div>
    </section>
  );
}

export default Hero;
