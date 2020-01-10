import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Shared';

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Header = () => (
  <HeaderStyled>
    <Link to="/">
      <img src="/images/logo.png" alt="Rubitify" width={100}/>
    </Link>
    <Button type="button">Random</Button>
  </HeaderStyled>
);

export default Header;
