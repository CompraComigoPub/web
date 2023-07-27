import React from "react";
import Paginator from "components/molecules/paginator";
import Title from "components/molecules/title";
import ItemsList from "components/organisms/items-list";
import { buyerCompaniesByNetwork } from "utils/graphql/queries/operator";
import { useHistory } from "react-router-dom";
import { query } from "utils/graphql";
// loading the sass style fot the component
import "./index.scss";

function MyNetwork(props) {
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
      query(
        buyerCompaniesByNetwork,
        {
          take: 7,
          skip: currentPage * 7,
          status: statusFilter,
          companyName: searchFilter,
        },
        { fetchPolicy: "no-cache" }
      )
        .then((list) => {
          setCompanyRequests(list.data.buyerCompaniesByNetwork.payload);
          setTotalCompanyRequests(
            list.data.buyerCompaniesByNetwork.totalValues
          );
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
      logo: item.company.logo,
      myNetworkPage: true,
    };
  }

  return (
    <div className={"page__my-network-container " + className} {...other}>
      <Paginator
        pageSize={7}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalCompanyRequests}
      >
        <Title
          dataSubtitle={<>Veja as empresas quem fazem parte da sua rede</>}
          dataType="big"
          separator
        >
          Minha rede
        </Title>
        <div>
          <ItemsList
            hideFilter={true}
            className="card"
            items={companyRequests.map((networkCompany) =>
              getItems(networkCompany)
            )}
            action={onActionClick}
            searchPlaceholder={"Buscar empresas"}
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

export default MyNetwork;
