import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

// import Cookies from "js-cookie";
// import { differenceInMinutes } from "date-fns";

import IconLabel from "components/atoms/icon-label";
import ProgressBar from "components/atoms/progress-bar";
import Card from "components/molecules/card";
import Title from "components/molecules/title";
import CardSet from "components/organisms/card-set";
// import PersonalInfo from "components/molecules/personal-info";
import NotificationBar from "components/organisms/notification-bar";
import InnerHeader from "components/molecules/inner-header";

import { query } from "utils/graphql";
import { diffPerDay } from "utils/date";
import {
  openPurchasesByNetwork,
  closedPurchasesByNetwork,
} from "utils/graphql/queries/purchase";
import { useUser } from "utils/contexts/user";

// loading the sass style fot the component
import "./index.scss";

function Explore(props) {
  const { className = "", children, ...other } = props;
  const history = useHistory();
  const { userData } = useUser();
  const [search, setSearch] = React.useState("");
  const [openPurchases, setOpenPurchases] = React.useState(null);
  const [closedPurchases, setClosedPurchases] = React.useState(null);
  const [loadingOpen, setLoadingOpen] = React.useState(true);
  const [loadingClosed, setLoadingClosed] = React.useState(true);
  const [error, setError] = React.useState(false);
  // const [popUp, setPopUp] = React.useState(false);
  const [notifbarOpen, setNotifbarOpen] = React.useState(false);
  const [hasNotifications, setHasNotifications] = React.useState(false);

  function onCardClick(id) {
    history.push("/compra/" + id);
  }

  function onToggleNotifications() {
    setNotifbarOpen(!notifbarOpen);
  }

  React.useEffect(() => {
    getOpenPurchases();
    getClosedPurchases();
  }, [search]); // eslint-disable-line react-hooks/exhaustive-deps

  // React.useEffect(() => {
  //   const sent = Cookies.get("cc_personal_info_sent");
  //   const timestamp = Cookies.get("cc_personal_info_timestamp");

  //   if (!sent) {
  //     if (timestamp) {
  //       const diff = differenceInMinutes(new Date(), new Date(timestamp));
  //       if (diff >= 10) {
  //         setPopUp(true);
  //       }
  //     } else {
  //       setPopUp(true);
  //     }
  //   }
  // }, []);

  function getOpenPurchases() {
    setLoadingOpen(true);
    query(openPurchasesByNetwork, { title: search })
      .then((result) => {
        setOpenPurchases(result.data.openPurchasesByNetwork);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setLoadingOpen(false);
      });
  }

  function getClosedPurchases() {
    setLoadingClosed(true);
    query(closedPurchasesByNetwork, { title: search })
      .then((result) => {
        setClosedPurchases(result.data.closedPurchasesByNetwork);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setLoadingClosed(false);
      });
  }

  function getCardList(item, index) {
    const max = diffPerDay(item.deadline, item.createdAt);
    const current = diffPerDay(Date.now(), item.createdAt);
    return (
      <Card
        key={index}
        onClick={() => onCardClick(item.id)}
        company={{
          logo: item.leadership.logo,
          name: item.leadership.tradeName,
        }}
        content={item.description}
        footer={[
          <IconLabel key={1}>
            {" "}
            {item.totalOrders} empresas participantes
          </IconLabel>,
          <ProgressBar
            key={2}
            current={current}
            diff={max - current < 0 ? 0 : max - current}
            label=" dias restantes"
            max={max}
          />,
        ]}
        image={item.photo}
        title={item.title}
      />
    );
  }

  function getNetworkStatus() {
    const count = openPurchases?.count + closedPurchases?.count || 0;
    const label = (
      <strong>{`${count} ${
        count === 1 ? "compra" : "compras"
      } na rede`}</strong>
    );
    const steel =
      userData?.companyNetworkId === "bbc39411-d7b7-4dfd-9079-1c4198560666" ? (
        <span>
          , totalizando{" "}
          <strong>5.210,00 toneladas de aço sendo negociadas.</strong>
        </span>
      ) : null;

    return (
      <Fragment>
        Foram encontradas {label}
        {steel}
      </Fragment>
    );
  }

  return (
    <>
      <InnerHeader
        setSearch={setSearch}
        hasNotifications={hasNotifications}
        onToggleNotifications={onToggleNotifications}
      />
      <div className={"page__explore-container " + className} {...other}>
        <NotificationBar
          setNotifbarOpen={setNotifbarOpen}
          active={notifbarOpen}
          setHasNotifications={setHasNotifications}
          hasNotifications={hasNotifications}
          onClose={(_) => {
            setNotifbarOpen(false);
          }}
        />
        <div className="sub-header">
          <Title dataSubtitle={getNetworkStatus()} dataType="big">
            Compras publicadas
          </Title>
        </div>

        <div className="page-cards-container">
          <CardSet
            title="Em andamento"
            loading={loadingOpen}
            list={
              !loadingOpen &&
              !error &&
              openPurchases?.purchaseInterests.map((item, index) =>
                getCardList(item, index)
              )
            }
          />
        </div>
        <div className="page-cards-container">
          <CardSet
            title="Encerradas"
            loading={loadingClosed}
            list={
              !loadingClosed &&
              !error &&
              closedPurchases?.purchaseInterests.map((item, index) =>
                getCardList(item, index)
              )
            }
          />
        </div>
        {/* {popUp &&
          userData?.companyNetworkId ===
          "bbc39411-d7b7-4dfd-9079-1c4198560666" && (
          <PersonalInfo setPopUp={setPopUp} />
        )} */}
      </div>
    </>
  );
}

export default Explore;
