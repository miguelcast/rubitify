import styled from 'styled-components';

const WrapperCard = styled.div`
  width: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  cursor: pointer;
  
  &:hover,
  &:focus {
    img {
      filter: blur(3px) brightness(50%);
    }
    &:after {
      content: '';
      background-image: url("/images/eye.png");
      position: absolute;
      top: 60px;
      left: 50%;
      width: 32px;
      height: 32px;
      text-align: center;
      transform: translate(-50%, -50%);
    }
  }
`;

export default WrapperCard;
