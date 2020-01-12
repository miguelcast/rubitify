import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSongs, setCurrent } from '../store/songs/songsSlice';
import Song from '../components/Song';
import { AppDispatch } from '../store';
import { RootState } from '../store/rootReducer';

interface Params {
  albumId?: string;
}

function useSongs(dispatch: AppDispatch) {
  const history = useHistory();
  const { albumId = null } = useParams<Params>();
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

const Songs = () => {
  const dispatch = useDispatch();
  const { loading, songs } = useSongs(dispatch);
  const setCurrentSong = useCallback(song => dispatch(setCurrent(song)), [dispatch]);

  return (
    <div>
      <h2>Songs ({loading ? '...' : songs.length})</h2>
      {loading && <div>Loading...</div>}
      {songs.map(song => (
        <Song
          key={song.id}
          title={song.name}
          duration={song.duration_ms}
          url={song.spotify_url}
          onClick={() => setCurrentSong(song)}
        />
      ))}
    </div>
  );
};

export default Songs;
