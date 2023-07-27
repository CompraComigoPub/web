import React from 'react';
// import AddressCard from '../../molecules/address-card';
import InputSet from '../../molecules/input-set';
// loading the sass style fot the component
import './index.scss';

function Address(props) {
  const {
    className = "",
    children,
    ...other
  } = props;

  // const data = [
  //   {
  //     street: "Rua Afonso Camargo, 905",
  //     district: "Santana",
  //     cep: "85070-200",
  //     city: "Guarauava-RS"
  //   }
  // ];

  return <div
    className={"molecule__address-container " + className}
    {...other}
  >

    <div className="form-container">
      <div className="card-title">
        <span id="title">Cadastrar novo endereço</span>
      </div>
      <div className="address">
        <InputSet label="Nome do endereço" name="nome" type="text" required />
        <InputSet label="Rua" name="rua" type="text" required />
        <InputSet label="Numero" name="numero" type="number" required />
        <InputSet label="Bairro" name="bairro" type="text" required />
        <InputSet label="CEP" name="cep" type="number" required />
        <InputSet label="Cidade" name="cidade" type="text" required />
      </div>
      {/*
      <hr />
      <div className="card-title">
        <span id="title">Entrega Papel Couchê A3</span>
      </div>
      <div className="cards">
        <AddressCard
          title="Filial Paraná"
          address={data}
        />
        <AddressCard
          title="Filial Paraná"
          address={data}
        />
        <AddressCard
          title="Filial Paraná"
          address={data}
        />
      </div> */}
      {/* <div className="card-title">
        <span id="title">Entrega Papel Couchê A3</span>
      </div>
      <div className="cards">
        <AddressCard
          title="Filial Paraná"
          address={data}
        />
        <AddressCard
          title="Filial Paraná"
          address={data}
        />
        <AddressCard
          title="Filial Paraná"
          address={data}
        />
      </div> */}
    </div>
  </div >;
}

export default Address;
