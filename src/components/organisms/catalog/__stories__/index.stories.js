import React from 'react';
import Catalog from '../';

import './styles.scss';

const def = {
  title: 'Organisms/Catalog'
};
export default def;

function CatalogEl () {
  return <div style={{height: '100%'}}>
    <div className="organism__catalog-el-container">
      <Catalog />
    </div>
  </div>;
}

export {
  CatalogEl as Catalog
};
