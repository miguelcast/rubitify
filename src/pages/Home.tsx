import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { List } from '../components/Shared';
import Card from '../components/Card';
import { RootState } from '../store/rootReducer';
import { fetchArtists } from '../store/artists/artistsSlice';

function useArtists() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(true);
  const artists = useSelector(
    (state: RootState) => state.artists
  );

  useEffect(() => {
    async function init() {
      await dispatch(fetchArtists());
      setLoading(false);
    }
    init();
  }, [dispatch]);

  return { loading, artists };
}

const Home = () => {
  const { artists, loading } = useArtists();

  return (
    <section>
      <h2>Artists ({loading ? '...' : artists.length})</h2>
      {loading && <div>Loading...</div>}
      <List>
        {artists.map(artist => (
          <Link key={artist.id} to={`/artist/${artist.id}/albums`}>
            <Card title={artist.name} image={artist.image} />
          </Link>
        ))}
      </List>
    </section>
  );
};

export default Home;
