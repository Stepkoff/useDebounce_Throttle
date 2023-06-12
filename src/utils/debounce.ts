
export const debounce = <T extends (...args: any[]) => any>(fn: T, ms: number) => {
  let timeoutId: number | null = null;

  function debounced(...args: Parameters<T>) {
    if (typeof timeoutId === "number") {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      timeoutId = null;
      // fn.apply(null, args);
      fn(...args)
    }, ms);
  }

  debounced.cancel = () => {
    if (typeof timeoutId !== "number") {
      return;
    }
    clearTimeout(timeoutId);
  };

  return debounced;
}