import BaseCard from "components/atoms/base-card";
import Title from "components/molecules/title";
import RequestDetailCard from "components/organisms/request-detail-card";
import { useParams } from "react-router-dom";
import React from "react";
// loading the sass style fot the component
import "./index.scss";
import SellerRequestAction from "components/molecules/seller-request-action";
import ApprovalConclusion from "components/molecules/approval-conclusion";
import { useQuery } from "utils/graphql";
import invoice from "utils/graphql/queries/all/invoice";
import Loader from "components/atoms/loader";
import Button from "components/atoms/button";
import { createAndSavePdf } from "utils/generalHelper";

function SellerRequestDetail(props) {
  const { className = "", children, ...other } = props;

  const [sent, setSent] = React.useState(false);
  const params = useParams();
  const { data, loading } = useQuery(invoice, { id: params.requestId });

  const onClick = async () => {
    const input = document.getElementById("invoice-page");
    createAndSavePdf(input);
  };

  if (loading) {
    return <Loader>Carregando...</Loader>;
  }

  return (
    <div
      className={"page__seller-request-detail-container " + className}
      {...other}
    >
      <Title
        dataSubtitle={<>Gerencie as informações do pedido</>}
        dataType="big"
        separator
      >
        Descrição do pedido
      </Title>
      {!sent ? (
        <>
          <SellerRequestAction
            status={data?.invoice.status}
            totalPrice={data?.invoice.budget.demand.totalPrice}
            setSent={setSent}
          />
          <br />
          <div id="invoice-page">
            <RequestDetailCard invoice={data?.invoice} />
          </div>
          <div id="button-zone">
            <Button onClick={onClick}>Baixar PDF</Button>
          </div>
        </>
      ) : (
        <BaseCard id="card" full>
          <ApprovalConclusion
            buttonLink="/pedidos"
            request
            title={
              "Você será notificado quando o comprador realizar o pagamento do pedido."
            }
          />
        </BaseCard>
      )}

      {children}
    </div>
  );
}

export default SellerRequestDetail;
