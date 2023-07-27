import React from 'react';
import CardSet from '../';
import Card from '../../../molecules/card';
import ProgressBar from 'components/atoms/progress-bar';
import IconLabel from '../../../atoms/icon-label';

import './styles.scss';

export default {
  title: 'Organisms/CardSet'
};

const company = [
  {
    logo: "/images/logo-jadlog.jpg",
    name: 'Jadlog'
  }
];

const footer = [
  <IconLabel> 19 empresas compraram</IconLabel>,
  <ProgressBar
    label="  dias restantes"
    max={100}
    current={12} />
];

const content = "Esse texto é a descrição do produto com limite de 140 caracteres mussum Ipsum, cacilds vidis litro abertis. Pra lá, depois divoltiaa...";

const cards = [
  <Card
    company={company}
    title="Filme Stretch"
    content={content}
    image={"/images/img-filme-stretch.jpg"}
    footer={footer} />,
  <Card
    company={company}
    title="Corda"
    content={content}
    footer={footer} />,
  <Card
    company={company}
    title="Paletes"
    content={content}
    image={"/images/img-paletes.jpg"}
    footer={footer} />
];

function CardSetEl() {
  return <div style={{ height: '100%' }}>
    <h3>card set</h3>
    <div className="organism__card-set-el-container">
      <CardSet
        title="Minhas compras"
        list={cards}
        seeAll=""
      />
    </div>
  </div>;
}

export {
  CardSetEl as CardSet
};
