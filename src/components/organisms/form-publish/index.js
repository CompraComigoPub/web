import React from "react";
import { useForm } from "react-hook-form";

import Title from "components/molecules/title";
import CardBase from "components/atoms/base-card";
import { AlertPublicData } from "components/molecules/alert/__stories__/index.stories";
import Button from "components/atoms/button";
import InputSet from "components/molecules/input-set";
// import DropZone from "components/atoms/drop-zone";
// import PurchaseDetailTabDocs from "components/molecules/purchase-detail-tab-docs";

// loading the sass style fot the component
import "./index.scss";
import { useUser } from "utils/contexts/user";

function FormPublish(props) {
  const {
    className,
    children,
    onChange,
    values,
    setValues,
    prev,
    next,
    step,
    ...other
  } = props;

  const { register, handleSubmit } = useForm();
  const { userData } = useUser();
  React.useEffect(() => {
    if (values?.purchase) {
      next();
    }
  }, [values]); // eslint-disable-line react-hooks/exhaustive-deps

  const getPurchaseDefaultName = () => {
    const productIds = values.products.map((product) => product.id);
    const hasMultiplesProducts = [...new Set(productIds)].length > 1;

    if (hasMultiplesProducts) return values?.category?.label;
    return values?.products[0]?.name.split("|")[0];
  };

  const defaultDescription = `A empresa ${
    userData.company.tradeName
  } gostaria de convidar os participantes da rede para comprar junto ${getPurchaseDefaultName()}`;


  const onSubmit = handleSubmit((data) => {
    const purchase = data;
    purchase.title = purchase.title || getPurchaseDefaultName();
    purchase.description = purchase.description || defaultDescription;

    setValues({ ...values, purchase });
    // next();
  });

  return (
    <div
      id="area"
      className={"organism__form-publish-container " + className}
      // {...other}
    >
      <Title dataSubtitle={<>Configure sua publicação.</>} dataType="medium">
        Publicação
      </Title>

      <AlertPublicData className="alert-el" />

      <form onSubmit={onSubmit}>
        <CardBase full className="step-container">
          <div className="observation-area">
            <h2>Descrição*</h2>
            {step === 4 && (
              <>
                <InputSet
                  {...register(`description`)}
                  name="description"
                  type="textarea"
                  defaultValue={defaultDescription}
                  placeholder={"Descreva sua compra"}
                  required
                />
                <div id="row">
                  <InputSet
                    label="Título*"
                    className="date"
                    {...register(`title`)}
                    defaultValue={getPurchaseDefaultName()}
                    name="title"
                    type="text"
                    full
                    placeholder={"Digite o título da publicação"}
                    required
                  />

                  <InputSet
                    {...register(`deadline`)}
                    className="date"
                    label="Finalizar no dia*"
                    name="deadline"
                    type="date"
                    // placeholder={"Digite as tags separadas por vírgulas"}
                    required
                  />
                </div>
              </>
            )}
          </div>
        </CardBase>

        <div className="actions-container" id="row-button">
          <Button>
            <input id="form-button-input" type="submit" value="Finalizar" />
          </Button>
        </div>
      </form>
      <Button id="back-button" variant="link" onClick={prev}>
        Anterior
      </Button>
    </div>
  );
}

export default FormPublish;
