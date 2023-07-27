import React from 'react';
import Address from '../';

import './styles.scss';

const def = {
  title: 'Molecules/Address'
};
export default def;



const data = [
  {
    street: "Rua Afonso Camargo, 905",
    district: "Santana",
    cep: "85070-200",
    city: "Guarauava-RS"

  }
];


function AddressEl() {
  return <div style={{ height: '100%' }}>
    <div className="molecule__address-el-container">
      <Address data={data}/>
    </div>
  </div>;
}

export {
  AddressEl as Address
};
