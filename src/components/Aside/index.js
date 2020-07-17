import React from 'react';
import styled from 'styled-components';

function Aside() {
  return (
    <Container>
        <p>aside</p>
    </Container>
  );
}

export const Container = styled.footer`
  width: 100%;
  height: 100vh;

  background: blue;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Aside;
