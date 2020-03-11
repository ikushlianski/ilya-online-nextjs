const MONTH = 2.628e9;

export const getTotalExperience = (jobs = []) => {
  if (jobs.length === 0) {
    return 'No experience';
  }

  const totalMonths = jobs.reduce((acc, cur) => {
    const end = Date.parse(cur.end) || Date.now();
    const start = Date.parse(cur.start);
    acc += Math.round((end - start) / MONTH);

    return acc;
  }, 0);

  const wholeYears = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return `${wholeYears ? wholeYears + ' years' : ''}${
    wholeYears && months ? ' ' : ''
  }${months ? months + ' month' + (months === 1 ? '' : 's') : ''}`;
};
