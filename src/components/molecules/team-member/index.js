import React from 'react';
import AvatarUser from '../../atoms/avatar-user';

// loading the sass style fot the component
import './index.scss';

function TeamMember(props) {
  const {
    className = "",
    children,
    image,
    name,
    companyName,
    ...other
  } = props;

  return <div
    className={"molecule__team-member-container " + className}
    {...other}
  >
    <div className="team-member-card">
      <div className="user-photo">
        <AvatarUser smaller />
      </div>
      <div className="team-member-content">
        <span id="name">{name}</span>
        <span id="company-name">{companyName}</span>
      </div>

    </div>

    {children}
  </div>;
}

export default TeamMember;
