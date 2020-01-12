import styled, { css } from 'styled-components';
// @ts-ignore
import ImgSuspense from 'img-suspense';

const BaseRound = css`
  margin-bottom: 8px;
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 50%;
`;

export const RoundFallBack = styled.div`
  ${BaseRound};
  box-shadow: 0 1px 4px black inset;
  background-image: linear-gradient(to right, #131a22, #0d1217);
`;

export const RoundImage = styled(ImgSuspense)`
  ${BaseRound};
  object-fit: cover;
  object-position: center;
`;


