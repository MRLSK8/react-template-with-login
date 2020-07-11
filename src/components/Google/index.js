import React from 'react';
import GoogleLogin from 'react-google-login';

import styled from 'styled-components';

function Google() {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId='658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'
      onSuccess={responseGoogle}
      cookiePolicy={'single_host_origin'}
    >
      <Text>Google</Text>
    </GoogleLogin>
  );
}
const Text = styled.p`
  padding-right: 35px;
`;

export default Google;
