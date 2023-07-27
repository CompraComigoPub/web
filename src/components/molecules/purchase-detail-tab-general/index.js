import React from 'react';

import CardImage from 'components/atoms/card-image';

// loading the sass style fot the component
import './index.scss';

function PurchaseDetailTabGeneral (props) {
  const {
    className = "",
    image,
    // tags = [],
    children,
    ...other
  } = props;

  return <div
    className={"molecule__purchase-detail-tab-general-container " + className}
    {...other}
  >

    <CardImage full image={image} className="image-spacer" />

    {children}

    <hr className="card-divider" />

    {/* <div className="tags-container">
      {tags.map(tag => {
        return <Tag success>{tag}</Tag>;
      })}
    </div> */}
  </div>;
}

export default PurchaseDetailTabGeneral;
