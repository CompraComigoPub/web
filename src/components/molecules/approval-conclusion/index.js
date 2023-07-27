import BaseCard from "components/atoms/base-card";
import Button from "components/atoms/button";
import SvgReprove from "components/icons/Reprove";
import SvgSuccess from "components/icons/Success";
import { useHistory } from "react-router-dom";
import React from "react";

// loading the sass style fot the component
import "./index.scss";

function ApprovalConclusion(props) {
  const {
    className = "",
    children,
    reprove = false,
    buttonLink,
    request = false,
    title,
    demand = false,
    subtitle,
    ...other
  } = props;

  const history = useHistory();

  return (
    <div
      className={"molecule__approval-conclusion-container " + className}
      {...other}
    >
      <BaseCard id="card" full>
        {!reprove ? <SvgSuccess /> : <SvgReprove />}
        <h2 className={reprove && "reprove"}>Tudo certo!</h2>
        <h2 className={reprove && "reprove"}>
          {request
            ? "A cobrança foi enviado para o comprador."
            : demand
              ? "Seus orçamentos foram enviados para os fornecedores."
              : reprove
                ? "Você reprovou"
                : "Você aprovou"}{" "}
          {subtitle}
        </h2>
        <span>
          {title}
          {request ? "" : reprove ? "reprovada" : "aprovada"}!
        </span>
        <Button
          onClick={() => {
            history.push(buttonLink);
          }}
          id="button"
        >
          {request
            ? "ANALISAR OUTROS ORÇAMENTOS"
            : demand
              ? "ANALISAR OUTRAS COMPRAS"
              : reprove
                ? "ANALISAR OUTRAS SOLICITAÇÕES"
                : "ANALISAR OUTRAS SOLICITAÇÕES"}
        </Button>
      </BaseCard>

      {children}
    </div>
  );
}

export default ApprovalConclusion;
