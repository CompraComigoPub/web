import React from 'react';
import Alert from '../';

import './styles.scss';

const data = {
  title: 'Molecules/Alert'
};
export default data;

function AlertEl (props) {
  return <Alert title="ALERTA DE PRIVACIDADE" kind="warn" full {...props}>
    <strong>As informações destes formulários estarão disponíveis apenas para a equipe do Compra Comigo.</strong><br/>
    Nenhuma informação será compartilhada com outras empresas.
  </Alert>;
}

export function AlertPublicData (props) {
  return <Alert title="ALERTA DE PRIVACIDADE" kind="ok" full {...props}>
    As informações compartilhadas nessa página são públicas.
  </Alert>;
}

export {
  AlertEl as Alert
};
