import React from 'react';
import ProductHeader from '../';

import './styles.scss';

export default {
  title: 'Molecules/ProductHeader'
};

function ProductHeaderEl () {
  return <div style={{height: '100%'}}>
    <h3>Product Header</h3>
    <div className="molecule__product-header-el-container">
      <ProductHeader />
    </div>
  </div>;
}

export {
  ProductHeaderEl as ProductHeader
};
