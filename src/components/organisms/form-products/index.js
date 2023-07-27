import React from "react";
import { toast } from "react-toastify";

import Title from "components/molecules/title";
import CardBase from "components/atoms/base-card";
import Button from "components/atoms/button";
import CatalogItem from "components/molecules/catalog-item";
import Search from "components/atoms/search";
import Tag from "components/atoms/tag";

// import { debounce } from "utils/generalHelper";
import { query } from "utils/graphql";
import getSubCategoriesByCategoryId from "utils/graphql/queries/all/getSubCategoriesByCategoryId";
import productsByCategories from "utils/graphql/queries/all/productsByCategories";

// loading the sass style fot the component
import "./index.scss";

function FormProducts(props) {
  const {
    className,
    children,
    take = 10,
    onChange,
    setValues,
    next,
    prev,
    values,
    setSelectedItems,
    selectedItems,
    join = false,
    // values = {},
    ...other
  } = props;

  // const theForm = React.useRef(null);

  const [productsList, setProductsList] = React.useState([]);
  const [filteredProducs, setFilteredProducts] = React.useState(productsList);
  const [totalProducts, setTotalProducts] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [productSearch, setProductSearch] = React.useState("");
  const [categoriesList, setCategoriesList] = React.useState([]);
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [totalSelected, setTotalSelected] = React.useState(true);

  React.useEffect(
    (_) => {
      setIsLoading(true);
      if (categoriesList.length > 0 || values.category) {
        const categoriesListIds = categoriesList.map((c) => c.id);
        query(
          productsByCategories,
          {
            take: take,
            skip: currentPage * take,
            name: productSearch,
            categoriesId: totalSelected
              ? [...categoriesListIds, values.category.id]
              : selectedCategories.map((c) => c.id),
          },
          { fetchPolicy: "cache-first" }
        )
          .then((list) => {
            const listOfProducts = list.data.productsByCategories.products;
            setFilteredProducts(listOfProducts);
            setProductsList(listOfProducts);
            setTotalProducts(list.data.productsByCategories.products);
          })
          .catch((err) => {
            toast.error("Erro ao retornar produtos");
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    },
    [currentPage, productSearch, categoriesList, selectedCategories] // eslint-disable-line react-hooks/exhaustive-deps
  );

  React.useEffect(() => {
    onProductSelect(selectedItems);
  }, [selectedItems]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    if (values.category) {
      query(
        getSubCategoriesByCategoryId,
        { categoryId: values.category.id },
        { fetchPolicy: "cache-first" }
      )
        .then((result) => {
          setCategoriesList(result?.data?.getSubCategoriesByCategoryId);
          setSelectedCategories([]);
        })
        .catch((err) => {
          toast.error("Erro ao retornar categorias");
        });
    }
  }, [values?.category]); // eslint-disable-line react-hooks/exhaustive-deps

  function onProductSelect(selectedItems) {
    const products = formatProducts(selectedItems);
    setValues({ ...values, products });
  }

  function formatProducts(selectedProducts) {
    let products = [];
    selectedProducts.forEach((product) => {
      for (let i = 0; i < product.quantity; i++) {
        products.push({
          ...product.value,
          name:
            product.quantity === 1
              ? product.value.name
              : product.value.name + " | Item " + (i + 1),
        });
      }
    });
    return products;
  }

  function onCategorySelect(category) {
    const categorySelected = selectedCategories.find(
      (c) => c.id === category.id
    );
    if (categorySelected) {
      const newSelectedCategories = selectedCategories.filter(
        (c) => c.id !== category.id
      );
      setSelectedCategories(newSelectedCategories);
      if (newSelectedCategories.length === 0) setTotalSelected(true);
    } else {
      setSelectedCategories([...selectedCategories, category]);
      totalSelected && setTotalSelected(false);
    }
  }

  function goToPreviousPage() {
    setProductsList([]);
    setFilteredProducts([]);
    prev();
  }

  function handleTotalClick() {
    setSelectedCategories([]);
    setTotalSelected(true);
  }

  return (
    <div
      id="area"
      className={"organism__form-products-container " + className}
      {...other}
    >
      <Title
        dataSubtitle={<>Selecione os produtos que deseja comprar</>}
        dataType="medium"
      >
        Catálogo de produtos
      </Title>
      <CardBase full className="step-container">
        <Search
          onChange={(e) => setProductSearch(e.target.value)}
          placeholder={"Pesquisar o produto desejado"}
        />
        <div className="category-container">
          <Tag id={!totalSelected && "disabled"} success={totalSelected} onClick={handleTotalClick}>
            Todos
          </Tag>
          {categoriesList?.map((category) => {
            const disabled = !selectedCategories.find(
              (c) => c?.id === category?.id
            );
            return (
              <Tag
                id={disabled && "disabled"}
                onClick={() => onCategorySelect(category)}
                success={!disabled}
              >
                {category.label}
              </Tag>
            );
          })}
        </div>

        <div className="catalog-list-container">
          <CatalogItem
            take={take}
            totalProducts={totalProducts}
            onChange={onProductSelect}
            data={filteredProducs}
            isLoading={isLoading}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        </div>
      </CardBase>
      <Button
        id="form-button"
        disabled={values.products ? values?.products.length === 0 : true}
        onClick={next}
      >
        Continuar
      </Button>
      {!join && (
        <Button id="back-button" variant="link" onClick={goToPreviousPage}>
          Anterior
        </Button>
      )}
    </div>
  );
}

export default FormProducts;
