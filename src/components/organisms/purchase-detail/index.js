import React, { useEffect } from "react";
import TabsBar from "components/molecules/tabs-bar";
import BaseCard from "components/atoms/base-card";
// import PurchaseDetailTabActivity from "components/molecules/purchase-detail-tab-activity";
// import PurchaseDetailTabDocs from "components/molecules/purchase-detail-tab-docs";
import PurchaseDetailTabGeneral from "components/molecules/purchase-detail-tab-general";
import PurchaseDetailTabMembers from "components/molecules/purchase-detail-tab-members";

// loading the sass style fot the component
import "./index.scss";
import { query } from "utils/graphql";
import getCompanyOrder from "utils/graphql/queries/order/companyOrder";
import PurchaseDetailTabCharacteristics from "components/molecules/purchase-detail-tab-characteristics";

function PurchaseDetail(props) {
  const {
    className = "",
    activity,
    documents,
    general,
    members,
    showOrderInfo = true,
    companyOrderId,
    children,
    ...other
  } = props;

  const [selectedTab, setSelectedTab] = React.useState("Tab_Id1");
  const [order, setOrder] = React.useState();

  const menu = [
    {
      id: "Tab_Id1",
      label: "VISÃO GERAL",
    },
    {
      id: "Tab_Id2",
      label: "PARTICIPANTES",
    },
  ];
  function onChange(id) {
    setSelectedTab(id);
  }

  useEffect(() => {
    if (showOrderInfo && companyOrderId) {
      query(getCompanyOrder, { id: companyOrderId }).then((result) => {
        setOrder(result?.data?.order);
      });
    }
  }, [companyOrderId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className={"organism__purchase-detail-container " + className}
      {...other}
    >
      <TabsBar
        tabs={
          showOrderInfo
            ? [...menu, { id: "Tab_Id3", label: "Produtos" }]
            : menu
        }
        className="spacer"
        onChange={onChange}
      />

      <BaseCard className="content-container" full>
        <PurchaseDetailTabGeneral
          className={selectedTab === "Tab_Id1" ? null : "hidden"}
          image={general.image}
          tags={general.tags}
        >
          {general.text}
        </PurchaseDetailTabGeneral>
        <PurchaseDetailTabMembers
          className={selectedTab === "Tab_Id2" ? null : "hidden"}
          members={members}
        />

        {order?.items?.map((item, index) => {
          return (
            <PurchaseDetailTabCharacteristics
              index={index}
              item={item}
              className={selectedTab === "Tab_Id3" ? null : "hidden"}
            />
          );
        })}
      </BaseCard>

      {children}
    </div>
  );
}

export default PurchaseDetail;
