import React from 'react';
import Alert from '../../molecules/alert/';

// loading the sass style fot the component
import './index.scss';

function PurchaseIntentionDetail(props) {
  const {
    className = "",
    children,
    data,
    ...other
  } = props;


  return <div
    className={"molecule__purchase-intention-detail-container " + className}
    {...other}
  >
    <div className="characteristics-detail">
      <div className="title">Características dos pedidos:</div>
      <div className="line">
        <span className="subtitle">Produto: </span>
        <span className="subtitle-data">{data.product.name}</span>
      </div>
      <div className="infos">
        <div className="line">
          <span className="subtitle">Quantidade: </span>
          <span className="subtitle-data">{data.product.quantity}</span>
        </div>
        <div className="line">
          <span className="subtitle">Unidade: </span>
          <span className="subtitle-data">{data.product.unit}</span>
        </div>
        <div className="line">
          <span className="subtitle">SKU</span>
          <span className="subtitle-data">{data.product.sku}</span>
        </div>
      </div>
      <div className="line">
        <span className="subtitle">Observações do fornecedor:</span>
        <span className="subtitle-data">{data.product.extra}</span>
      </div>
      <hr />
    </div>
    <div className="characteristics-detail">
      <div className="title">Características dos pedidos:</div>
      <div className="infos">
        <div className="company-info">
          <span className="subtitle"><img src={data.provider.logo} alt="" /> </span>
          <div>
            <span className="subtitle-data name-logo">{data.provider.name}<br /></span>
            <span className="subtitle-data name-description">{data.provider.description}</span>
          </div>
        </div>
        <div className="line">
          <span className="subtitle">Endereço: </span>
          <span className="subtitle-data address">{data.provider.address}</span>
        </div>
        <div className="line">
          <span className="subtitle">Homologado?</span>
          <span className="subtitle-data">{data.provider.homologated}</span>
        </div>
      </div>
      <hr />
    </div>
    <div className="shipping-detail">
      <div className="title">Informações de envio</div>
      <div className="infos">
        <div className="line">
          <span className="subtitle">Frete: </span>
          <span className="subtitle-data">{data.send.freight}</span>
        </div>
        <div className="line">
          <span className="subtitle">Prazo de entrega: </span>
          <span className="subtitle-data">{data.send.shippingTime}</span>
        </div>
        <div className="line">
          <span className="subtitle">Cidade: </span>
          <span className="subtitle-data">{data.send.city}</span>
        </div>
      </div>
      <div className="alert-card">
        <Alert title="ALERTA DE PRIVACIDADE" kind="warn" full>
          <strong>As informações destes formulários estarão disponíveis apenas para a equipe do Compra Comigo.</strong><br />
          Nenhuma informação será compartilhada com outras empresas.
        </Alert>
      </div>
      <hr />
    </div>
    <div className="financial-infos">
      <div className="title">Informações financeiras</div>
      <div className="financial">
        <span className="subtitle">Preço unitário:</span>
        <span className="financial-subtitle">{data.financial.unitPrice}</span>
      </div>
      <hr />
      <div className="financial">
        <span className="subtitle">Subtotal total:</span>
        <span className="financial-subtitle">{data.financial.subtotalTotal}</span>
      </div>
      <hr />
      <div className="financial">
        <span className="subtitle">ICMS:</span>
        <span className="financial-subtitle">{data.financial.icms}</span>
      </div>
      <hr />
      <div className="financial">
        <span className="subtitle">IPI:</span>
        <span className="financial-subtitle">{data.financial.ipi}</span>
      </div>
      <hr />
      <div className="financial">
        <span className="subtitle">Preço total:</span>
        <span id="total">{data.financial.totalPrice}</span>
      </div>
      <hr />
    </div>
  </div>;
}




export default PurchaseIntentionDetail;
