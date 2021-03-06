import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Random from '../Random';

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
    <Random />
  </HeaderStyled>
);

export default memo(Header);
