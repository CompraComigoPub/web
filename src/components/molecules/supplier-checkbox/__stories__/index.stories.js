import React from 'react';
import SupplierCheckbox from '../';

import './styles.scss';

const def = {
  title: 'Molecules/SupplierCheckbox'
};
export default def;

function SupplierCheckboxEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__supplier-checkbox-el-container">
      <SupplierCheckbox />
    </div>
  </div>;
}

export {
  SupplierCheckboxEl as SupplierCheckbox
};
