import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FiUser, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

import {
  Container,
  Form,
  Title,
  Input,
  Button,
  ErrorMessage,
  Message,
  SocialMedia,
  InputWithIcons,
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
          <InputWithIcons>
            <FiUser className='inputIcon' color='gray' />
            <Input
              name='userName'
              placeholder='Username'
              ref={register({ required: true })}
            />
          </InputWithIcons>
          {errors.userName && (
            <ErrorMessage>
              The field <span>Username</span> is required *
            </ErrorMessage>
          )}

          {/* 
            <FiEye />
            <FiEyeOff /> 
          */}

          <InputWithIcons>
            <FiLock className='inputIcon' color='gray' />
            <Input
              type='password'
              name='password'
              placeholder='Password'
              ref={register({ required: true })}
            />
          </InputWithIcons>
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
