export const countDuplicates = (str: string): string => {
  const arrStr: Array<string> = str.split('');
  let countObject = {} as { [key: string]: number };
  let result = {} as { [key: string]: number };
  countObject = arrStr.reduce(
    (initial: { [key: string]: number }, cv: string) => {
      if (!initial[cv]) {
        initial[cv] = 1;
      } else {
        initial[cv] = initial[cv] + 1;
      }
      return initial;
    },
    {} as { string: number }
  );
  Object.keys(countObject).forEach((item) => {
    if (countObject[item] > 1) {
      result[item] = countObject[item];
    }
  });
  return JSON.stringify(result);
};
