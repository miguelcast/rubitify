import styled from 'styled-components';

import { WrapperProps } from './types';
import { THEME_LIGHT } from '../../config/constants';

const WrapperItem = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: ${({ isFixed }) => isFixed ? '8px 8px 0 0' : '8px'};
  padding: 8px 12px;
  margin-bottom: ${({ isFixed }) => isFixed ? '0' : '0.8rem'};
  background-color: ${({ theme }) => theme === THEME_LIGHT ? 'white' : '#1a1b27'};
  cursor: pointer;
  
  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  img {
    filter: opacity(${({ isActive }) => isActive ? '1' : '0.4'})
            grayscale(${({ hasPreview }) => hasPreview ? '0' : '1'});
    margin-right: 0.8rem;
    transition: all 100ms ease-in-out;
  }

  a {
    align-self: flex-end;
  }

  .message {
    margin-right: 4px;
    font-size: 0.6rem;
    color: salmon;
  }

  &:hover {
    img {
      filter: opacity(1);
    }
  }
`;

export default WrapperItem;
