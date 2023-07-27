import React, { Fragment } from "react";
import { useParams, useHistory } from "react-router-dom";

import BaseCard from "components/atoms/base-card";
import Button from "components/atoms/button";
import Header from "components/molecules/product-header";
import PageLoader from "components/organisms/loader";
import PurchaseDetail from "components/organisms/purchase-detail";
import ProgressBar from "components/atoms/progress-bar";
import Title from "components/molecules/title";
import PurchaseTeam from "components/molecules/purchase-team";

import { useQuery } from "utils/graphql";
import { useUser } from "utils/contexts/user";
import { diffPerDay } from "utils/date";
import { purchaseInterest } from "utils/graphql/queries/purchase";
// import { formatFloatNumberToText } from "utils/generalHelper";

// loading the sass style fot the component
import "./index.scss";

function PurchaseInfo(props) {
  const { className = "", children, ...other } = props;
  const param = useParams();
  const history = useHistory();
  const { userData } = useUser();
  const { data, loading } = useQuery(purchaseInterest, {
    id: param.purchaseId,
  });

  if (loading) {
    return <PageLoader>{"Carregando.."}</PageLoader>;
  }

  const max = diffPerDay(
    data.purchaseInterest.deadline,
    data.purchaseInterest.createdAt
  );
  const current = diffPerDay(Date.now(), data.purchaseInterest.createdAt);
  const diff = max - current < 0 ? 0 : max - current;

  const buyingCompanies = data?.purchaseInterest.orders.map(
    (order) => order.company
  );

  const getDocs = (files) => {
    return files.map((file) => {
      return { url: file.url, name: file.filename };
    });
  };

  const documents = data?.purchaseInterest.orders.flatMap((order) =>
    getDocs(order.files)
  );

  const getMembers = (company) => {
    return {
      avatar: company.logo,
      name: company.tradeName,
      role:
        company.id === data?.purchaseInterest.leadership.id
          ? "Empresa Líder"
          : "Empresa participante",
    };
  };

  const handleClick = () => {
    history.push(`/compra/${param.purchaseId}/participar`, { buyingCompanies });
  };

  const myCompanyOrder = data?.purchaseInterest.orders?.filter(
    (order) => order.company.id === userData.company.id
  );

  return (
    <div className={"page__purchaseDetail-container " + className} {...other}>
      <Header
        company={data?.purchaseInterest.leadership}
        title={data?.purchaseInterest.title}
        subtitle=""
        big
      />

      <main className="main-area">
        <PurchaseDetail
          showOrderInfo={myCompanyOrder.length > 0}
          companyOrderId={myCompanyOrder[0]?.id}
          documents={documents}
          general={{
            image: data?.purchaseInterest.photo,
            tags: ["plástico", "produção", "Proplipropileno"],
            text: data?.purchaseInterest.description,
          }}
          members={data?.purchaseInterest.orders.map((order) =>
            getMembers(order.company)
          )}
        />
        <div className="call-to-action-container">
          <BaseCard full className="side-car">
            {/* <Title>{`${formatFloatNumberToText(data?.purchaseInterest.totalQuantity)}`}</Title>
            <p id="progress" style={{ marginBottom: "15px" }}>
              toneladas
            </p> */}
            {diff > 0 ? (
              <Fragment>
                <Title>{`${diff} dias`}</Title>
                <p id="progress">restantes</p>
              </Fragment>
            ) : (
              <p id="progress">Participações encerradas</p>
            )}

            <ProgressBar
              // key={2}
              current={current}
              diff={max - current}
              max={max}
            />
            {userData.company.id !== data?.purchaseInterest.leadership.id && (
              <Button
                onClick={handleClick}
                disabled={
                  buyingCompanies
                    ?.map((c) => c.id)
                    .includes(userData.company.id) || diff === 0
                }
              >
                PARTICIPAR DESTA COMPRA
              </Button>
            )}
          </BaseCard>
          <br />
          <BaseCard id="member-area">
            <PurchaseTeam
              members={[
                data?.purchaseInterest.operator,
                data?.purchaseInterest.creator,
              ]}
            />
          </BaseCard>
        </div>
      </main>
    </div>
  );
}

export default PurchaseInfo;
