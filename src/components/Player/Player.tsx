import React from 'react';
import styled from 'styled-components';

import { Song as ISong } from '../../store/songs/songsSlice';
import Song from '../Song';

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
      isActive
      isFixed
      theme="light"
      title={song.name}
      duration={song.duration_ms}
      url={song.spotify_url}
      onClick={() => console.log('Current')}
    />
  </PlayerWrapper>
);

export default Player;
