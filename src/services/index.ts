import instance from "./instance";

const paths = {
  genres: '/genres',
  artists: '/artists',
  artist: '/artists/:id',
  artistAlbums: '/artists/:id/albums',
  albumSongs: '/albums/:id/songs',
  genresRandom: '/genres/:genre/random_song'
};

export const genres = () => instance.get(paths.genres);

export const artists = () => instance.get(paths.artists);
export const artist = (artistId: number | string) =>
  instance.get(paths.artist.replace(':id', artistId.toString()));

export const artistAlbums = (artistId: number | string) =>
  instance.get(paths.artistAlbums.replace(':id', artistId.toString()));

export const albumSongs = (albumId: number | string) =>
  instance.get(paths.albumSongs.replace(':id', albumId.toString()));

export const genresRandom = (genreName: string) =>
  instance.get(paths.genresRandom.replace(':genre', genreName));
