import styled from 'styled-components';

const WrapperItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 8px;
  padding: 8px 12px;
  margin-bottom: 0.8rem;
  background-color: #1a1b27;
  cursor: pointer;
  
  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  img {
    filter: opacity(0.2);
    margin-right: 0.8rem;
    transition: all 100ms ease-in-out;
  }
  
  a {
    align-self: flex-end;
  }
  
  &:hover {
    img {
      filter: opacity(1);
    }
  }
`;

export default WrapperItem;
