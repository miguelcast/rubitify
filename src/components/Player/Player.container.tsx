import React from 'react';
import { useSelector } from 'react-redux';

import Player from './Player';
import { RootState } from '../../store/rootReducer';

const PlayerContainer = () => {
  const currentSong = useSelector((state: RootState) => state.player.current);

  if (!currentSong) {
    return null;
  }

  return (
    <>
      {Boolean(currentSong.preview_url) && (
        <audio
          autoPlay
          src={currentSong.preview_url}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      )}
      <Player song={currentSong} />
    </>
  );
};

export default PlayerContainer;
