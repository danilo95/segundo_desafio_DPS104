export const groupBy = (arr, key) => {
  return arr.reduce(
    (acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc),
    {}
  );
};
