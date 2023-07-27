import React from 'react';
// loading the sass style fot the component
import './index.scss';

function InputSet(props) {
  const {
    className = "",
    children,
    label = "",
    inputClassName = '',
    name,
    id,
    placeholder,
    required,
    full = false,
    Input = null,
    type,
    datatype,
    ...other
  } = props;

  // let TheInput = Input;
  // if (type === "textarea" && !Input) {
  //   TheInput = props => {
  //     const {
  //       children,
  //       type,
  //       ...other
  //     } = props;
  //     return <textarea data-is-textarea="1" {...other} />;
  //   };
  // }

  // if (type === "select" && !Input) {
  //   TheInput = props => {
  //     const {
  //       children,
  //       type,
  //       ...other
  //     } = props;
  //     return <select {...other}>{props.children}</select>;
  //   };
  // }

  const attrs = {
    name,
    id: id || name,
    key: id || name,
    className: 'the-input ' + inputClassName,
    required: required,
    placeholder: placeholder,
    type: type,
    ...other
  };

  return <div
    className={"molecule__input-set-container " + className}
    data-full={full || type === 'textarea' ? 1 : null}
    {...other}
  >
    <label htmlFor={id || name}>{label}</label>

    {
      (type === "select" && !Input)
        ? <select {...attrs}>{props.children}</select>
        : null
    }
    {
      (type === "textarea" && !Input)
        ? <textarea data-is-textarea="1" {...attrs} />
        : null
    }
    {
      (type !== "textarea" && type !== "select")
        ? <input {...attrs} />
        : null
    }
    {/* {
      TheInput
        ? <TheInput name={name} id={id || name} key={id || name} className={'the-input ' + inputClassName} required={required} type={type} {...other}>{children}</TheInput>
        : <input    name={name} id={id || name} key={id || name} className={'the-input ' + inputClassName} required={required} placeholder={placeholder} type={type} {...other} />
    } */}
  </div>;
}

export default InputSet;
