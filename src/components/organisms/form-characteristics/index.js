import React from "react";
import Title from "components/molecules/title";
import CardBase from "components/atoms/base-card";
import { Alert } from "components/molecules/alert/__stories__/index.stories";

// loading the sass style fot the component
import "./index.scss";
import Characteristics from "components/molecules/characteristics";

function FormCharacteristics(props) {
  const {
    className,
    children,
    onChange,
    values,
    prev,
    next,
    step,
    setValues,
    ...other
  } = props;

  return (
    <div
      id="area"
      className={"organism__form-characteristics-container " + className}
      {...other}
    >
      <Title
        dataSubtitle={<>Descreva as características dos produtos selecionados</>}
        dataType="medium"
      >
        Características
      </Title>

      <Alert />

      <CardBase full className="step-container">
        {/* <input
          required
          name="char-field-1"
          value={values['char-field-1'] || ""}
          type="text"
          onChange={onChangeHandler}
          placeholder="Name"
        /> */}
        <Characteristics
          next={next}
          prev={prev}
          setValues={setValues}
          values={values}
          step={step}
        />
      </CardBase>
    </div>
  );
}

export default FormCharacteristics;
