import React from "react";

import SvgSuccess from "components/icons/Success";

// loading the sass style fot the component
import "./index.scss";

function SupplierCheckbox(props) {
  const {
    className = "",
    children,
    index,
    suppliersList,
    setSelectedSuppliers,
    selectedSuppliers,
    supplier,
    ...other
  } = props;

  const isSelected =
    selectedSuppliers.filter((i) => i.id === supplier.id).length > 0;

  const handleClick = (index) => {
    const clickedItem = suppliersList[index];
    if (!isSelected) {
      setSelectedSuppliers([...selectedSuppliers, clickedItem]);
    } else {
      const newList = selectedSuppliers.filter(
        (item) => item.id !== clickedItem.id
      );
      setSelectedSuppliers(newList);
    }
  };

  return (
    <div
      className={"molecule__supplier-checkbox-container " + className}
      {...other}
    >
      <input id="Tecken" type="checkbox"></input>
      <label
        onClick={() => handleClick(index)}
        className={isSelected ? "selected" : null}
        htmlFor="Tecken"
      >
        <img src={supplier.logo} alt=""/>
        <div>
          <h2>{supplier.tradeName}</h2>
          {/* <p>{supplier.description}</p> */}
        </div>
        <SvgSuccess />
      </label>

      {children}
    </div>
  );
}

export default SupplierCheckbox;
