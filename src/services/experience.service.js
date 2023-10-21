const round = date => Math.round(date * 2) / 2;

export const getOverallExperienceInYears = () => {
  const webDevWorksStart = new Date(
    process.env.MODE === 'fe' ? 'Jun 1, 2018' : 'Jun 1, 2017',
  );
  const msInYear = 3.154e10;

  return round((Date.now() - webDevWorksStart) / msInYear);
};
