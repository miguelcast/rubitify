import React from 'react';
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
    <img src="/images/logo.png" alt="Rubitify" width={100}/>
    <Button type="button">Random</Button>
  </HeaderStyled>
);

export default Header;
