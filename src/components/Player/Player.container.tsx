import React from 'react';
import { useSelector } from 'react-redux';

import Player from './Player';
import { RootState } from '../../store/rootReducer';

const PlayerContainer = () => {
  const song = useSelector((state: RootState) => state.songs.current);

  if (!song) {
    return null;
  }

  return (
    <Player song={song} />
  );
};

export default PlayerContainer;
