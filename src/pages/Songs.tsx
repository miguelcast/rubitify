import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../store/rootReducer';
import { fetchSongs } from '../store/songs/songsSlice';
import { msToTime } from '../utils/converters';

const SongItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.8rem;
  
  * {
    display: inline-block;
  }
  
  img {
    filter: brightness(0);
    margin-right: 0.8rem;
  }
  
  &:hover {
    img {
      filter: brightness(100);
    }
  }
`;

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
        <SongItem key={song.id}>
          <img src="/images/play-active.png" alt="Play"/>
          <strong>{song.name}</strong>
          <span>{msToTime(parseInt(song.duration_ms.toString()))}</span>
        </SongItem>
      ))}
    </div>
  );
};

export default Songs;
