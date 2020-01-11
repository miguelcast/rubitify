import React from 'react';
import WrapperItem from './WrapperItem';
import Title from './Title';
import Duration from './Duration';

interface Props {
  title: string;
  duration: number | string;
  url: string;
  image?: string;
}

const Song = ({ title, duration, url, image = '/images/spotify.png' }: Props) => (
  <WrapperItem title="Play preview">
    <img src="/images/play-active.png" alt="Play"/>
    <div title={title}>
      <Title>{title}</Title>
      <Duration durationMs={duration} />
    </div>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={image} alt="Listen"/>
    </a>
  </WrapperItem>
);

export default Song;
