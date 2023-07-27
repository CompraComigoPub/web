import React, { useState } from 'react';
import { useParams } from "react-router-dom";

import Sidebanner from 'components/organisms/side-banner';
import SingIn from 'components/organisms/sign-in';
import AccountSuccess from 'components/molecules/account-success';
import AccountError from 'components/molecules/account-error';

import PageLoader from '../../organisms/loader';

import { useQuery } from 'utils/graphql';
import decodeInviteCompanyToken from 'utils/graphql/queries/auth/decode';

// loading the sass style fot the component
import './index.scss';

function Register(props) {
  const {
    className = "",
    children,
    ...other
  } = props;

  const param = useParams();
  const [created, setCreated] = useState(false);
  const { error, data, loading } = useQuery(decodeInviteCompanyToken, { 'token': param.token });

  if (loading) {
    return (
      <PageLoader />
    );
  }

  return (
    <div
      className={"page__register-container " + className}
      {...other}
    >
      <Sidebanner />
      <div className='main-area'>
        {!created && data ?
          <SingIn data={data} setCreated={setCreated} token={param.token} />
          :
          error ? <AccountError /> : <AccountSuccess />
        }
      </div>

      {children}
    </div>
  );
};

export default Register;
