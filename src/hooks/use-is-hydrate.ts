import { useEffect, useState } from "react";

type Store = {
  persist: {
    onFinishHydration: (fn: (...args: unknown[]) => unknown) => () => void;
    hasHydrated: () => boolean;
  };
};

export function useIsHydrated<T extends Store>(useStore?: T) {
  const [isHydrated, setIsHydrated] = useState(false);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (useStore) {
      const unsubscribeOnFinishHydration = useStore.persist?.onFinishHydration(() => setIsHydrated(true));
      setIsHydrated(useStore.persist?.hasHydrated() ?? false);

      return () => {
        unsubscribeOnFinishHydration?.();
      };
    }

    setIsHydrated(true);
  }, [useStore]);

  return isHydrated;
}
