import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Title } from './styles';

import Facebook from '../../components/Facebook';
import { isAuthenticated } from '../../services/auth';

const Login = () => {
  const history = useHistory();

  if (isAuthenticated()) {
    history.push('/main');
    return false;
  } else {
    return (
      <Container>
        <Title>Login</Title>
        <Facebook />
      </Container>
    );
  }
};

export default Login;
