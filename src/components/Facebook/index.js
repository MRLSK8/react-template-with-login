import React from 'react';
import { useHistory } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

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
    if (response.status !== 'unknown') {
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
    }
  };

  return (
    <FacebookLogin
      appId='726826908096787'
      fields='name,email,picture'
      callback={handleResponseFacebook}
      render={(renderProps) => (
        <Button onClick={renderProps.onClick} colors={baseColors}>
          <FaFacebook className='facebookIcon' />
          <p>Facebook</p>
        </Button>
      )}
    />
  );
}

const Button = styled.button`
  width: 10em;
  height: 2.5em;
  font-size: 14px;
  border: none;
  border-radius: 0.2em;
  color: #fff;
  background: linear-gradient(
    ${(props) => props.colors.facebookColorLight},
    ${(props) => props.colors.facebookColor},
    ${(props) => props.colors.facebookColorDark}
  );
  font-family: serif;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  .facebookIcon {
    margin-right: 10px;
    font-size: 15px;
  }

  &:hover {
    background-color: ${(props) => props.colors.facebookColorDark};
  }
`;

export default Facebook;
