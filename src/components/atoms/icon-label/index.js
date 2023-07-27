import React from 'react';
import BuildingIcon from '../../icons/Building';
// loading the sass style fot the component
import './index.scss';

function IconLabel(props) {
  const {
    className = "",
    children,
    icon,
    ...other
  } = props;

  const buildingIcon = [<BuildingIcon key="defaultIcon" />];

  return <div
    className={"atom__icon-label-container " + className}
    {...other}
  >
    <div className="icon-label">
      <div className="icon">
        {icon !== undefined ? icon : buildingIcon}
      </div>
      <div className="text">
        {children}
      </div>
    </div>
  </div>;
}

export default IconLabel;
