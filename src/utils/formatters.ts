export function formatGenreName(genre: string): string {
  return genre
    .replace(/_/g, ' ')
    .replace(/(^[a-z]|\s[a-z])/g, match => match.toUpperCase());
}
