import { formatTime } from './formatters';

export function msToTime(timeInSeconds: number = 0): string {
  const time: number = parseFloat(timeInSeconds.toFixed(3).toString());
  const minutes = Math.floor(time / 60) % 60;
  const seconds = Math.floor(time - minutes * 60);

  return formatTime(minutes, seconds);
}
