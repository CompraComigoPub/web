import React from 'react';
import FormInformations from '../';

import './styles.scss';

export default {
  title: 'Organisms/FormInformations'
};

function FormInformationsEl () {
  return <div style={{height: '100%'}}>
    <h3>Form Informations</h3>
    <div className="organism__form-informations-el-container">
      <FormInformations />
    </div>
  </div>;
}

export {
  FormInformationsEl as FormInformations
};
