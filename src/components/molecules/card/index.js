import React from 'react';
//import AvatarCompany from '../../atoms/avatar-company';
// loading the sass style fot the component
import './index.scss';

function Card(props) {
  const {
    className = "",
    children,
    image,
    company = {},
    title,
    large = false,
    content,
    footer,
    onClick,
    ...other
  } = props;


  return <div
    className={"molecule__card-container " + className}
    data-no-image={image ? null : 1}
    data-large={large ? 1 : null}
    data-has-click={onClick ? 1 : null}
    onClick={onClick}
    {...other}
  >

    <div className="card-box-container">
      <div className="card-box-content">
        <div className="right-child">
          <div className="name-logo">
            <img src={company.logo} id="company-logo" alt="" />
            <span>{company.name}</span>
          </div>
          <div className="card-title">
            {title}
          </div>
          <div className="card-content">
            {content}
          </div>
        </div>
        <div className="left-child" id="card-footer">
          <div className="card-image">
            <img id="product-image" src={image} alt={""} />
          </div>
        </div>
        <div className="right-child">
          <div className="card-footer">
            {footer}
          </div>
        </div>
      </div>
    </div>
  </div >;
}

export default Card;
