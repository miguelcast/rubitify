import { msToTime } from '../converters';
import { formatGenreName, formatTime } from '../formatters';
import { getRandom } from '../utilities';

it('converters/msToTime', () => {
  expect(msToTime(10000)).toEqual("00:10");
  expect(msToTime(100000)).toEqual("01:40");
});

it('formatters/formatGenreName', () => {
  expect(formatGenreName('garage_rock')).toEqual("Garage Rock");
});

it('formatters/formatTime', () => {
  expect(formatTime(1, 20)).toEqual("01:20");
  expect(formatTime(10, 2)).toEqual("10:02");
});

it('utilities/getRandom', () => {
  const random = getRandom(21);
  expect(random).toBeLessThanOrEqual(21);
  expect(random).toBeGreaterThanOrEqual(0);
});
