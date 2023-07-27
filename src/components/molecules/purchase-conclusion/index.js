import React from "react";
import alertIcon from "components/icons/alertIcon.svg";

// loading the sass style fot the component
import "./index.scss";
import Title from "components/atoms/title";
import Button from "components/atoms/button";

function PurchaseConclusion(props) {
  const {
    className = "",
    children,
    title,
    subtitle,
    hideButton = false,
    handleClick,
    ...other
  } = props;

  return (
    <div
      className={"molecule__purchase-conclusion-container " + className}
      {...other}
    >
      <img src={alertIcon} alt=""/>
      <Title className="título">Tudo certo!</Title>
      <Title className="título">{title}</Title>
      <p>{subtitle}</p>
      {!hideButton && (
        <Button onClick={handleClick}>Explorar outras compras</Button>
      )}
    </div>
  );
}

export default PurchaseConclusion;
