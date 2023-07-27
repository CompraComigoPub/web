import SvgSuccess from 'components/icons/Success';
import React from 'react';

// loading the sass style fot the component
import './index.scss';

function SellerBudgetConclusion(props) {
  const {
    className = "",
    children,
    title,
    subtitle,
    positive,
    ...other
  } = props;

  return <div
    className={"molecule__seller-budget-conclusion-container " + className}
    {...other}
  >
    <SvgSuccess className={positive ? 'green' : 'red'}/>
    <h2 className={positive ? 'green' : 'red'}>Tudo certo!</h2>
    <h2 className={positive ? 'green' : 'red'}>{title}</h2>
    <span>{subtitle}</span>

    {children}
  </div>;
}

export default SellerBudgetConclusion;
