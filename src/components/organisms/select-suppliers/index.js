import BaseCard from "components/atoms/base-card";
import Search from "components/atoms/search";
import InputSet from "components/molecules/input-set";
import Paginator from "components/molecules/paginator";
import SupplierCheckbox from "components/molecules/supplier-checkbox";
import React, { useEffect } from "react";
import { query } from "utils/graphql";
import sellerCompanies from "utils/graphql/queries/seller/sellerCompanies";

// loading the sass style fot the component
import "./index.scss";

function SelectSuppliers(props) {
  const {
    className = "",
    children,
    company,
    setValues,
    values,
    index,
    step,
    setSuppliers,
    suppliers,
    maxDates,
    setMaxDates,
    ...other
  } = props;
  const [selectedSuppliers, setSelectedSuppliers] = React.useState([]);

  const [currentPage, setCurrentPage] = React.useState(0);
  const [sellers, setSellers] = React.useState([]);
  const [totalSellers, setTotalSellers] = React.useState(0);
  const [searchFilter, setSearchFilter] = React.useState("");

  React.useEffect(
    (_) => {
      query(sellerCompanies, {
        take: 7,
        skip: currentPage * 7,
        companyName: searchFilter,
      })
        .then((list) => {
          const suppliers = list.data?.sellerCompanies.payload.map(
            (s) => s.company
          );
          setSellers(suppliers);
          setTotalSellers(list.data?.sellerCompanies.totalValues);
        })
        .catch((err) => {
          console.error("Failed retrieving companies");
        });
    },
    [currentPage, searchFilter]
  );

  const onChange = (e) => {
    setSearchFilter(e.target.value);
  };

  const handleDateChange = (e) => {
    setMaxDates({ ...maxDates, [index]: e.target.value });
  };

  useEffect(() => {
    setSuppliers({
      ...suppliers,
      [index]: selectedSuppliers.map((supplier) => supplier),
    });
  }, [selectedSuppliers]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className={"organism__select-suppliers-container " + className}
      {...other}
    >
      <BaseCard id="card" full>
        <section>
          <div id="top">
            <img alt="Logo da Empresa" src={company.logo} />
            <h2>{company.tradeName}</h2>
          </div>
          <InputSet
            // required={step === 1}
            type="date"
            className="data"
            label="Prazo para reposta:"
            placeHolder="DD/MM/AAAA"
            onChange={handleDateChange}
          />
        </section>
        <hr />
        <Search placeHolder="Buscar fornecedores" onChange={onChange} />
        <div id="counter">
          <p>{selectedSuppliers.length}</p>
          <span>Fornecedores selecionados</span>
        </div>
        <Paginator
          pageSize={7}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={totalSellers}
        >
          <div className="container">
            {sellers.map((supplier, index) => {
              return (
                <SupplierCheckbox
                  required={step === 1}
                  index={index}
                  supplier={supplier}
                  suppliersList={sellers}
                  selectedSuppliers={selectedSuppliers}
                  setSelectedSuppliers={setSelectedSuppliers}
                />
              );
            })}
          </div>
        </Paginator>
        <hr />
      </BaseCard>

      {children}
    </div>
  );
}

export default SelectSuppliers;
