/**
 * convert array to object with provided keys (ordered)
 */
export const arrToObj = (arr: any[], key: string[]) => {
  return arr.reduce((obj, el, idx) => {
    return {
      ...obj,
      [key[idx]]: el,
    };
  }, {});
};
