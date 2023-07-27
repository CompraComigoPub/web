import React from 'react';
import FormCharacteristics from '../';

import './styles.scss';

export default {
  title: 'Organisms/FormCharacteristics'
};

function FormCharacteristicsEl () {
  return <div style={{height: '100%'}}>
    <h3>Form Characteristics</h3>
    <div className="organism__form-characteristics-el-container">
      <FormCharacteristics />
    </div>
  </div>;
}

export {
  FormCharacteristicsEl as FormCharacteristics
};
