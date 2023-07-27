import React from 'react';

// loading the sass style fot the component
import './index.scss';

function ProgressBar(props) {
  const {
    className = "",
    children,
    label,
    max = 80,
    diff = 80,
    current = 80,
    ...other
  } = props;

  return <div
    className={"atom__progress-bar-container " + className}
    {...other}
  >
    <div>
      {label != null
        ? <div className="label"> { diff > 0 ? diff + label : "Participações encerradas"} </div>
        : <></>
      }
      <div className="progress-bar">
        <progress max={max} value={current}></progress>
      </div>
    </div>
  </div>;
}

export default ProgressBar;
