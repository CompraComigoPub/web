import React from "react";
import Button from "components/atoms/button";
import Title from "components/molecules/title";
import Lock from "components/icons/Lock";

// loading the sass style fot the component
import "./index.scss";

function AccountError(props) {
  const { className = "", children, ...other } = props;

  return (
    <div
      className={"molecule__account-error-container " + className}
      {...other}
    >
      <div className="check">
        <Lock />
      </div>
      <Title
        dataSubtitle="Seu convite provavelmente expirou. Solicite um novo link para participar do Compra Comigo!"
        dataType="medium"
      >
        Link inválido
      </Title>
      <div className="button-container">
        <Button disabled={false} onClick={() => window.location.replace("/entrar")}>
          Entrar
        </Button>
      </div>

      {children}
    </div>
  );
}

export default AccountError;
