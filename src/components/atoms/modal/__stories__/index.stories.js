import React from 'react';
import Modal from '../';

import './styles.scss';

const def = {
  title: 'Atoms/Modal'
};
export default def;

function ModalEl () {
  return <div style={{height: '100%'}}>
    <div className="atom__modal-el-container">
      <Modal />
    </div>
  </div>;
}

export {
  ModalEl as Modal
};
