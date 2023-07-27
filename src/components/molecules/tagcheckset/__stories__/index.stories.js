import React from 'react';
import TagCheckSet from '../';

import './styles.scss';

const def = {
  title: 'Molecules/TagCheckSet'
};
export default def;

function TagCheckSetEl () {
  return <div className="molecule__tagcheckset-el-container">
    <TagCheckSet
      list={[
        { label: "Item 1", checked: true },
        { label: "Second item", checked: false },
        { label: "The final item", checked: false },
      ]}
    />
  </div>;
}

export function WithSeparator () {
  return <div className="molecule__tagcheckset-el-container">
    <TagCheckSet
      separator
      list={[
        { label: "Item 1", checked: true },
        { label: "Second item", checked: false },
        { label: "The final item", checked: false },
      ]}
    />
  </div>;
}

export function Vertical () {
  return <div className="molecule__tagcheckset-el-container">
    <TagCheckSet
      vertical
      list={[
        { label: "Item 1", checked: true },
        { label: "Second item", checked: false },
        { label: "The final item", checked: false },
      ]}
    />
  </div>;
}

export {
  TagCheckSetEl as TagCheckSet
};
