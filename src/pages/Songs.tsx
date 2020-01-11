import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store/rootReducer';
import { fetchSongs } from '../store/songs/songsSlice';
import Song from "../components/Song";

interface Params {
  albumId?: string;
}

function useSongs() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { albumId = null } = useParams<Params>();
  const [loading, setLoading] = useState<boolean>(true);
  const songs = useSelector(
    (state: RootState) => state.songs
  );

  useEffect(() => {
    async function init() {
      if (!albumId) history.push('/');
      await dispatch(fetchSongs(albumId || 0));
      setLoading(false);
    }
    init();
  }, [albumId, dispatch, history]);

  return { loading, songs };
}

const Songs = () => {
  const { loading, songs } = useSongs();

  return (
    <div>
      <h2>Songs ({loading ? '...' : songs.length})</h2>
      {loading && <div>Loading...</div>}
      {songs.map(song => (
        <Song key={song.id} title={song.name} duration={song.duration_ms} url={song.spotify_url} />
      ))}
    </div>
  );
};

export default Songs;
