import React from 'react';
import BaseCard from 'components/atoms/base-card';

// loading the sass style fot the component
import './index.scss';

function PurchaseIntentionStatus (props) {
  const {
    className = "",
    cards = {},
    children,
    ...other
  } = props;

  return <div
    className={"organism__purchase-intention-status-container " + className}
    {...other}
  >
    <div className="title">
      Resumo geral dos pedidos
    </div>
    <div className="cards-container">
      <BaseCard full className="card">
        <div className="highlight primary">{cards.card1.highlight}</div>
        <div className="description">{cards.card1.description}</div>
      </BaseCard>
      <BaseCard full className="card">
        <div className="highlight primary">{cards.card2.highlight}</div>
        <div className="description">{cards.card2.description}</div>
      </BaseCard>
      <BaseCard full className="card">
        <div className="highlight green">{cards.card3.highlight}</div>
        <div className="description">{cards.card3.description}</div>
      </BaseCard>
    </div>


    {children}
  </div>;
}

export default PurchaseIntentionStatus;
