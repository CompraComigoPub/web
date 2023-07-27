import PurchaseConclusion from "components/molecules/purchase-conclusion";
import React from "react";

import "./index.scss";

function AnalysisRegister(props) {
  const { className = "", children, ...other } = props;
  return (
    <div className={"page__analysisRegister-container " + className} {...other}>
      <PurchaseConclusion  title={"Seu cadastro está em análise"} subtitle={"Você será notificado quando seu cadastro for aprovado"} hideButton={true} />
    </div>
  );
}

export default AnalysisRegister;
