import React from "react";
import Paginator from "components/molecules/paginator";
import Title from "components/molecules/title";
import ItemsList from "components/organisms/items-list";
import { useHistory } from "react-router-dom";
import { query } from "utils/graphql";
import { useUser } from "utils/contexts/user";

// loading the sass style fot the component
import "./index.scss";
import usersByCompany from "utils/graphql/queries/buyer/usersByCompany";

function Team(props) {
  const { className = "", children, ...other } = props;

  const [currentPage, setCurrentPage] = React.useState(0);
  const [members, setMembers] = React.useState([]);
  const [totalMembers, setTotalMembers] = React.useState(0);
  const [statusFilter, setStatusFilter] = React.useState("");
  const [searchFilter, setSearchFilter] = React.useState("");
  const { userData } = useUser();

  React.useEffect(
    (_) => {
      query(
        usersByCompany,
        {
          take: 7,
          skip: currentPage * 7,
          name: searchFilter,
        },
        { fetchPolicy: "no-cache" }
      )
        .then((list) => {
          setMembers(list.data.usersByCompany.payload);
          setTotalMembers(list.data.usersByCompany.totalValues);
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
      id: item.id,
      email: item.email,
      name: item.name,
      logo: item.photo,
      position: item.position,
      myNetworkPage: true,
      myTeamPage: true,
      disabledButton: userData.id === item.id,
    };
  }

  return (
    <div className={"page__team-container " + className} {...other}>
      <Paginator
        pageSize={7}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalMembers}
      >
        <Title
          dataSubtitle={<>Veja os usuários quem fazem parte da sua equipe</>}
          dataType="big"
          separator
        >
          Equipe
        </Title>
        <div>
          <ItemsList
            myTeamPage
            hideFilter={true}
            className="card"
            items={members.map((member) => getItems(member))}
            action={onActionClick}
            searchPlaceholder={"Buscar usuários"}
            setStatusFilter={setStatusFilter}
            statusFilter={statusFilter}
            availableStatuses={[]}
            searchFilter={searchFilter}
            setSearchFilter={setSearchFilter}
          />
        </div>
      </Paginator>

      {children}
    </div>
  );
}

export default Team;
