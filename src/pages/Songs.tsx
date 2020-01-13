import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../components/Card';
import Song from '../components/Song';
import { List } from '../components/Shared';
import { setCurrent } from '../store/player/playerSlice';
import { RootState } from '../store/rootReducer';
import { useCurrentArtist } from '../hooks/useCurrentArtist.hook';
import { useSongs } from '../hooks/useSongs.hook';
import { useCurrentAlbum } from '../hooks/useCurrentAlbum.hook';

interface Params {
  albumId?: string;
  artistId?: string;
}

const Songs = () => {
  const dispatch = useDispatch();
  const { albumId = null, artistId = null } = useParams<Params>();
  const { loading, songs } = useSongs(albumId);
  const currentSongId = useSelector((state: RootState) => state.player.current?.id);
  const status = useSelector((state: RootState) => state.player.status);
  const setCurrentSong = useCallback(song => dispatch(setCurrent(song)), [dispatch]);
  const artist = useCurrentArtist(artistId);
  const album = useCurrentAlbum(artistId, albumId);

  return (
    <div>
      <List>
        {artist && <Card noHover title="Artist" subtitle={artist.name} image={artist.image} />}
        {album && <Card noHover title="Album" subtitle={album.name} image={album.image} />}
      </List>
      <h2>Songs ({loading ? '...' : songs.length})</h2>
      {loading && <div>Loading...</div>}
      {songs.map(song => (
        <Song
          key={song.id}
          isActive={song.id === currentSongId && status === 'playing' && Boolean(song.preview_url)}
          title={song.name}
          duration={song.duration_ms}
          url={song.spotify_url}
          onClick={() => setCurrentSong(song)}
          hasPreview={Boolean(song.preview_url)}
        />
      ))}
    </div>
  );
};

export default Songs;
