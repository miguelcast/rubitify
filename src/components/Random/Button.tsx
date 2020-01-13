import styled from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 14px 8px 42px;
  background-color: #31a4fb;
  color: #ebebeb;
  font-size: 1rem;
  
  &:before {
    content: url("/images/random.png");
    position: absolute;
    left: 8px;
    top: 6px;
  }
`;

export default Button;
