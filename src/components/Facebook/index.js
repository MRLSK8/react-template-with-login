import React from 'react';
import { useHistory } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import styled from 'styled-components';
import Color from 'color';

import { login } from '../../services/auth';

const baseColors = {
  facebookColor: Color('#3b5998'),
  facebookColorDark: Color('#3b5998').darken(0.2).hex(),
  facebookColorLight: Color('#3b5998').lighten(0.2).hex(),
};

function Facebook() {
  const history = useHistory();

  const handleResponseFacebook = (response) => {
    const data = {
      userId: response?.userId,
      userName: response?.name,
      email: response?.email,
      picture: response?.picture?.data?.url,
      token: response.accessToken,
      expiresIn: response.expiresIn,
      access_expiration: response.data_access_expiration_time,
    };

    login(data);

    history.push('/main');
  };

  return (
    <FacebookLogin
      appId='744645719635817'
      fields='name,email,picture'
      callback={handleResponseFacebook}
      render={(renderProps) => (
        <Button onClick={renderProps.onClick} colors={baseColors}>
          Login with Facebook
        </Button>
      )}
    />
  );
}

const Button = styled.button`
  width: 16em;
  height: 3em;
  font-size: 14px;
  border: none;
  border-radius: 0.2em;
  color: #FFF;
  background: linear-gradient(
    ${(props) => props.colors.facebookColorLight},
    ${(props) => props.colors.facebookColor},
    ${(props) => props.colors.facebookColorDark}
  );
  font-family: serif;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.colors.facebookColorDark};
  }
`;

export default Facebook;
