const MONTH = 2.628e9;

export const getTotalExperience = (jobs = []) => {
  const totalMonths = jobs.reduce((acc, cur) => {
    const end = Date.parse(cur.end) || Date.now();
    const start = Date.parse(cur.start);
    acc += Math.ceil((end - start) / MONTH);

    return acc;
  }, 0);

  const wholeYears = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return `${wholeYears} years ${months} months`;
};
