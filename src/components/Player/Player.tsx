import React from 'react';
import styled from 'styled-components';

import Song from '../Song';
import { Song as ISong } from '../../store/songs/songsSlice';
import { THEME_LIGHT } from '../../config/constants';

const PlayerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  padding: 0 12px;
`;

interface Props {
  song: ISong;
}

const Player = ({ song }: Props) => (
  <PlayerWrapper>
    <Song
      isActive={Boolean(song.preview_url)}
      isFixed
      theme={THEME_LIGHT}
      title={song.name}
      duration={song.duration_ms}
      url={song.spotify_url}
      onClick={() => console.log('Current')}
      hasPreview={Boolean(song.preview_url)}
    />
  </PlayerWrapper>
);

export default Player;
