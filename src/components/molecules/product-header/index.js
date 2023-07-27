import Avatar from 'components/atoms/avatar-company';
import TitleSmall from 'components/atoms/title';
import Title from 'components/molecules/title';
import React from 'react';
// loading the sass style fot the component
import './index.scss';


function ProductHeader (props) {
  const {
    className = "",
    title = '',
    subtitle = '',
    big=false,
    children,
    company,
    ...other
  } = props;

  return <div
    className={"molecule__product-header-container " + className}
    {...other}
  >
    <Title
      dataSubtitle={subtitle}
      dataType={big ? "big" : 'medium'}
      className="title"
    >
      {title}
    </Title>

    <div className="owner-container">
      <Avatar imageUrl={company?.logo} />
      <span>
        <TitleSmall>{company?.tradeName}</TitleSmall>
        Empresa líder
      </span>
    </div>
  </div>;
}

export default ProductHeader;
