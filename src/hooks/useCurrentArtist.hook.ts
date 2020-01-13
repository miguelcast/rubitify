import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store/rootReducer';
import { artistSelector, fetchArtistIfNotExists } from '../store/artists/artistsSlice';

export function useCurrentArtist(artistId: string | null) {
  const dispatch = useDispatch();
  const artist = useSelector(
    (state: RootState) => artistSelector(state, artistId)
  );

  useEffect(() => {
    const init = async () => {
      if (artistId) {
        dispatch(fetchArtistIfNotExists(parseInt(artistId)));
      }
    };
    init();
  }, [artistId, dispatch]);

  return artist;
}
