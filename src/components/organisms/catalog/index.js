import React from 'react';
import Search from '../../atoms/search';
import CatalogItem from '../../molecules/catalog-item';

// loading the sass style fot the component
import './index.scss';

function Catalog(props) {
  const {
    className = "",
    children,
    ...other
  } = props;

  const data = [
    {
      image: "/images/img-papel-chamex.jpg",
      name: "Papel Chamex Couchê ",
      detail: "A3, 90g, Fosco",
      content: "Esse texto é a descrição do produto com limite de 260 caracteres mussum Ipsum, cacilds vidis litro abertisasas, mussum Ipsum, cacilds vidis litro abertisasas, mussum Ipsum, cacilds vidis litro abertisasas... ",
    },
    {
      image: "/images/img-papel-offset.jpg",
      name: "Papel Chamex Offset ",
      detail: "A4, 120g",
      content: "Esse texto é a descrição do produto com limite de 260 caracteres mussum Ipsum, cacilds vidis litro abertisasas, mussum Ipsum, cacilds vidis litro abertisasas, mussum Ipsum, cacilds vidis litro abertisasas... ",
    },
    {
      image: "/images/img-filme-stretch.jpg",
      name: "Filme Stretch Manual ",
      detail: "10kg, 500x25",
      content: "Esse texto é a descrição do produto com limite de 260 caracteres mussum Ipsum, cacilds vidis litro abertisasas, mussum Ipsum, cacilds vidis litro abertisasas, mussum Ipsum, cacilds vidis litro abertisasas... ",
    },
    {
      image: undefined,
      name: "Chapas MDF Multiuso",
      detail: "Branco, 21x29, 3mm",
      content: "Esse texto é a descrição do produto com limite de 260 caracteres mussum Ipsum, cacilds vidis litro abertisasas, mussum Ipsum, cacilds vidis litro abertisasas, mussum Ipsum, cacilds vidis litro abertisasas... ",
    },
    {
      image: undefined,
      name: "Plástico Bolha 29 micras",
      detail: "Fácil Light, 60x20",
      content: "Esse texto é a descrição do produto com limite de 260 caracteres mussum Ipsum, cacilds vidis litro abertisasas, mussum Ipsum, cacilds vidis litro abertisasas, mussum Ipsum, cacilds vidis litro abertisasas... ",
    },
  ];


  return <div
    className={"organism__catalog-container " + className}
    {...other}
  >

    <div className="catalog-container">
      <Search />
    </div>
    <div className="catalog-cards">
      <CatalogItem
        data={data}
      />
    </div>

  </div>;
}

export default Catalog;
