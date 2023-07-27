import React from "react";

import Paginator from "components/molecules/paginator";
import ItemsList from "components/organisms/items-list";
import { useHistory } from "react-router-dom";
import { getFormatedStatus, getStatusVariant } from "utils/generalHelper";
import { query } from "utils/graphql";
import { leadershipOrdersPending } from "utils/graphql/queries/operator";
// loading the sass style fot the component
import "./index.scss";

function LeadershipOrder(props) {
  const { className = "", children, ...other } = props;
  const [currentPage, setCurrentPage] = React.useState(0);
  const [publications, setPublications] = React.useState([]);
  const [totalPublications, setTotalPublications] = React.useState(0);
  const [searchFilter, setSearchFilter] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("");

  const history = useHistory();

  const availableStatuses = [
    { text: "Pendente", value: "UNDER_EVALUATION" },
    { text: "Reprovado", value: "INVALID" },
    { text: "Aprovado", value: "VALID" },
  ];

  React.useEffect(
    (_) => {
      query(
        leadershipOrdersPending,
        {
          take: 5,
          skip: currentPage * 5,
          title: searchFilter,
          status: statusFilter,
        },
        { fetchPolicy: "no-cache" }
      )
        .then((list) => {
          setPublications(list.data.leadershipOrdersPending.orders);
          setTotalPublications(list.data.leadershipOrdersPending.total);
        })
        .catch((err) => {
          console.error("Failed retrieving orders");
        });
    },
    [currentPage, searchFilter, statusFilter]
  );

  function onActionClick(event, item) {
    history.push("/publicacoes/" + item.id + "/interesse-de-compra");
  }

  function getItems(order) {
    return {
      id: order.id,
      name: order.purchaseInterest.title,
      date: new Date(order.createdAt),
      status: order.status,
      statusText: getFormatedStatus(order.status),
      statusVariant: getStatusVariant(order.status),
      actionLabel: "Revisar",
      subtitle: order.company.tradeName,
    };
  }

  return (
    <div
      className={"organism__leadership-order-container " + className}
      {...other}
    >
      <div>
        <h2>Novas compras cadastradas</h2>
        <Paginator
          pageSize={5}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={totalPublications}
        >
          <ItemsList
            hideFilter={false}
            className="card"
            items={publications.map((publication) => getItems(publication))}
            action={onActionClick}
            searchPlaceholder={"Buscar publicações"}
            availableStatuses={availableStatuses}
            searchFilter={searchFilter}
            setSearchFilter={setSearchFilter}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />
        </Paginator>
      </div>

      {children}
    </div>
  );
}

export default LeadershipOrder;
