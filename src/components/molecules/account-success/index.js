import React from "react";
import Button from "components/atoms/button";
import Title from "components/molecules/title";
import Check from "components/icons/Check.svg";

// loading the sass style fot the component
import "./index.scss";

function AccountSuccess(props) {
  const { className = "", children, createUser = false, ...other } = props;

  return (
    <div
      className={"molecule__account-success-container " + className}
      {...other}
    >
      <img className="check" alt="" src={Check}></img>
      <Title
        dataSubtitle="Obrigado por participar da nossa rede! Enviamos um link de confirmação para o seu e-mail. Ative sua conta e faça parte da nossa rede!"
        dataType="medium"
      >
        Tudo certo!
        <br />
        {createUser ? "Sua conta foi criada" : "Sua conta está em análise."}
      </Title>
      <div className="button-container">
        <Button
          disabled={false}
          onClick={() => window.location.replace("/entrar")}
        >
          Entrar
        </Button>
      </div>

      {children}
    </div>
  );
}

export default AccountSuccess;
