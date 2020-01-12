import React from 'react';
import { useSelector } from 'react-redux';

import { usePlayerHook } from './usePlayer.hook';
import Player from './Player';
import { RootState } from '../../store/rootReducer';


const PlayerContainer = () => {
  const { current: currentSong, status = null } = useSelector((state: RootState) => state.player);
  const { audioEl, toggleAudioState, pauseAudio } = usePlayerHook();

  if (!currentSong) {
    return null;
  }

  return (
    <>
      {Boolean(currentSong.preview_url) && (
        <audio
          autoPlay
          ref={audioEl}
          onEnded={pauseAudio}
          src={currentSong.preview_url}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      )}
      <Player song={currentSong} toggleAudio={toggleAudioState} status={status} />
    </>
  );
};

export default PlayerContainer;
