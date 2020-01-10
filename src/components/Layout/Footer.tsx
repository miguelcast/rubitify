import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  padding: 10px;
  text-align: center;
  font-size: 0.7rem;
`;

const Footer = () => (
  <FooterStyled>
    Made with ❤ by <a href={process.env.REACT_APP_TWITTER}>{process.env.REACT_APP_AUTHOR}</a>
  </FooterStyled>
);

export default Footer;
