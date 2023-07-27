import React from "react";
import Header from "../../molecules/header";
import AbimaqHero from "../../molecules/abimaq-hero";

// loading the sass style fot the component
import "./index.scss";

function AbimaqLanding(props) {
  const { className = "", children, ...other } = props;

  const redirect = () => {
    window.location.replace("/entrar");
  };

  return (
    <div className={"page__landing-container " + className} {...other}>
      <Header menuList={[{ label: "Entrar", onClick: redirect }]} />
      <main>
        <AbimaqHero id="about" />
        {/* <Partners id="partners" /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default AbimaqLanding;
