import React from 'react';
import PurchaseDetail from '../';

import './styles.scss';

const def = {
  title: 'Organisms/PurchaseDetail'
};
export default def;

const activity = [
  {
    ageGroup: 'Hoje',
    entries: [
      {
        title: <><strong>Martiplast</strong> enviou um arquivo</>,
        age: '3 horas atrás',
      },
      {
        title: <><strong>Martiplast</strong> enviou um arquivo</>,
        age: '3 horas atrás',
      },
    ],
  },
  {
    ageGroup: 'Semana passada',
    entries: [
      {
        title: <><strong>Martiplast</strong> enviou um arquivo</>,
        age: '3 horas atrás',
      },
      {
        title: <><strong>Martiplast</strong> enviou um arquivo</>,
        age: '3 horas atrás',
      },
      {
        title: <><strong>Martiplast</strong> enviou um arquivo</>,
        age: '3 horas atrás',
      },
    ],
  },
];

const documents = [
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

const general = {
  text: <>Esse texto é a descrição completa do produto mussum Ipsum, cacilds vidis litro abertis. Pra lá, depois divoltiaa Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça. Mé faiz elementum girarzis, nisi eros vermeio. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. In elementis mé pra quem é amistosis quis leo. Si num tem leite então bota uma pinga aí cumpadi! Casamentiss faiz malandris se pirulitá. Viva Forevis aptent taciti sociosqu ad litora torquent. Suco de cevadiss deixa as pessoas mais interessantis.<br/> Si num tem leite então bota uma pinga aí cumpadi! Casamentiss faiz malandris se pirulitá. Viva Forevis aptent taciti sociosqu ad litora torquent. Suco de cevadiss deixa as pessoas mais interessantis.</>,
  image: "/images/img-card.jpg",
  tags: ['plástico', 'produção', 'Proplipropileno'],
};

const members = [
  {
    name: 'Empresa 1',
    role: 'Empresa líder',
    avatar: "http://placekitten.com/200/300"
  },
  {
    name: 'Empresa 2',
    role: 'Empresa Participante',
    avatar: "http://placekitten.com/200/301"
  },
  {
    name: 'Empresa 3',
    role: 'Empresa Participante',
    avatar: "http://placekitten.com/200/304"
  },
];

function PurchaseDetailEl () {
  return <div style={{height: '100%'}}>
    <div className="organism__purchase-detail-el-container">
      <PurchaseDetail
        activity={activity}
        documents={documents}
        general={general}
        members={members}
      />
    </div>
  </div>;
}

export {
  PurchaseDetailEl as PurchaseDetail
};
