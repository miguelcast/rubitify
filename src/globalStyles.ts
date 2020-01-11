import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

  * {
    position: relative;
  }
  
  body, html {
    margin: 0 auto;
    padding: 0;
  }

  body {
    background: #161723;
    color: #ebebeb;
    font-family: 'Poppins', sans-serif;
  }
  
  a, a:active, a:visited {
    color: #ebebeb;
    text-decoration: none;
  }
`;
