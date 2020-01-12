import React, { Suspense, memo } from 'react';

import { IMAGE_PAUSE, IMAGE_PLAY } from '../../config/constants';
import WrapperItem from './WrapperItem';
import Title from './Title';
import Duration from '../Shared/Duration';
import { Props } from './types';

const Song = ({
  title,
  duration,
  url,
  onClick,
  hasPreview,
  image = '/images/spotify.png',
  isActive = false,
  isFixed = false,
  theme = 'dark'
}: Props) => (
  <WrapperItem
    title="Play preview"
    onClick={onClick}
    isActive={isActive}
    isFixed={isFixed}
    theme={theme}
    hasPreview={hasPreview}
  >
    <img src={isActive ? IMAGE_PAUSE : IMAGE_PLAY} alt="Play"/>
    <div title={title}>
      <Title theme={theme}>{title}</Title>
      <Suspense fallback={'...'}>
        <Duration durationMs={duration} />
      </Suspense>
    </div>
    {isFixed && !hasPreview && (
      <span className="message">The song has no<br />preview</span>
    )}
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={image} alt="Listen"/>
    </a>
  </WrapperItem>
);

export default memo(Song);
