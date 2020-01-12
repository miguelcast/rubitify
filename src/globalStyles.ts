import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

  *,
  *:before,
  *:after {
    position: relative;
    box-sizing: border-box;
  }
  
  body,
  html {
    margin: 0 auto;
    padding: 0;
  }

  body {
    background: #161723;
    color: #ebebeb;
    font-family: 'Poppins', sans-serif;
    padding-bottom: 60px;
  }
  
  a,
  a:active,
  a:visited {
    color: #ebebeb;
    text-decoration: none;
  }
`;
