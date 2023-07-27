import React from "react";
// import GooglePlayButton from "../../atoms/google-play-button";
// import AppStoreButton from "../../atoms/app-store-button";

// loading the sass style fot the component
import "./index.scss";

function AbimaqHero(props) {
  const {
    className = "",
    children,
    topHat,
    title,
    description,
    ...other
  } = props;

  return (
    <section className={"molecule__hero-container " + className} {...other}>
      <div className="wrapper-texts-buttons">
        <h4>Compra Comigo e ABIMAQ</h4>

        <h1>Bem-vindos, associados!</h1>

        <p>
          O Compra Comigo em parceria com a ABIMAQ
          <strong> oferece desconto de 10% sobre os serviços </strong>
          digitais da plataforma para todos os associados
          <strong> associados </strong>.
          Participa da rede social de compras colaborativas de aço!
          <p>
            <strong>Entre em contato</strong>
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <strong>Victor Rosito</strong>
            <a href="mailto:+5551993166066">+55 51 993166066</a>
            <a href="mailto:victor.rosito@uconex.com.br">victor.rosito@uconex.com.br</a>
          </div>
        </p>

        {/* <div className="buttons">
          <GooglePlayButton />
          <AppStoreButton />
        </div> */}
      </div>

      <div>
        <img className="hero-img" src="images/partners/abimaq-logo.png" alt="" />
      </div>
    </section>
  );
}

export default AbimaqHero;
