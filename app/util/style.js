const getStyles = (obj) =>
  Object.keys(obj)
    .map((key) => `${key}:${obj[key]}`)
    .join(';');

export default getStyles;
