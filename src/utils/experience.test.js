import dayjs from 'dayjs';

import { getTotalExperience } from './experience';

test('handles empty values', () => {
  expect(getTotalExperience()).toBe('No experience');
});

test("prints month if there's 1 month", () => {
  expect(
    getTotalExperience([
      {
        start: minskTime(dayjs().startOf('month')),
        end: minskTime(
          dayjs()
            .endOf('month')
            .subtract(1, 'day'),
        ),
      },
    ]),
  ).toBe('1 month');
});

test('prints only months if less than 1 year', () => {
  expect(
    getTotalExperience([
      {
        start: minskTime(dayjs().subtract(2, 'month')),
        end: minskTime(dayjs().startOf('month')),
      },
    ]),
  ).toBe('2 months');
});

test('if 1 year, do not print years', () => {
  expect(
    getTotalExperience([
      {
        start: minskTime(dayjs('4 June 2018')),
        end: minskTime(dayjs('4 April 2020')),
      },
    ]),
  ).toBe('1 year 11 months');
});

test('counts Klika Experience', () => {
  expect(
    getTotalExperience([
      {
        start: minskTime(dayjs('4 June 2018')),
        end: minskTime(dayjs('3 June 2020')),
      },
    ]),
  ).toBe('2 years');
});

test('counts usual experience with both months and years', () => {
  expect(
    getTotalExperience([
      {
        start: minskTime(dayjs('4 June 2018')),
        end: minskTime(dayjs('21 June 2020')),
      },
    ]),
  ).toBe('2 years 1 month');
});

const minskTime = time =>
  dayjs(time)
    .add(3, 'hour')
    .toDate();
