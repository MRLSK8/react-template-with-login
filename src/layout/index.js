import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Aside from '../components/Aside';

function layout({ children }) {
  return (
    <Container>
      <CustomAside />
      <CustomHeader />
      <ContentWrapper>
        {children}
        <Footer />
      </ContentWrapper>
    </Container>
  );
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: green;

  display: grid;
  grid-template-columns: minmax(120px, 10%) auto;
  grid-template-rows: 60px calc(100% - 60px);
  grid-template-areas:
    'aside header'
    'aside content';
`;

const ContentWrapper = styled.main`
  grid-area: content;
`;

const CustomAside = styled(Aside)`
  grid-area: aside;
`;

const CustomHeader = styled(Header)`
  grid-area: header;
`;

export default layout;
