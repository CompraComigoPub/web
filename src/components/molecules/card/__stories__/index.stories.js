import ProgressBar from 'components/atoms/progress-bar';
import React from 'react';
import Card from '../';
//import AvatarCompany from '../../../atoms/avatar-company';
import IconLabel from '../../../atoms/icon-label';
import './styles.scss';


const data = {
  title: 'Molecules/Card'
};
export default data;

const company = {
  logo: "/images/company-avatar.jpg",
  name: 'Marcopolo'
};

const footer = [
  <IconLabel> 54 empresas compraram</IconLabel>,
  <ProgressBar
    label=" dias restantes"
    max={100}
    current={30} />
];

const content = "Esse texto é a descrição do produto com limite de 140 caracteres mussum Ipsum, cacilds vidis litro abertis. Pra lá, depois divoltiaa...";

function CardRegular() {
  return <div style={{ height: '100%' }}>
    <h3>card</h3>
    <div className="molecule__card-el-container">
      <Card
        company={company}
        title="Lacres"
        content={content}
        image={"/images/img-lacres.jpg"}
        footer={footer} />
    </div>
  </div>;
}
export function CardRegularWithoutImage() {
  return <div style={{ height: '100%' }}>
    <h3>card</h3>
    <div className="molecule__card-el-container">
      <Card
        company={company}
        title="Lacres"
        content={content}
        footer={footer} />
    </div>
  </div>;
}
export function CardLarge() {
  return <div style={{ height: '100%' }}>
    <h3>card</h3>
    <div className="molecule__card-el-container">
      <Card
        company={company}
        title="Polipropeno"
        content={content}
        image={"/images/img-card-large.jpg"}
        footer={footer}
        large />
    </div>
  </div>;
}

export {
  CardRegular as Card
};
