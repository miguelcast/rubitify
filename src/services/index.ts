import instance from "./instance";

const paths = {
  genres: '/genres',
  artists: '/artists',
  artistAlbums: '/artists/:id/albums',
  albumSongs: '/artists/:id/albums',
  genresRandom: '/genres/:genre/random_song'
};

export const genres = () => instance.get(paths.genres);

export const artists = () => instance.get(paths.artists);

export const artistAlbums = (artistId: number | string) =>
  instance.get(paths.artistAlbums.replace(':id', artistId.toString()));

export const albumSongs = (albumId: number | string) =>
  instance.get(paths.albumSongs.replace(':id', albumId.toString()));

export const genresRandom = (genreName: string) =>
  instance.get(paths.genresRandom.replace(':genre', genreName));
