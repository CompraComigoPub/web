import React from 'react';

// loading the sass style fot the component
import './index.scss';

function AddressCard(props) {
  const {
    className = "",
    children,
    title,
    address,
    ...other
  } = props;

  return <div
    className={"molecule__address-card-container " + className}
    {...other}
  >
    {address?.map((item)=>(
      <div className="address-card">
        <div className="title">
          {`${item.street}, ${item.numericIndentifier || 'S/N'}`}<br/>
        </div>
        <div className="address-detail">
          <span>{item.complement || ''}</span><br /><br />
          <span>{item.zipcode} - {item.neighborhood}</span><br/>
          <span>{item.city} - {item.state} </span>
        </div>
      </div>
    ))}
    {/* <div className="address-card">
      <div className="title">
        Cadastrar novo endereço
      </div>
    </div> */}
  </div>;
}

export default AddressCard;
