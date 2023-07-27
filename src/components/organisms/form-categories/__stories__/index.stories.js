import React from 'react';
import FormCategories from '../';

import './styles.scss';

const def = {
  title: 'Organisms/FormCategories'
};
export default def;

function FormCategoriesEl () {
  return <div style={{height: '100%'}}>
    <div className="organism__form-categories-el-container">
      <FormCategories />
    </div>
  </div>;
}

export {
  FormCategoriesEl as FormCategories
};
