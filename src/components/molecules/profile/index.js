import AvatarUser from "components/atoms/avatar-user";
import Placeholder from "components/atoms/placeholder";
import React from "react";
// loading the sass style fot the component
import "./index.scss";


function Profile(props) {
  const {
    className = "",
    children,
    large,
    id,
    photo,
    name = "",
    position = "",
    company = null,
    inviterId,
    invitedId,
    firebaseId,
    companyId,
    ...other
  } = props;

  return (
    <div
      className={"molecule__profile-container " + className}
      {...other}
      data-large={large}
    >
      {
        id
          ? <>
            <div className="avatar-wrapper">
              {large ? <AvatarUser imageUrl={photo} /> : <AvatarUser smaller />}
            </div>
            <div className="text-wrapper">
              <h2>{name}</h2>
              <h4>{position}</h4>
              <h3>{
                company ? company.tradeName : ''
              }</h3>
            </div>
          </>
          : <>
            <div className="avatar-wrapper">
              <Placeholder animated type="image" size={4} primary />
              <Placeholder animated size={4} primary />
              <Placeholder animated size={2} primary />
            </div>
            <div className="text-wrapper" />
          </>
      }
    </div>
  );
}

export default Profile;
