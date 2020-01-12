import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '../Shared';

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #1a1b27;
`;

const Header = () => (
  <HeaderStyled>
    <Link to="/">
      <img src="/images/logo.png" alt="Rubitify" width={100}/>
    </Link>
    <Suspense fallback="Random">
      <Button type="button">Random</Button>
    </Suspense>
  </HeaderStyled>
);

export default Header;
