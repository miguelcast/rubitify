import React from 'react';
import styled from 'styled-components';

import Song from '../Song';
import { Song as ISong } from '../../store/songs/songsSlice';
import { THEME_LIGHT } from '../../config/constants';
import { PLAYER_STATUS } from '../../config/types';

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
  toggleAudio: () => void;
  status: PLAYER_STATUS;
}

const Player = ({ song, toggleAudio, status }: Props) => (
  <PlayerWrapper>
    <Song
      isActive={Boolean(song.preview_url) && status === 'playing'}
      isFixed
      theme={THEME_LIGHT}
      title={song.name}
      duration={song.duration_ms}
      url={song.spotify_url}
      onClick={() => toggleAudio()}
      hasPreview={Boolean(song.preview_url)}
    />
  </PlayerWrapper>
);

export default Player;
