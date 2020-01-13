import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { AppDispatch } from '../store';
import { RootState } from '../store/rootReducer';
import { fetchSongs } from '../store/songs/songsSlice';

export function useSongs(albumId: string | null) {
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(true);
  const songs = useSelector(
    (state: RootState) => state.songs.songs
  );

  useEffect(() => {
    async function init() {
      if (!albumId) history.push('/');
      dispatch(fetchSongs(albumId || 0));
      setLoading(false);
    }
    init();
  }, [albumId, dispatch, history]);

  return { loading, songs };
}
