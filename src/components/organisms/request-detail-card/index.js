import React from "react";

import BaseCard from "components/atoms/base-card";
import Alert from "components/molecules/alert";

import { formatCurrencyValue } from "utils/generalHelper";

// loading the sass style fot the component
import "./index.scss";

function RequestDetailCard(props) {
  const { className = "", children, invoice, ...other } = props;

  const supplierAddress = invoice?.budget.demand.supplier.addresses[0];
  const buyerAddress = invoice?.budget.order.items[0].address;

  return (
    <div
      className={"organism__request-detail-card-container " + className}
      {...other}
    >
      <BaseCard id="base" full>
        <section>
          <div className="top">
            <img alt="Empresa Compradora" src={invoice?.budget.order.company.logo} />
            <h2 className="no-margin">{invoice?.budget.order.company.tradeName}</h2>
          </div>
          <h2 className="no-margin" id="product-name">
            {invoice?.budget.order.purchaseInterest.title}
          </h2>
        </section>
        <hr />
        {invoice?.budget.demand.items.map((item, index) => (
          <>
            <h2 id="product">{`${item.product.name} - Item ${index + 1}`}</h2>
            <section className='no-space'>
              <div>
                <h3>Quantidade:</h3>
                <span>{item.quantity}</span>
              </div>
              <div>
                <h3>Unidade:</h3>
                <span>{item.unity}</span>
              </div>
              <div>
                <div>
                  <h3>Preço:</h3>
                  <span>{formatCurrencyValue(item.price)}</span>
                </div>
              </div>
            </section>
            <section className='no-space'>
              <div>
                <h3>ICMS:</h3>
                <span>{item.icms}%</span>
              </div>
              <div>
                <h3>IPI:</h3>
                <span>{item.ipi}%</span>
              </div>
              {invoice?.budget.order.items[index]?.additionalInfoForms?.map(
              (form) => {
                return (
                  <>
                    {form?.infos?.map((info) => {
                      return (
                        <div>
                          <h3>{info?.field}</h3>
                          <span>{info?.value}</span>
                        </div>
                      );
                    })}
                  </>
                );
              }
            )}
            </section>
            <section>
              <div>
                <h3>Observações:</h3>
                <span>{item.description}</span>
              </div>
            </section>
          </>
        ))}
        <hr />
        <h2>Informações do fornecedor</h2>
        <section>
          <div className="top">
            <img alt="Empresa Vendedora" src={invoice?.budget.demand.supplier.logo} />
            <h3>{invoice?.budget.demand.supplier.name}</h3>
          </div>
          <div>
            <h3>Endereço:</h3>
            <span>
              {supplierAddress?.numericIndentifier
                ? supplierAddress?.street +
                  "," +
                  supplierAddress?.numericIndentifier
                : supplierAddress?.street}
              <br />

              <span>
                {supplierAddress?.city + "-" + supplierAddress?.state}
              </span>
            </span>
          </div>
        </section>
        <hr />
        <h2>Informações de envio</h2>
        <Alert title="ENTREGA" id="alert">
          <p>
            A entrega e prazo dos produtos é de responsabilidade do fornecedor.
          </p>
          <span>
            Qualquer dúvida entrar em contato diretamente com o fornecedor.
          </span>
        </Alert>
        <section>
          {/* <div>
            <h3>Frete:</h3>
            <span>{invoice?.budget.order.items[0].shippingType}</span>
          </div> */}
          <div>
            <h3>Endereço:</h3>
            <span>
              {buyerAddress?.numericIndentifier
                ? buyerAddress?.street + "," + buyerAddress?.numericIndentifier
                : buyerAddress?.street}
              <br />

              <span>{buyerAddress?.city + "-" + buyerAddress?.state}</span>
            </span>
          </div>
        </section>
        <hr />
        <h2>Informações financeiras</h2>
        {/* <section className="dashed-bottom">
          <h3>Preço unitário:</h3>
          <span>R$</span>
        </section>
        <section className="dashed-bottom">
          <h3>Subtotal total:</h3>
          <span>R$</span>
        </section> */}
        <section>
          <h3>Preço total:</h3>
          <p>{formatCurrencyValue(invoice?.budget.demand.totalPrice)}</p>
        </section>
        <hr />
        {/* <div>
          <h3>Notas</h3>
          <span>
            Verifique se você tem o número de registro bancário correto.
          </span>
        </div> */}
      </BaseCard>

      {children}
    </div>
  );
}

export default RequestDetailCard;
