import React from 'react';
import AvatarCompany from 'components/atoms/avatar-company';

// loading the sass style fot the component
import './index.scss';

function PurchaseDetailTabMembers (props) {
  const {
    className = "",
    members = [],
    children,
    ...other
  } = props;

  function drawCards(company) {
    return (<div className="company-card">
      <AvatarCompany imageUrl={company.avatar} medium className="avatar" />
      <div className="name">{company.name}</div>
      <div className="role">{company.role}</div>
    </div>);
  }

  return <div
    className={"molecule__purchase-detail-tab-members-container " + className}
    {...other}
  >

    {members.map(company => { return drawCards(company);})}

    {children}
  </div>;
}

export default PurchaseDetailTabMembers;
