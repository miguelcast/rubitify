import React from 'react';
import styled from 'styled-components';

import { msToTime } from '../../utils/converters';

const DurationStyled = styled.span`
  font-size: 0.7rem;
  color: #636d7b;
`;

interface Props {
  durationMs: number | string;
}

const Duration = ({ durationMs }: Props) => (
  <DurationStyled>{msToTime(parseInt(durationMs.toString()))}</DurationStyled>
);

export default Duration;
