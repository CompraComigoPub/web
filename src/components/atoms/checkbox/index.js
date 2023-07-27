import React from 'react';
import { identity } from '../../../utils/generalHelper';


// loading the sass style fot the component
import './index.scss';

function Checkbox(props) {
  const {
    className = "",
    children,
    checked = false,
    disabled = false,
    onClick = identity,
    ...other
  } = props;

  // const [isChecked, setCheck] = React.useState(checked);
  // const handleOnClick = (event) => {
  //   setCheck(!isChecked);
  //   onClick(event);
  // };

  return <div
    className={"atom__checkbox-container " + className}
    disabled={disabled}
  >
    <label className="checkbox">
      <input
        type="checkbox"
        // name="checkbox"
        // onClick={disabled ? identity : handleOnClick}
        disabled={disabled}
        checked={checked}
        onChange={onClick}
        {...other}
      />
      <span className="checkmark"></span>
    </label>
  </div>;
}

export default Checkbox;
