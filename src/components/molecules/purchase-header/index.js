import React from 'react';
import LockIcon from '../../icons/Lock';
import MiniLockIcon from '../../icons/MiniLock';

// loading the sass style fot the component
import './index.scss';

function PurchaseHeader(props) {
  const {
    className = "",
    children,
    data,
    hidden,
    ...other
  } = props;

  return <div
    className={"molecule__purchase-header-container " + className}
    data-hidden={hidden ? 1 : null}
    {...other}
  >
    <div className="purchase-header">
      <div className="logo-name">
        {hidden
          ?
          <div className="hidden">
            <LockIcon />
            <div className="hidden-header">
              <span className="title">Confidencial  <MiniLockIcon /></span>
              <div className="subtitle">Informações do comprador estará disponível após aprovação do orçamento.</div>

            </div>
          </div>
          : <div className="company-infos">
            <img src={data.logo} id="logo" alt="" />
            <span>{data.companyName}</span>
          </div>
        }
      </div>
      <div className="product-title">{data.product}</div>
    </div>
  </div>;
}

export default PurchaseHeader;
