import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { artistAlbums as artistAlbumsService } from "../services";
import { List } from '../components/Shared';
import Card from '../components/Card';

interface Params {
  artistId?: string;
}

interface Album {
  id: number;
  name: string;
  image: string;
  total_tracks: number;
}

const Albums = () => {
  const history = useHistory();
  const { artistId = null } = useParams<Params>();
  const [albums, setAlbums] = useState<Array<Album>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function init() {
      if (!artistId) history.push('/');
      const response = await artistAlbumsService(artistId || 0);
      const artistsData = response.data.data;
      setAlbums(artistsData);
      setLoading(false);
    }
    init();
  }, [artistId, history]);

  return (
    <div>
      <h2>Albums ({loading ? '...' : albums.length})</h2>
      {loading && <div>Loading...</div>}
      <List>
        {albums.map(album => (
          <Card
            key={album.id}
            title={album.name}
            image={album.image}
            subtitle={`Songs ${album.total_tracks}`}
          />
        ))}
      </List>
    </div>
  );
};

export default Albums;
