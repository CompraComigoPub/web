import React from 'react';
import PurchaseDetailTabGeneral from '../';

import './styles.scss';

const def = {
  title: 'Molecules/PurchaseDetailTabGeneral'
};
export default def;

const text = <>Esse texto é a descrição completa do produto mussum Ipsum, cacilds vidis litro abertis. Pra lá, depois divoltiaa Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça. Mé faiz elementum girarzis, nisi eros vermeio. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. In elementis mé pra quem é amistosis quis leo. Si num tem leite então bota uma pinga aí cumpadi! Casamentiss faiz malandris se pirulitá. Viva Forevis aptent taciti sociosqu ad litora torquent. Suco de cevadiss deixa as pessoas mais interessantis.<br/> Si num tem leite então bota uma pinga aí cumpadi! Casamentiss faiz malandris se pirulitá. Viva Forevis aptent taciti sociosqu ad litora torquent. Suco de cevadiss deixa as pessoas mais interessantis.</>;

const image = "/images/img-card.jpg";
const tags = ['plástico', 'produção', 'Proplipropileno'];

function PurchaseDetailTabGeneralEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__purchase-detail-tab-general-el-container">
      <PurchaseDetailTabGeneral image={image} tags={tags}>{text}</PurchaseDetailTabGeneral>
    </div>
  </div>;
}

export {
  PurchaseDetailTabGeneralEl as PurchaseDetailTabGeneral
};
