import styled from 'styled-components';

interface Props {
  theme: 'light' | 'dark';
}

const Title = styled.strong<Props>`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-size: 0.9rem;
  font-weight: 100;
  ${({ theme }) => theme === 'light' && 'color: #3d4145'};
`;

export default Title;
