import React from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "utils/graphql";
import { useUser } from "utils/contexts/user";
import {
  purchaseCreated,
  purchaseJoined,
} from "utils/graphql/queries/purchase";
import IconLabel from "components/atoms/icon-label";
import ProgressBar from "components/atoms/progress-bar";
import Card from "components/molecules/card";
import Welcome from "components/molecules/welcome-card";
import { diffPerDay, getWelcomeMessageByHour } from "utils/date";

// import Title from 'components/atoms/title';
import CardSet from "components/organisms/card-set";
// loading the sass style fot the component
import "./index.scss";
function Home(props) {
  const { className = "", children, ...other } = props;

  const history = useHistory();
  const resultPurchaseCreated = useQuery(purchaseCreated);
  const resultPurchaseJoined = useQuery(purchaseJoined);
  const { userData } = useUser();

  function onCardClick(id) {
    history.push("/compra/" + id);
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

  return (
    <div className={"page__home-container " + className} {...other}>
      <Welcome
        message={getWelcomeMessageByHour()}
        name={userData?.name?.split(" ")[0]}
        onClick={(_) => {}}
      />

      <CardSet
        title="Minhas compras"
        loading={resultPurchaseCreated.loading}
        list={
          !resultPurchaseCreated.loading &&
          !resultPurchaseCreated.error &&
          resultPurchaseCreated.data.purchaseInterestsCreated.purchaseInterests.map(
            (item, index) => getCardList(item, index)
          )
        }
      />

      <CardSet
        title="Compras que participo"
        loading={resultPurchaseJoined.loading}
        list={
          !resultPurchaseJoined.loading &&
          !resultPurchaseJoined.error &&
          resultPurchaseJoined.data.purchaseInterestJoined.purchaseInterests.map(
            (item, index) => getCardList(item, index)
          )
        }
      />
    </div>
  );
}

export default Home;
