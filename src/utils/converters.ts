import { formatTime } from './formatters';

export function msToTime(timeInMs: number = 0): string {
  const time: number = parseFloat(timeInMs.toString());
  const secondsMs = time % 60000;
  const minutes = (time - secondsMs) / 60000;
  const seconds = parseInt((secondsMs / 1000).toString());

  return formatTime(minutes, seconds);
}
