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
            .add(15, 'day'),
        ),
      },
    ]),
  ).toBe('2 months');
});

test('prints only months if less than 1 year', () => {
  expect(
    getTotalExperience([
      {
        start: minskTime(dayjs().subtract(3, 'month')),
        end: minskTime(dayjs().startOf('month')),
      },
    ]),
  ).toBe('3 months');
});

test('approximately 2 years', () => {
  expect(
    getTotalExperience([
      {
        start: minskTime(dayjs('4 June 2018')),
        end: minskTime(dayjs('25 May 2020')),
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
  ).toBe('2 years');
});

test('counts experience when exactly one year passed', () => {
  expect(
    getTotalExperience([
      {
        start: minskTime(dayjs('8 June 2020')),
        end: minskTime(dayjs('7 June 2021')),
      },
    ]),
  ).toBe('1 year');
});

test('counts experience October to September next year', () => {
  expect(
    getTotalExperience([
      {
        start: minskTime(dayjs('4 October 2021')),
        end: minskTime(dayjs('15 September 2023')),
      },
    ]),
  ).toBe('2 years');
});

const minskTime = time =>
  dayjs(time)
    .add(3, 'hour')
    .toDate();
