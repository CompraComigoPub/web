import React from 'react';
import %CamelName% from '../';

import './styles.scss';

const def = {
  title: '%upperKind%s/%CamelName%'
};
export default def;

function %CamelName%El () {
  return <div style={{height: '100%'}}>
    <div className="%kind%__%dashed-name%-el-container">
      <%CamelName% />
    </div>
  </div>;
}

export {
  %CamelName%El as %CamelName%
};
