import React from 'react';
import PurchaseDetailTabDocs from '../';

import './styles.scss';

const def = {
  title: 'Molecules/PurchaseDetailTabDocs'
};
export default def;

const docs = [
  {
    name: "Documento-auxiliar.pdf",
    link: "/download/Documento-auxiliar.pdf"
  },
  {
    name: "PDF-021220.pdf",
    link: "/download/PDF-021220.pdf"
  },
  {
    name: "ultimos-pedidos.pdf",
    link: "/download/ultimos-pedidos.pdf"
  },
];

function PurchaseDetailTabDocsEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__purchase-detail-tab-docs-el-container">
      <PurchaseDetailTabDocs documents={docs} />
    </div>
  </div>;
}

export {
  PurchaseDetailTabDocsEl as PurchaseDetailTabDocs
};
