import React from 'react';
import Sidebanner from 'components/organisms/side-banner';
import Password from 'components/molecules/password';
import PasswordSuccess from 'components/molecules/password-success';

// loading the sass style fot the component
import './index.scss';

function NewPassword (props) {
  const {
    className = "",
    children,
    ...other
  } = props;

  const [success, setSuccess] = React.useState(false);

  return <div
    className={"page__new-password-container " + className}
    {...other}
  >
    <Sidebanner/>
    <div className='main-area'>
      {!success ?
        <Password setSuccess={setSuccess}/>
        :
        <PasswordSuccess />
      }

    </div>

    {children}
  </div>;
}

export default NewPassword;
