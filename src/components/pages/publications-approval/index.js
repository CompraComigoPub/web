import Button from "components/atoms/button";
import PurchaseTeam from "components/molecules/purchase-team";
import TabsBar from "components/molecules/tabs-bar";
import Sucess from "components/icons/Sucess";
import React from "react";

import BaseCard from "components/atoms/base-card";
import PurchaseDetailTabDocs from "components/molecules/purchase-detail-tab-docs";
import PurchaseDetailTabGeneral from "components/molecules/purchase-detail-tab-general";
import PurchaseDetailTabCharacteristics from "components/molecules/purchase-detail-tab-characteristics";

// loading the sass style fot the component
import "./index.scss";
import { mutate, useQuery } from "utils/graphql";
import getOrder from "utils/graphql/queries/order/getOrder";
import { useParams } from "react-router-dom";
import updateOrderStatus from "utils/graphql/mutations/operator/updateOrderStatus";
import approvePurchaseInterest from "utils/graphql/mutations/operator/approvePurchaseInterest";
import { toast } from "react-toastify";
import Loader from "components/atoms/loader";
import "./index.scss";
import ApprovalConclusion from "components/molecules/approval-conclusion";
import Header from "components/molecules/product-header";
import SvgReprove from "components/icons/Reprove";
import SvgSuccess from "components/icons/Success";

function PublicationsApproval(props) {
  const { className = "", children, ...other } = props;

  const [selectedTab, setSelectedTab] = React.useState("Tab_Id1");
  const params = useParams();
  const { data, loading } = useQuery(
    getOrder,
    { id: params.orderId },
    {
      fetchPolicy: "no-cache",
    }
  );
  const [conclusion, setConclusion] = React.useState(false);
  const [reprove, setReprove] = React.useState(null);

  const menu = [
    {
      id: "Tab_Id1",
      label: "PUBLICAÇÃO",
    },
    {
      id: "Tab_Id2",
      label: "PRODUTOS",
    },
    {
      id: "Tab_Id3",
      label: "DOCUMENTOS",
    },
  ];

  function onChange(id) {
    setSelectedTab(id);
  }

  const getDocs = (file) => {
    return { url: file.url, name: file.filename };
  };

  const approvePublication = async () => {
    try {
      await mutate(approvePurchaseInterest, {
        purchaseInterestId: data?.order.interestId,
      });
      setConclusion(true);
      setReprove(false);
    } catch (err) {
      toast.error(`Erro ao reprovar publicação`);
    }
  };

  const updateStatus = async (status) => {
    const methodText = status === "INVALID" ? "reprovar" : "aprovar";
    try {
      await mutate(updateOrderStatus, { orderId: params.orderId, status });
      setConclusion(true);
      setReprove(status === "INVALID");
    } catch (err) {
      toast.error(`Erro ao ${methodText} empresa`);
    }
  };

  if (loading) {
    return <Loader>Carregando...</Loader>;
  }

  const approveMethod =
    params.approveType === "interesse-de-compra"
      ? approvePublication
      : updateStatus;

  const getStatusSection = (status) => {
    switch (status) {
    case "UNDER_EVALUATION":
      return (
        <div id="row">
          <Sucess id="icon" />
          <h3>PENDENTE</h3>
        </div>
      );
    case "INVALID":
      return (
        <div id="row">
          <SvgReprove />
          <h3>REPROVADO</h3>
        </div>
      );
    case "VALID":
      return (
        <div id="row">
          <SvgSuccess style={{ marginRight: "15px" }} />
          <h3>APROVADO</h3>
        </div>
      );
    default:
      return (
        <div id="row">
          <h3>Status Não Encontrado</h3>
        </div>
      );
    }
  };

  return (
    <div
      className={"page__publications-approval-container " + className}
      {...other}
    >
      <Header
        company={data?.order.purchaseInterest.leadership}
        title={data?.order.purchaseInterest.title}
        subtitle=""
        big
      />
      {conclusion ? (
        <ApprovalConclusion
          buttonLink={"/publicacoes"}
          reprove={reprove}
          subtitle={"a publicação"}
          title={"O Comprador será notificado que a publicação foi "}
        />
      ) : (
        <section>
          <div id="column-1">
            <TabsBar tabs={menu} onChange={onChange} className="tabs" />
            <BaseCard className="content-container" full>
              <PurchaseDetailTabGeneral
                className={selectedTab === "Tab_Id1" ? null : "hidden"}
                image={data?.order.purchaseInterest.photo}
              >
                <span>{data?.order.purchaseInterest.description}</span>
              </PurchaseDetailTabGeneral>
              {data?.order.items.map((item, index) => {
                return (
                  <PurchaseDetailTabCharacteristics
                    item={item}
                    index={index}
                    className={selectedTab === "Tab_Id2" ? null : "hidden"}
                  />
                );
              })}

              <PurchaseDetailTabDocs
                className={selectedTab === "Tab_Id3" ? null : "hidden"}
                documents={data?.order.files.map((file) => getDocs(file))}
              />
            </BaseCard>
          </div>
          <div id="column-2">
            <div className="card">
              {getStatusSection(data?.order.status)}
              <hr />
              <Button id="aprove" onClick={() => approveMethod("VALID")}>
                Aprovar
              </Button>
              <Button id="disaprove" onClick={() => updateStatus("INVALID")}>
                Reprovar
              </Button>
            </div>
            <br />
            <div className="card">
              <PurchaseTeam members={[data?.order.purchaseInterest.creator]} />
            </div>
          </div>
        </section>
      )}

      {children}
    </div>
  );
}

export default PublicationsApproval;
