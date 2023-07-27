import React from 'react';
import SelectSuppliers from '../';

import './styles.scss';

const def = {
  title: 'Organisms/SelectSuppliers'
};
export default def;

function SelectSuppliersEl () {
  return <div style={{height: '100%'}}>
    <div className="organism__select-suppliers-el-container">
      <SelectSuppliers />
    </div>
  </div>;
}

export {
  SelectSuppliersEl as SelectSuppliers
};
