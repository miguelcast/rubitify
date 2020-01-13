import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store/rootReducer';
import { albumSelector, fetchAlbumsIfNotExists } from '../store/albums/albumsSlice';

export function useCurrentAlbum(artistId: string | null, albumId: string | null) {
  const dispatch = useDispatch();
  const album = useSelector(
    (state: RootState) => albumSelector(state, albumId)
  );

  useEffect(() => {
    const init = async () => {
      if (artistId) {
        dispatch(fetchAlbumsIfNotExists(parseInt(artistId)));
      }
    };
    init();
  }, [albumId, artistId, dispatch]);

  return album;
}
