export const keyBy = (data, field) => {
  return data.reduce((acc, curr) => {
    const currentField = curr[field];

    if (acc[currentField]) {
      acc[currentField].push(curr);

      return acc;
    }

    acc[currentField] = [curr];

    return acc;
  }, {});
};
