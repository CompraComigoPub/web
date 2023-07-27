import React from "react";
import { useHistory } from "react-router-dom";

import Title from "components/molecules/title";
import ItemsList from "components/organisms/items-list";
import Paginator from "components/molecules/paginator";
import BaseCard from "components/atoms/base-card";

import { query } from "utils/graphql";
import budgetsBySupplier from "utils/graphql/queries/seller/budgetsBySupplier";
import { useUser } from "utils/contexts/user";

// loading the sass style fot the component
import "./index.scss";

function SellerBudgets(props) {
  const { userData } = useUser();

  const { className = "", children, ...other } = props;
  const [currentPage, setCurrentPage] = React.useState(0);
  const [budgets, setBudgets] = React.useState([]);
  const [totalBudgets, setTotalBudgets] = React.useState(0);
  const [searchFilter, setSearchFilter] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("");

  const history = useHistory();

  const availableStatuses = [
    { text: "Pendente", value: "READY_FOR_SELLER" },
    { text: "Aprovado", value: "APPROVED" },
    { text: "Reprovado", value: "REPROVED" },
    { text: "Em análise pelo comprador", value: "READY_FOR_BUYER" },
    { text: "Em análise", value: "READY_FOR_OPERATOR" },
  ];

  React.useEffect(
    (_) => {
      query(
        budgetsBySupplier,
        {
          take: 7,
          skip: currentPage * 7,
          title: searchFilter,
          status: statusFilter,
        },
        { fetchPolicy: "no-cache" }
      )
        .then((result) => {
          setBudgets(result.data.budgetsBySupplier.budgets);
          setTotalBudgets(result.data.budgetsBySupplier.total);
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
      subtitle: "",
      // disabledButton: budget.statusText !== "Pendente",
    };
  }

  function getVariant(statusText) {
    switch (statusText) {
    case "Aprovado":
      return "success";
    case "Pendente":
    case "Em análise" :
    case "Em análise pelo comprador":
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
        dataSubtitle={userData?.companyNetworkId === "bbc39411-d7b7-4dfd-9079-1c4198560666" ? <>Gerencie os orçamentos de compra. Atualmente, <strong>5.210,00 toneladas de aço</strong> negociadas</> : <>Gerencie os orçamentos de compra</>}
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
            hideFilter={false}
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

export default SellerBudgets;
