const MONTH = 2.628e9;

export const getTotalExperience = (jobs = []) => {
  if (jobs.length === 0) {
    return 'No experience';
  }

  const totalMonths = jobs.reduce((acc, cur) => {
    const end = Date.parse(cur.end) || Date.now();
    const start = Date.parse(cur.start);
    acc += Math.ceil((end - start) / MONTH);

    return acc;
  }, 0);
  const realMonths = totalMonths - 1;

  const wholeYears = Math.floor(totalMonths / 12);
  const months = wholeYears > 0 ? realMonths % 12 : totalMonths % 12;

  return `${
    wholeYears ? wholeYears + ' year' + getTimeWordEnding(wholeYears) : ''
  }${wholeYears && months && realMonths !== 11 ? ' ' : ''}${
    months && realMonths !== 11
      ? months + ' month' + getTimeWordEnding(months)
      : ''
  }`;
};

const getTimeWordEnding = unit => {
  return unit === 1 ? '' : 's';
};
