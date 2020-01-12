import styled from 'styled-components';

interface Props {
  readonly isActive: boolean;
  readonly isFixed: boolean;
  readonly theme: 'light' | 'dark';
}

const WrapperItem = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: ${({ isFixed }) => isFixed ? '8px 8px 0 0' : '8px'};
  padding: 8px 12px;
  margin-bottom: ${({ isFixed }) => isFixed ? '0' : '0.8rem'};
  background-color: ${({ theme }) => theme === 'light' ? 'white' : '#1a1b27'};
  cursor: pointer;
  
  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  img {
    filter: opacity(${({ isActive }) => isActive ? '1' : '0.2'});
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
