import React from 'react';

import styled from 'styled-components';

import { logout } from '../../services/auth';

const Header = () => (
  <Container>
    <Title>Header</Title>
    <LogoutButton onClick={() => logout()}>Log out</LogoutButton>
  </Container>
);

const Container = styled.div`
  width: 80%;
  height: 60px;
  margin: 0 auto;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LogoutButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  font-size: 16px;
  border: none;
  outline: none;
  width: 5em;
  height: 32px;
`;

const Title = styled.h2``;

export default Header;
