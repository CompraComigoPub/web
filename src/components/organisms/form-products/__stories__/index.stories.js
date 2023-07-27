import React from 'react';
import FormProducts from '../';

import './styles.scss';

export default {
  title: 'Organisms/FormProducts'
};

function FormProductsEl () {
  return <div style={{height: '100%'}}>
    <h3>Form Products</h3>
    <div className="organism__form-products-el-container">
      <FormProducts />
    </div>
  </div>;
}

export {
  FormProductsEl as FormProducts
};
