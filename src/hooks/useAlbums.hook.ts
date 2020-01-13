import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { RootState } from '../store/rootReducer';
import { fetchAlbums } from '../store/albums/albumsSlice';

export function useAlbums(artistId: string | null) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(true);
  const albums = useSelector(
    (state: RootState) => state.albums
  );

  useEffect(() => {
    async function init() {
      await dispatch(fetchAlbums(artistId || 0));
      setLoading(false);
    }
    init();
  }, [artistId, dispatch]);

  return { loading, albums };
}
