import React, { useContext } from "react";

import Header from "../../molecules/header";
import Hero from "../../molecules/hero";
import Partners from "../../molecules/partners";

import Footer from "components/organisms/footer";

import { AuthContext } from '../../../utils/contexts/authProvider';

// loading the sass style fot the component
import "./index.scss";

function Landing(props) {
  const { className = "", children, ...other } = props;
  const { language, setLanguage } = useContext(AuthContext);

  const redirect = () => {
    window.location.replace("/entrar");
  };

  return (
    <div className={"page__landing-container " + className} {...other}>
      <Header menuList={[
        { label: (<img src="https://hatscripts.github.io/circle-flags/flags/br.svg" width="30" alt="" />), onClick: _ => setLanguage('pt-BR') },
        { label: (<img src="https://hatscripts.github.io/circle-flags/flags/us.svg" width="30" alt="" />), onClick: _ => setLanguage('en-US') },
        { label: language === 'pt-BR' ? 'Entrar' : 'Login', onClick: redirect },
      ]} />
      <main>
        <Hero id="about" language={language} />
        <Partners id="partners" language={language} />
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
