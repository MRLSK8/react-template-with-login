import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import {
  Container,
  Form,
  Title,
  Input,
  Button,
  ErrorMessage,
  Message,
  SocialMedia,
} from './styles';

import { isAuthenticated } from '../../services/auth';
import Facebook from '../../components/Facebook';
import { login } from '../../services/auth';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const handleOnSubmit = (data) => {
    login(data);
    history.push('/main', { data });
  };

  if (isAuthenticated()) {
    history.push('/main');
    return false;
  } else {
    return (
      <Container>
        <Form onSubmit={handleSubmit(handleOnSubmit)}>
          <Title>Login</Title>
          <Input
            name='userName'
            placeholder='Username'
            ref={register({ required: true })}
          />
          {errors.userName && (
            <ErrorMessage>
              The field <span>Username</span> is required *
            </ErrorMessage>
          )}

          <Input
            type='password'
            name='password'
            placeholder='Password'
            ref={register({ required: true })}
          />
          {errors.password && (
            <ErrorMessage>
              The field <span>Password</span> is required *
            </ErrorMessage>
          )}

          <Button type='submit'>Log in</Button>

          <Message>Or login with</Message>

          <SocialMedia>
            <Facebook />
            <Facebook />
          </SocialMedia>
        </Form>
      </Container>
    );
  }
};

export default Login;
