import React from 'react';
import { identity } from '../../../utils/generalHelper';

// loading the sass style fot the component
import './index.scss';

function RadioButton(props) {
  const {
    className = "",
    children,
    checked = false,
    disabled = false,
    onClick = identity,
    ...other
  } = props;


  const [isChecked, setCheck] = React.useState(checked);
  const handleOnClick = (event) => {
    setCheck(!isChecked);
    onClick(event);
  };

  return <div
    className={"atom__radio-button-container " + className}
    data-disabled={disabled ? 1 : null}
    {...other}
  >
    <label class="radio-button">
      <input
        type="radio"
        name="radio"
        onClick={disabled ? identity : handleOnClick}
        checked={isChecked}
      />
      <span class="checkmark"></span>
    </label>
  </div>;
}

export default RadioButton;
