export const debounce = (fn: Function, delay: number) => {
  let timerId: number;

  return function (args: any) {
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn(args);
    }, delay);
  };
};
