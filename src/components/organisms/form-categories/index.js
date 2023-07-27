import React from "react";

import CardBase from "components/atoms/base-card";
// loading the sass style fot the component
import "./index.scss";
import Title from "components/molecules/title";
import { useQuery } from "utils/graphql";
import categoriesByNetwork from "utils/graphql/queries/all/categoriesByNetwork";
import Loader from "components/atoms/loader";

function FormCategories(props) {
  const { className = "", children, next, setValues, ...other } = props;
  const { data, loading, error } = useQuery(categoriesByNetwork);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h1>Ocorreu um erro ao tentar obter as categorias</h1>;
  }

  const goToNextStep = (category) => {
    setValues({ category });
    next();
  };

  return (
    <div
      className={"organism__form-categories-container " + className}
      {...other}
    >
      <Title
        dataSubtitle={
          <>Selecione a categoria de produtos que você desja comprar</>
        }
        dataType="medium"
      >
        Categorias
      </Title>

      <CardBase full className="step-container">
        <div className="categories-content">
          {data?.categoriesByNetwork.map((category) => {
            return (
              <div
                className={`item-catalog-container`}
                onClick={() => goToNextStep(category)}
                key={category.id}
              >
                <div className={`item-content`}>
                  <img src={category.photo} alt="" />
                </div>

                <div className={`item-text`}>
                  <div className={`name-detail`}>{category.label}</div>
                  <br />
                  <div className={`content`}>{category.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </CardBase>
    </div>
  );
}

export default FormCategories;
