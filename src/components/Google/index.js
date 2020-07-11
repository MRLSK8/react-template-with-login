import React from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

import { login } from '../../services/auth';

function Google() {
  const history = useHistory();

  const responseGoogle = (response) => {
    const data = {
      userId: response?.profileObj?.googleId,
      userName: response?.profileObj?.name,
      email: response?.profileObj?.email,
      picture: response?.profileObj?.imageUrl,
      token: response.tokenObj?.access_token,
      expiresIn: response?.tokenObj?.expires_in,
      access_expiration: response?.tokenObj?.expires_at,
    };

    login(data);

    history.push('/main');
  };

  return (
    <GoogleLogin
      clientId='69058169859-r5oidbbhd6n2vhi44vdc38800064m94o.apps.googleusercontent.com'
      onSuccess={responseGoogle}
      cookiePolicy={'single_host_origin'}
    >
      <Text>Google</Text>
    </GoogleLogin>
  );
}
const Text = styled.p`
  padding-right: 35px;

  @media (max-width: 375px) {
   padding: 0;
   margin-left: 35px;
  }
`;

export default Google;
