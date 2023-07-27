import React from 'react';
import TagCheck from 'components/atoms/tagcheck';

// loading the sass style fot the component
import './index.scss';

function TagCheckSet (props) {
  const {
    className = "",
    children,
    separator = false,
    vertical = false,
    list = [],
    ...other
  } = props;

  return <div
    className={"molecule__tagcheckset-container " + className}
    data-separator={separator ? 1 : null}
    data-many={list.length > 3 ? 1 : null}
    data-vertical={vertical ? 1 : null}
    {...other}
  >
    {
      list.map(tagData => {
        return <TagCheck key={tagData.label} {...tagData} />;
      })
    }
  </div>;
}

export default TagCheckSet;
