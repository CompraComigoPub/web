import LeadershipOrder from "components/organisms/leadership-order";
import Title from "components/molecules/title";
import React from "react";

// loading the sass style fot the component
import "./index.scss";
import JoinedOrder from "components/organisms/joined-order";

function Publications(props) {
  const { className = "", children, ...other } = props;

  return (
    <div className={"page__publications-container " + className} {...other}>
      <Title
        dataSubtitle={<>Analisar solicitações de publicações</>}
        dataType="big"
        separator
      >
        Analisar publicações
      </Title>
      <LeadershipOrder />
      <JoinedOrder/>
      {children}
    </div>
  );
}

export default Publications;
