import { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../store';
import { pauseCurrent, playCurrent } from '../../store/player/playerSlice';

export function usePlayerHook() {
  const dispatch = useDispatch<AppDispatch>();
  const audioEl = useRef<HTMLAudioElement>(null);

  const pauseAudio = useCallback(() => {
    audioEl?.current?.pause();
    dispatch(pauseCurrent());
  }, [dispatch]);
  const playAudio = useCallback(() => {
    audioEl?.current?.play();
    dispatch(playCurrent());
  }, [dispatch]);
  const toggleAudioState = useCallback(
    () => audioEl?.current?.paused ? playAudio() : pauseAudio(),
    [pauseAudio, playAudio]
  );

  return { toggleAudioState, pauseAudio, playAudio, audioEl };
}
