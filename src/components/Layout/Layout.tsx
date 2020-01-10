import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from "./Header";

const Main = styled.main`
  margin: 0 auto;
  padding: 1rem;
`;

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
