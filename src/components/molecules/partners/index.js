import React from "react";
import Carousel from "components/organisms/carousel";
// loading the sass style fot the component
import "./index.scss";

function Partners(props) {
  const { className = "", children, language, ...other } = props;

  return (
    <section className={"molecule__partners-container " + className} {...other}>
      <hgroup>
        { language === 'pt-BR' && <h4>Clientes e Parceiros</h4>}
        { language === 'en-US' && <h4>Customers and Partners</h4>}

        { language === 'pt-BR' && <h2>Empresas que fazem parte da nossa história</h2>}
        { language === 'en-US' && <h2>Companies that are part of our history</h2>}

      </hgroup>

      <Carousel>
        <img src="/images/partners/abimaq.jpeg" alt="" />
        <img src="/images/partners/saolucas.png" alt="" />
        <img src="/images/partners/pucrs.png" alt="" />
        <img src="/images/partners/marista.png" alt="" />
        <img src="/images/partners/tecnopuc.png" alt="" />
        <img src="/images/partners/marcopolo.png" alt="" />
        <img src="/images/partners/soprano.png" alt="" />
        <img src="/images/partners/martiplast.jpg" alt="" />
        <img src="/images/partners/sulbras.png" alt="" />
        <img src="/images/partners/acrilys.jpg" alt="" />
      </Carousel>
    </section>
  );
}

export default Partners;
