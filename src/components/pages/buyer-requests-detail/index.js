import React from "react";
// import BaseCard from "components/atoms/base-card";
import Title from "components/molecules/title";
import RequestDetailCard from "components/organisms/request-detail-card";
import { useParams } from "react-router-dom";
import { useQuery } from "utils/graphql";
import invoice from "utils/graphql/queries/all/invoice";
import Loader from "components/atoms/loader";
import BuyerRequestAction from "components/molecules/buyer-request-action";
// import PurchaseConclusion from "components/molecules/purchase-conclusion";
import Button from "components/atoms/button";

// loading the sass style fot the component
import "./index.scss";
import { createAndSavePdf } from "utils/generalHelper";
function BuyerRequestsDetail(props) {
  const { className = "", children, ...other } = props;

  // const [analysis, setAnalysis] = React.useState(false);
  // const history = useHistory();
  const params = useParams();
  const { data, loading } = useQuery(
    invoice,
    { id: params.requestId },
    { fetchPolicy: "no-cache" }
  );

  // const handleClick = () => {
  //   history.push("/pedidos");
  // };

  const onClick = async () => {
    const input = document.getElementById("invoice-page");
    createAndSavePdf(input);
  };

  if (loading) {
    return <Loader>Carregando...</Loader>;
  }

  return (
    <div
      className={"page__buyer-requests-detail-container " + className}
      {...other}
    >
      <Title
        dataSubtitle={<>Gerencie as informações do pedido</>}
        dataType="big"
        separator
      >
        Descrição do pedido
      </Title>
      {/* {!analysis ? ( */}
      <>
        <BuyerRequestAction
          status={data?.invoice.status}
          totalPrice={data?.invoice.budget.demand.totalPrice}
        />
        <br />
        <div id="invoice-page">
          <RequestDetailCard invoice={data?.invoice} />
        </div>
        <div id="button-zone">
          <Button onClick={onClick}>Baixar PDF</Button>
        </div>
      </>
      {/* ) : ( */}
      {/*         
        <BaseCard id="card" full>
          <PurchaseConclusion
            title={"Pagamento em análise"}
            subtitle={"O pagamento está sendo processado."}
            hideButton={true}
          />
          <Button onClick={handleClick}>ANALISAR OUTROS PEDIDOS</Button>
        </BaseCard> */}
      {/* )} */}

      {children}
    </div>
  );
}

export default BuyerRequestsDetail;
