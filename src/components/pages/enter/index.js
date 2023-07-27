import React from 'react';
import Sidebanner from 'components/organisms/side-banner';
import Login from 'components/molecules/login';
import Forgot from 'components/molecules/forgot';


// loading the sass style fot the component
import './index.scss';

function Enter (props) {
  const {
    className = "",
    children,
    ...other
  } = props;

  const [forgot, setForgot] = React.useState(false);

  return <div
    className={"page__enter-container " + className}
    {...other}
  >
    <Sidebanner/>
    <div className='main-area'>
      {forgot ?
        <Forgot setForgot={setForgot}/>
        :
        <Login setForgot={setForgot}/>
      }
    </div>
    {children}
  </div>;
}

export default Enter;
