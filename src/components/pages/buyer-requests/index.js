import Title from "components/molecules/title";
import ItemsList from "components/organisms/items-list";
import React from "react";
import Paginator from "components/molecules/paginator";
import { useHistory } from "react-router-dom";
import { getFormatedInvoiceStatus } from "utils/generalHelper";
import { query } from "utils/graphql";

// loading the sass style fot the component
import "./index.scss";
import BaseCard from "components/atoms/base-card";
import invoicesByBuyer from "utils/graphql/queries/buyer/invoicesByBuyer";

function BuyerRequests(props) {
  const { className = "", children, ...other } = props;
  const [currentPage, setCurrentPage] = React.useState(0);
  const [invoices, setInvoices] = React.useState([]);
  const [totalInvoices, setTotalInvoices] = React.useState(0);
  const [searchFilter, setSearchFilter] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("");

  const history = useHistory();

  const availableStatuses = [
    { text: "Pendente", value: "UNDER_EVALUATION" },
    { text: "Cancelado", value: "CANCELED" },
    { text: "Pago", value: "PAID" },
    { text: "Aguardando pagamento", value: "WAITING" },
  ];

  React.useEffect(
    (_) => {
      query(invoicesByBuyer, {
        take: 7,
        skip: currentPage * 7,
        title: searchFilter,
        status: statusFilter
      }, {fetchPolicy: 'no-cache'})
        .then((list) => {
          setInvoices(list.data.invoicesByBuyer.invoices);
          setTotalInvoices(list.data.invoicesByBuyer.total);
        })
        .catch((err) => {
          console.error("Failed retrieving companies");
        });
    },
    [currentPage, searchFilter, statusFilter]
  );

  function onActionClick(event, item) {
    history.push("/pedidos/" + item.id);
  }

  function getItems(invoice) {
    const statusObject = getFormatedInvoiceStatus(invoice.status);
    return {
      id: invoice.id,
      name: invoice.budget.order.purchaseInterest.title,
      date: new Date(invoice.budget.createdAt),
      status: invoice.status,
      statusText: statusObject.text,
      statusVariant: statusObject.variant,
      actionLabel: "VER PEDIDO",
      subtitle: "",
    };
  }

  return (
    <div className={"page__consolidation-container " + className} {...other}>
      <Title
        dataSubtitle={<>Gerencie os pedidos efetuados</>}
        dataType="big"
        separator
      >
        Pedidos
      </Title>
      <Paginator
        pageSize={7}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalInvoices}
      >
        <BaseCard full>
          <ItemsList
            hideFilter={false}
            className="card"
            items={invoices.map((invoice) => getItems(invoice))}
            action={onActionClick}
            searchPlaceholder={"Buscar pedidos"}
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

export default BuyerRequests;
