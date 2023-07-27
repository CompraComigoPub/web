import React from 'react';
import Sucess from 'components/icons/Sucess';

// loading the sass style fot the component
import './index.scss';

function PurchaseDetailTabActivity (props) {
  const {
    className = "",
    activity = [],
    children,
    ...other
  } = props;

  function drawGroup(activity) {
    return (
      <div>
        <div class="group-title">{activity.ageGroup}</div>
        <div class="group-entries">
          {activity.entries.map(entry => { return drawEntry(entry);})}
        </div>
      </div>
    );
  }

  function drawEntry(entry) {
    return (<a href={entry.link}>
      <div className="entry-card">
        <div className="entry-title"><Sucess className="v-spacer"/>{entry.title}</div>
        <div className="entry-age">{entry.age}</div>
      </div>
    </a>);
  }

  return <div
    className={"molecule__purchase-detail-tab-activity-container " + className}
    {...other}
  >

    {activity.map(group => { return drawGroup(group);})}

    {children}
  </div>;
}

export default PurchaseDetailTabActivity;
