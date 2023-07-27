import Paginator from "components/molecules/paginator";
import Title from "components/molecules/title";
import ItemsList from "components/organisms/items-list";
import React from "react";
import { useHistory } from "react-router-dom";
import { formatRoleText, getFormatedStatus, getStatusVariant } from "utils/generalHelper";
import { query } from "utils/graphql";
import { allCompaniesByNetwork } from "utils/graphql/queries/operator";
// loading the sass style fot the component
import "./index.scss";

function Registrations(props) {
  const { className = "", children, ...other } = props;
  const [currentPage, setCurrentPage] = React.useState(0);
  const [companyRequests, setCompanyRequests] = React.useState([]);
  const [totalCompanyRequests, setTotalCompanyRequests] = React.useState(0);
  const [statusFilter, setStatusFilter] = React.useState("");
  const [searchFilter, setSearchFilter] = React.useState("");

  const availableStatuses = [
    { text: "Pendente", value: "UNDER_EVALUATION" },
    { text: "Reprovado", value: "INVALID" },
    { text: "Aprovado", value: "VALID" },
  ];

  React.useEffect(
    (_) => {
      query(allCompaniesByNetwork, {
        take: 7,
        skip: currentPage * 7,
        status: statusFilter,
        companyName: searchFilter,
      }, {fetchPolicy: 'no-cache'})
        .then((list) => {
          setCompanyRequests(list.data.allCompaniesByNetwork.payload);
          setTotalCompanyRequests(list.data.allCompaniesByNetwork.totalValues);
        })
        .catch((err) => {
          console.error("Failed retrieving companies");
        });
    },
    [currentPage, statusFilter, searchFilter]
  );

  const history = useHistory();

  function onActionClick(event, item) {
    history.push("/cadastros/" + item.companyId);
  }

  function getItems(item) {
    return {
      companyId: item.company.id,
      name: item.company.name,
      tradeName: item.company.tradeName,
      date: new Date(item.createdAt),
      status: item.status,
      subtitle: formatRoleText(item.role),
      statusText: getFormatedStatus(item.status),
      statusVariant: getStatusVariant(item.status),
      actionLabel: "Analisar",
    };
  }

  return (
    <div className={"page__registrations-container " + className} {...other}>
      <Paginator
        pageSize={7}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalCompanyRequests}
      >
        <Title
          dataSubtitle={
            <>
              Aprove, ou não, solicitações de cadastro de novas empresas ou
              usuários
            </>
          }
          dataType="big"
          separator
        >
          Cadastros pendentes
        </Title>
        <div>
          <ItemsList
            className="card"
            items={companyRequests.map((networkCompany) =>
              getItems(networkCompany)
            )}
            action={onActionClick}
            searchPlaceholder={"Buscar cadastros"}
            setStatusFilter={setStatusFilter}
            statusFilter={statusFilter}
            availableStatuses={availableStatuses}
            searchFilter={searchFilter}
            setSearchFilter={setSearchFilter}
          />
        </div>
      </Paginator>

      {children}
    </div>
  );
}

export default Registrations;
