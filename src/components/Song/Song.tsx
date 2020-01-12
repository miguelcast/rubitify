import React from 'react';

import WrapperItem from './WrapperItem';
import Title from './Title';
import Duration from '../Shared/Duration';

interface Props {
  title: string;
  duration: number | string;
  url: string;
  onClick: () => void;
  image?: string;
  isActive?: boolean;
  isFixed?: boolean;
  theme?: 'light' | 'dark';
}

const IMAGE_PLAY = '/images/play-active.png';
const IMAGE_PAUSE = '/images/pause.png';

const Song = ({
  title,
  duration,
  url,
  onClick,
  image = '/images/spotify.png',
  isActive = false,
  isFixed = false,
  theme = 'dark'
}: Props) => (
  <WrapperItem title="Play preview" onClick={onClick} isActive={isActive} isFixed={isFixed} theme={theme}>
    <img src={isActive ? IMAGE_PAUSE : IMAGE_PLAY} alt="Play"/>
    <div title={title}>
      <Title theme={theme}>{title}</Title>
      <Duration durationMs={duration} />
    </div>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={image} alt="Listen"/>
    </a>
  </WrapperItem>
);

export default Song;
