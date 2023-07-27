import React from 'react';
import AddressCard from '../';

import './styles.scss';

export default {
  title: 'Molecules/AddressCard'
};

const fullAdress = [
  {
    street: "Rua Afonso Camargo, 905",
    district: "Santana",
    cep: "85070-200",
    city: "Guarauava-RS"

  }
];

function AddressCardEl() {
  return <div style={{ height: '100%' }}>
    <h3>address card</h3>
    <div className="molecule__address-card-el-container">
      <AddressCard
        title="Filial Paraná"
        address={fullAdress}
      />
    </div>
  </div>;
}

export {
  AddressCardEl as AddressCard
};
