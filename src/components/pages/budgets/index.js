import BaseCard from "components/atoms/base-card";
import Paginator from "components/molecules/paginator";
import Title from "components/molecules/title";
import ItemsList from "components/organisms/items-list";
import React from "react";
import { useHistory } from "react-router-dom";
import { query } from "utils/graphql";
import budgetsPagination from "utils/graphql/queries/budgets/budgetsPagination";
// loading the sass style fot the component
import "./index.scss";

function Budgets(props) {
  const { className = "", children, ...other } = props;
  const [currentPage, setCurrentPage] = React.useState(0);
  const [budgets, setBudgets] = React.useState([]);
  const [totalBudgets, setTotalBudgets] = React.useState(0);
  const [searchFilter, setSearchFilter] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("");

  const history = useHistory();

  const availableStatuses = [
    { text: "Aprovado", value: "APPROVED" },
    { text: "Reprovado", value: "REPROVED_BY_OPERATOR" },
    { text: "Pendente", value: "READY_FOR_OPERATOR" },
    { text: "Em análise pelo comprador", value: "READY_FOR_BUYER" },
    { text: "Em análise pelo vendedor", value: "READY_FOR_SELLER" },
    { text: "Reprovado pelo comprador", value: "REPROVED_BY_BUYER" },
    { text: "Não aceito pelo vendedor", value: "REPROVED_BY_SELLER" },
  ];

  React.useEffect(
    (_) => {
      query(
        budgetsPagination,
        {
          take: 7,
          skip: currentPage * 7,
          title: searchFilter,
          status: statusFilter,
        },
        { fetchPolicy: "no-cache" }
      )
        .then((result) => {
          setBudgets(result.data.budgetsPagination.budgets);
          setTotalBudgets(result.data.budgetsPagination.total);
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
      subtitle: budget.order.company.tradeName,
      tagId : "tag"
    };
  }

  function getVariant(statusText) {
    switch (statusText) {
    case "Em análise pelo comprador":
    case "Em análise pelo vendedor":
    case "Pendente":
      return "attention";
    case "Aprovado":
      return "success";
    case "Reprovado pelo comprador":
    case "Não aceito pelo vendedor":
    case "Reprovado":
      return "error";
    default:
      return "";
    }
  }

  return (
    <div className={"page__budgets-container " + className} {...other}>
      <div className="sub-header">
        <Title
          dataSubtitle={<>Gerencie os orçamentos recebidos e enviados</>}
          dataType="big"
          separator
        >
          Orçamentos
        </Title>
      </div>
      <main>
        <div>
          <Paginator
            pageSize={7}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalProducts={totalBudgets}
          >
            <BaseCard full>
              <ItemsList
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
        </div>
      </main>
    </div>
  );
}

export default Budgets;
