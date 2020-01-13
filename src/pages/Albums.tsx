import React from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';

import { List } from '../components/Shared';
import Card from '../components/Card';
import { useCurrentArtist } from '../hooks/useCurrentArtist.hook';
import { useAlbums } from '../hooks/useAlbums.hook';

interface Params {
  artistId?: string;
}

const Albums = () => {
  const history = useHistory();
  const { artistId = null } = useParams<Params>();

  if (!artistId) history.push('/');

  const { loading, albums } = useAlbums(artistId);
  const artist = useCurrentArtist(artistId);

  return (
    <div>
      {artist && <Card noHover title={artist.name} image={artist.image} />}
      <h2>Albums ({ loading ? '...' : albums.length })</h2>
      {loading && <div>Loading...</div>}
      <List>
        {albums.map(album => (
          <Link key={album.id} to={`/artist/${artistId}/album/${album.id}/songs`}>
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
