import Card from 'components/atoms/base-card';
import React from 'react';
// loading the sass style fot the component
import './index.scss';


function Modal (props) {
  const {
    className = "",
    layerClassName = "",
    children,
    open = false,
    onClose = _ => {},
    ...other
  } = props;

  return <div
    className="atom__modal-container"
    data-open={open ? 1 : null}
  >
    <div className={"bg-layer " + layerClassName} onClick={onClose}></div>
    <Card
      className={"modal-body-container " + className}
      containerClassName="modal-card"
      data-open={open ? 1 : null}
      full
      {...other}
    >
      {children}
    </Card>
  </div>;
}

export default Modal;
