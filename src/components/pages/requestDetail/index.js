import OperatorRequestAction from "components/molecules/operator-request-action";
import Title from "components/molecules/title";
import RequestDetailCard from "components/organisms/request-detail-card";
import React from "react";
import { useQuery } from "utils/graphql";
import { useParams } from "react-router-dom";
import invoice from "utils/graphql/queries/all/invoice";
import Loader from "components/atoms/loader";
// loading the sass style fot the component
import "./index.scss";
import { createAndSavePdf } from "utils/generalHelper";
import Button from "components/atoms/button";

function RequestDetail(props) {
  const { className = "", children, ...other } = props;
  const params = useParams();
  const { data, loading } = useQuery(
    invoice,
    { id: params.requestId },
    { fetchPolicy: "no-cache" }
  );
  const onClick = async () => {
    const input = document.getElementById("invoice-page");
    createAndSavePdf(input);
  };

  if (loading) {
    return <Loader>Carregando...</Loader>;
  }
  return (
    <div className={"page__budgetDetail-container " + className} {...other}>
      <div className="sub-header">
        <Title
          dataSubtitle={<>Gerencie as informações dos pedidos</>}
          dataType="big"
          separator
        >
          Descrição do pedido
        </Title>
      </div>
      <main>
        <OperatorRequestAction
          totalPrice={data?.invoice.budget.demand.totalPrice}
          status={data?.invoice.status}
        />
        <br />
        <div id="invoice-page">
          <RequestDetailCard invoice={data?.invoice} />
        </div>
        <div id="button-zone">
          <Button onClick={onClick}>Baixar PDF</Button>
        </div>
      </main>
    </div>
  );
}

export default RequestDetail;
