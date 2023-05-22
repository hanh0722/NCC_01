export const classNames = (...className: Array<any>) => {
  return className.filter((item) => !!item).join(" ");
};
