import styled from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 18px 10px 42px;
  background-color: #31a4fb;
  color: #ebebeb;
  font-size: 1.2rem;
  
  &:before {
    content: url("/images/random.png");
    position: absolute;
    left: 10px;
  }
`;

export default Button;
