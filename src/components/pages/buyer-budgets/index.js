import Title from "components/molecules/title";
import ItemsList from "components/organisms/items-list";
import React from "react";
import Paginator from "components/molecules/paginator";
import { useHistory } from "react-router-dom";
import { query } from "utils/graphql";

// loading the sass style fot the component
import "./index.scss";
import BaseCard from "components/atoms/base-card";
import budgetsByBuyer from "utils/graphql/queries/budgets/budgetsByBuyer";

function BuyerBudgets(props) {
  const { className = "", children, ...other } = props;
  const [currentPage, setCurrentPage] = React.useState(0);
  const [budgets, setBudgets] = React.useState([]);
  const [totalBudgets, setTotalBudgets] = React.useState(0);
  const [searchFilter, setSearchFilter] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("");

  const history = useHistory();

  const availableStatuses = [
    { text: "Pendente", value: "READY_FOR_BUYER" },
    { text: "Aprovado", value: "APPROVED" },
    { text: "Reprovado", value: "REPROVED" },
  ];

  React.useEffect(
    (_) => {
      query(
        budgetsByBuyer,
        {
          take: 7,
          skip: currentPage * 7,
          title: searchFilter,
          status: statusFilter,
        },
        { fetchPolicy: "no-cache" }
      )
        .then((result) => {
          setBudgets(result.data.budgetsByBuyer.budgets);
          setTotalBudgets(result.data.budgetsByBuyer.total);
        })
        .catch((err) => {
          console.error("Failed retrieving budgets");
        });
    },
    [currentPage, searchFilter, statusFilter]
  );

  function onActionClick(event, budget) {
    history.push("/orcamentos/" + budget.id);
  }

  function getItems(budget) {
    return {
      id: budget.id,
      name: budget.order.purchaseInterest.title,
      date: new Date(budget.createdAt),
      status: budget.statusText,
      statusText: budget.statusText,
      statusVariant: getVariant(budget.statusText),
      actionLabel: "ANALISAR",
      subtitle: budget.order.company.name,
      // disabledButton: budget.statusText !== "Pendente",
    };
  }

  function getVariant(statusText) {
    switch (statusText) {
    case "Aprovado":
      return "success";
    case "Pendente":
      return "attention";
    case "Reprovado":
      return "error";
    default:
      return "error";
    }
  }

  return (
    <div className={"page__consolidation-container " + className} {...other}>
      <Title
        dataSubtitle={<>Gerencie os orçamentos de compra</>}
        dataType="big"
        separator
      >
        Orçamentos recebidos
      </Title>
      <Paginator
        pageSize={7}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalBudgets}
      >
        <BaseCard full>
          <ItemsList
            // hideFilter={true}
            className="card"
            items={budgets.map((budget) => getItems(budget))}
            action={onActionClick}
            searchPlaceholder={"Buscar orçamentos"}
            availableStatuses={availableStatuses}
            searchFilter={searchFilter}
            setSearchFilter={setSearchFilter}
            setStatusFilter={setStatusFilter}
          />
        </BaseCard>
      </Paginator>

      {children}
    </div>
  );
}

export default BuyerBudgets;
