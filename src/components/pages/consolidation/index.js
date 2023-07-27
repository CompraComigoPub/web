import Title from "components/molecules/title";
import ItemsList from "components/organisms/items-list";
import React from "react";
import Paginator from "components/molecules/paginator";
import { useHistory } from "react-router-dom";
import { query } from "utils/graphql";
import { purchasesClosed } from "utils/graphql/queries/purchase";

// loading the sass style fot the component
import "./index.scss";

function Consolidation(props) {
  const { className = "", children, ...other } = props;
  const [currentPage, setCurrentPage] = React.useState(0);
  const [publications, setPublications] = React.useState([]);
  const [totalPublications, setTotalPublications] = React.useState(0);
  const [searchFilter, setSearchFilter] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("");


  const history = useHistory();

  const availableStatuses = [
    { text: "Pendente", value: "OPEN" },
    { text: "Consolidado", value: "CLOSED" },
  ];

  React.useEffect(
    (_) => {
      query(purchasesClosed, {
        take: 7,
        skip: currentPage * 7,
        title: searchFilter,
        status: statusFilter
      },{fetchPolicy: 'no-cache'})
        .then((list) => {
          setPublications(list.data.purchaseInterestsClosed.purchaseInterests);
          setTotalPublications(list.data.purchaseInterestsClosed.count);
        })
        .catch((err) => {
          console.error("Failed retrieving purchases");
        });
    },
    [currentPage, searchFilter, statusFilter]
  );

  function onActionClick(event, item) {
    history.push("/consolidacao/" + item.id);
  }

  function getItems(purchase) {
    return {
      id: purchase.id,
      name: purchase.title,
      date: new Date(purchase.createdAt),
      status: purchase.status,
      statusText: purchase.status === "OPEN" ? 'Pendente' : 'Consolidado',
      statusVariant:  purchase.status === "OPEN" ? 'attention' : 'success',
      actionLabel: "ANALISAR",
      subtitle: "",
      disabledButton : purchase.status !== "OPEN"
    };
  }

  return (
    <div className={"page__consolidation-container " + className} {...other}>
      <Title
        dataSubtitle={<>Gerencie os interesses de compra</>}
        dataType="big"
        separator
      >
        Consolidação de volumes
      </Title>
      <Paginator
        pageSize={7}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalPublications}
      >
        <ItemsList
          hideFilter={false}
          className="card"
          items={publications.map((publication) => getItems(publication))}
          action={onActionClick}
          searchPlaceholder={"Buscar orçamentos"}
          availableStatuses={availableStatuses}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          setStatusFilter={setStatusFilter}
        />
      </Paginator>

      {children}
    </div>
  );
}

export default Consolidation;
