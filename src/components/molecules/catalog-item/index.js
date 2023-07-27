import React from "react";

import Loader from "components/atoms/loader";
import Paginator from "../paginator";

// loading the sass style fot the component
import "./index.scss";

function CatalogItem(props) {
  const {
    className = "",
    children,
    data,
    take = 3,
    totalProducts,
    setCurrentPage,
    currentPage,
    selectedItems,
    setSelectedItems,
    isLoading = false,
    // onChange = (_) => {},
    // selected = false,
    // onClick = _ => { },
    ...other
  } = props;

  const changeProductQuantity = (item, operator) => {
    const oldQuantity =
      selectedItems?.find((i) => i?.value?.id === item.id)?.quantity || 0;
    const newQuantity = operator === "sum" ? oldQuantity + 1 : oldQuantity - 1;

    let newSelectedItem = selectedItems.filter((i) => i?.value.id !== item.id);
    newSelectedItem.push({ value: item, quantity: newQuantity });
    setSelectedItems(newSelectedItem);
  };

  const getItemQuantity = (item) => {
    return selectedItems?.find((i) => i?.value?.id === item.id)?.quantity || 0;
  };

  return (
    <div className={"molecule__catalog-item-container " + className} {...other}>
      <Paginator
        pageSize={take}
        totalProducts={totalProducts}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      >
        {data.length === 0 && (
          <div
            className={`item-catalog-container-without-image`}
          >
            {isLoading ? <Loader animation={false}>Carregando o catálogo...</Loader> : <p>Nenhum produto encontrado</p>}
          </div>
        )}
        {data.map((item) => {
          return (
            <div
              className={`item-catalog-container`}
              key={item.id}
              data-select={getItemQuantity(item) > 0 ? 1 : null}
            >
              <div className={`item-content`}>
                <img src={item.image || item.photo} alt="" />
              </div>
              <div className={`item-text`}>
                <div className={`name-detail`}>
                  {item.name}
                  <br />
                  {item.detail}
                </div>
                <br />
                <div className={`content`}>{item.description}</div>
              </div>
              <div className="item-counter">
                <p>Itens</p>
                <div className="panel">
                  <button
                    disabled={getItemQuantity(item) === 0}
                    onClick={() => changeProductQuantity(item, "sub")}
                  >
                    -
                  </button>
                  <p>{getItemQuantity(item)}</p>
                  <button
                    disabled={getItemQuantity(item) > 19}
                    onClick={() => changeProductQuantity(item, "sum")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Paginator>
    </div>
  );
}

export default CatalogItem;
