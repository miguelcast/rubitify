import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { List } from '../components/Shared';
import Card from '../components/Card';
import { RootState } from '../store/rootReducer';
import { fetchAlbums } from '../store/albums/albumsSlice';

interface Params {
  artistId?: string;
}

function useAlbums() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { artistId = null } = useParams<Params>();
  const [loading, setLoading] = useState<boolean>(true);
  const albums = useSelector(
    (state: RootState) => state.albums
  );

  useEffect(() => {
    async function init() {
      if (!artistId) history.push('/');
      await dispatch(fetchAlbums(artistId || 0));
      setLoading(false);
    }
    init();
  }, [artistId, dispatch, history]);

  return { loading, albums };
}

const Albums = () => {
  const { loading, albums } = useAlbums();

  return (
    <div>
      <h2>Albums ({loading ? '...' : albums.length})</h2>
      {loading && <div>Loading...</div>}
      <List>
        {albums.map(album => (
          <Link key={album.id} to={`/album/${album.id}/songs`}>
            <Card
              title={album.name}
              image={album.image}
              subtitle={`Songs ${album.total_tracks}`}
            />
          </Link>
        ))}
      </List>
    </div>
  );
};

export default Albums;
