import styled from 'styled-components';

import { ThemeProps } from './types';
import { THEME_LIGHT } from '../../config/constants';

const Title = styled.strong<ThemeProps>`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-size: 0.9rem;
  font-weight: 100;
  ${({ theme }) => theme === THEME_LIGHT && 'color: #3d4145'};
`;

export default Title;
