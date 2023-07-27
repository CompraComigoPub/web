import React from 'react';
import TabButton from '../../atoms/tab-button';

// loading the sass style fot the component
import './index.scss';

function TabsBar (props) {
  const {
    className = "",
    tabs,
    onChange,
    children,
    ...other
  } = props;

  const [selectedTab, setSelectedTab] = React.useState(tabs[0].id);

  const handleOnClick = (id) => {
    onChange(id);
    setSelectedTab(id);
  };

  return <div
    className={"molecule__tabs-bar-container " + className}
    {...other}
  >
    {tabs.map(tab => {
      return (
        <TabButton id={tab.id} label={tab.label} onClick={handleOnClick} selected={tab.id === selectedTab} />
      );
    })}

    {children}
  </div>;
}

export default TabsBar;
