import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration);
dayjs.extend(relativeTime);

const MONTH = 2.628e9;

export const getTotalExperience = (jobs = []) => {
  if (jobs.length === 0) {
    return 'No experience';
  }

  const totalMonths = jobs.reduce((acc, cur) => {
    const end = Date.parse(cur.end) || Date.now();
    const start = Date.parse(cur.start);
    acc += Math.floor((end - start) / MONTH);

    return acc;
  }, 1);

  if (totalMonths > 11) {
    const finalYears = Math.round(
      dayjs.duration(totalMonths, 'months').asYears(),
    );

    return `${finalYears} year${getTimeWordEnding(finalYears)}`;
  } else {
    const finalMonths = Math.round(
      dayjs.duration(totalMonths, 'months').asMonths(),
    );

    return `${finalMonths} month${getTimeWordEnding(finalMonths)}`;
  }
};

const getTimeWordEnding = unit => {
  return unit === 1 ? '' : 's';
};
