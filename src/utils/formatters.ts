export function formatGenreName(genre: string): string {
  return genre
    .replace(/_/g, ' ')
    .replace(/(^[a-z]|\s[a-z])/g, match => match.toUpperCase());
}

export function formatTime(minutes: number, seconds: number): string {
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
