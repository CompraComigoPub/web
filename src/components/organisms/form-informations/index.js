import React from 'react';
import Title from 'components/molecules/title';
import CardBase from 'components/atoms/base-card';
import { Alert } from 'components/molecules/alert/__stories__/index.stories';

// loading the sass style fot the component
import './index.scss';
import Address from 'components/molecules/address';

function FormInformations (props) {
  const {
    className,
    children,
    onChange,
    // values = {},
    ...other
  } = props;

  const theForm = React.useRef(null);

  // function onChangeHandler(event) {
  //   onChange(event, theForm.current.checkValidity());
  // }

  return (
    <form
      ref={theForm}
      className={"organism__form-informations-container " + className}
      {...other}
    >
      <Title
        dataSubtitle={<>Complete suas informações</>}
        dataType="medium"
      >
        Informações Auxiliares
      </Title>

      <Alert />

      <CardBase full className="step-container">
        <Address />
        {/* <input
          required
          name="info-field-1"
          value={values['info-field-1'] || ""}
          type="text"
          onChange={onChangeHandler}
          placeholder="Name"
        /> */}
      </CardBase>
    </form>
  );
}

export default FormInformations;
