import React from 'react';
import CatalogItem from '../';

import './styles.scss';

const def = {
  title: 'Molecules/CatalogItem'
};
export default def;

const data = [
  {
    image: "/images/img-papel-chamex.jpg",
    name: "Papel Chamex Couchê ",
    detail: "A3, 90g, Fosco",
    content: "Esse texto é a descrição do produto com limite de 260 caracteres mussum Ipsum, cacilds vidis litro abertisasas, mussum Ipsum, cacilds vidis litro abertisasas, mussum Ipsum, cacilds vidis litro abertisasas... ",
  },
  {
    image: "/images/img-papel-chamex.jpg",
    name: "Papel Chamex Offset ",
    detail: "A3, 90g, Fosco",
    content: "Esse texto é a descrição do produto com limite de 260 caracteres mussum Ipsum, cacilds vidis litro abertisasas, mussum Ipsum, cacilds vidis litro abertisasas, mussum Ipsum, cacilds vidis litro abertisasas... ",
  },
  {
    image: "/images/img-papel-chamex.jpg",
    name: "Papel Chamex Offset ",
    detail: "A3, 90g, Fosco",
    content: "Esse texto é a descrição do produto com limite de 260 caracteres mussum Ipsum, cacilds vidis litro abertisasas, mussum Ipsum, cacilds vidis litro abertisasas, mussum Ipsum, cacilds vidis litro abertisasas... ",
  },
  {
    image: "/images/img-papel-chamex.jpg",
    name: "Papel Chamex Offset ",
    detail: "A3, 90g, Fosco",
    content: "Esse texto é a descrição do produto com limite de 260 caracteres mussum Ipsum, cacilds vidis litro abertisasas, mussum Ipsum, cacilds vidis litro abertisasas, mussum Ipsum, cacilds vidis litro abertisasas... ",
  },
  {
    image: "/images/img-papel-chamex.jpg",
    name: "Papel Chamex Offset ",
    detail: "A3, 90g, Fosco",
    content: "Esse texto é a descrição do produto com limite de 260 caracteres mussum Ipsum, cacilds vidis litro abertisasas, mussum Ipsum, cacilds vidis litro abertisasas, mussum Ipsum, cacilds vidis litro abertisasas... ",
  },
  {
    image: undefined,
    name: "Papel Chamex Offset ",
    detail: "A3, 90g, Fosco",
    content: "Esse texto é a descrição do produto com limite de 260 caracteres mussum Ipsum, cacilds vidis litro abertisasas, mussum Ipsum, cacilds vidis litro abertisasas, mussum Ipsum, cacilds vidis litro abertisasas... ",
  },
  {
    image: undefined,
    name: "Papel Chamex Offset ",
    detail: "A3, 90g, Fosco",
    content: "Esse texto é a descrição do produto com limite de 260 caracteres mussum Ipsum, cacilds vidis litro abertisasas, mussum Ipsum, cacilds vidis litro abertisasas, mussum Ipsum, cacilds vidis litro abertisasas... ",
  },

];

function CatalogItemEl() {
  return <div style={{ height: '100%' }}>
    <div className="molecule__catalog-item-el-container">
      <CatalogItem
        data={data}
      />
    </div>
  </div>;
}
export function CatalogItemSelected() {
  return <div style={{ height: '100%' }}>
    <div className="molecule__catalog-item-el-container">
      <CatalogItem
        data={data}
        selected
      />
    </div>
  </div>;
}

export {
  CatalogItemEl as CatalogItem
};
