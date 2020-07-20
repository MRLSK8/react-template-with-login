import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FiUser, FiLock, FiEye, FiEyeOff, FiUsers } from 'react-icons/fi';

import {
  Container,
  Form,
  Input,
  Button,
  ErrorMessage,
  Subtitle,
  SocialMedia,
  InputWithIcons,
} from './styles';

import { isAuthenticated } from '../../services/auth';
import Facebook from '../../components/Facebook';
import Google from '../../components/Google';
import { login } from '../../services/auth';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const [isPasswordShowing, setIsPasswordShowing] = useState(false);
  const history = useHistory();

  const handleOnSubmit = (data) => {
    login(data);
    history.push('/main', { data });
  };

  const handleToggleShowPassword = () => {
    setIsPasswordShowing((prevState) => !prevState);
  };

  if (isAuthenticated()) {
    history.push('/main');
    return false;
  } else {
    return (
      <Container>
        <Form onSubmit={handleSubmit(handleOnSubmit)}>
          <FiUsers size={64} color='#F70719' style={{ marginBottom: '24px' }} />
          <InputWithIcons>
            <FiUser className='inputIcon' color='#F70719' />
            <Input
              name='userName'
              placeholder='Username'
              ref={register({ required: true })}
            />
            {errors.userName && (
              <ErrorMessage>The field is required</ErrorMessage>
            )}
          </InputWithIcons>
          <InputWithIcons>
            <FiLock className='inputIcon' color='#F70719' />
            <Input
              type={isPasswordShowing ? 'text' : 'password'}
              name='password'
              placeholder='Password'
              ref={register({ required: true })}
            />
            {isPasswordShowing ? (
              <FiEyeOff
                className='showPasswordIcon'
                color='gray'
                onClick={handleToggleShowPassword}
              />
            ) : (
              <FiEye
                className='showPasswordIcon'
                color='gray'
                onClick={handleToggleShowPassword}
              />
            )}
            {errors.password && (
              <ErrorMessage>The field is required</ErrorMessage>
            )}
          </InputWithIcons>
          <Button type='submit'>Log in</Button>
          <Subtitle>Or login with</Subtitle>
          <SocialMedia>
            <Facebook />
            <Google />
          </SocialMedia>
        </Form>
      </Container>
    );
  }
};

export default Login;
