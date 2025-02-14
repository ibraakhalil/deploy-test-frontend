export type ThrottledFunction<T extends (...args: unknown[]) => unknown> = (...args: Parameters<T>) => void;

export function throttle<T extends (...args: unknown[]) => unknown>(func: T, limit: number): ThrottledFunction<T> {
  let inThrottle: boolean = false;
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastRan: number;

  return function cb(this: unknown, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      lastRan = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(
        () => {
          if (Date.now() - lastRan >= limit) {
            func.apply(this, args);
            lastRan = Date.now();
          }
        },
        Math.max(limit - (Date.now() - lastRan), 0)
      );
    }
  };
}
