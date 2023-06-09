
export const rafThrottle = <T extends (...args: any[]) => any>(fn: T) => {
  let rafId:number|null = null;

  const throttled = (...args:Parameters<T>) => {
    if(typeof rafId === 'number') return;

    rafId = requestAnimationFrame(() => {
      fn.apply(null, args);
      rafId = null;
    })
  }

  throttled.cancel = () => {
    if(typeof rafId !== 'number') return;
    cancelAnimationFrame(rafId);
  }

  return throttled;
}