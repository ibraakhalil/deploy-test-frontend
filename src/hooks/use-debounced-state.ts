import { snapbounce } from "@/utils/debounce";
import { useCallback, useRef, useState } from "react";

export function useDebouncedState<T>(initialValue: T, delay = 50) {
  const [value, setValue] = useState<T>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  const debouncedSetValueRef = useRef(
    snapbounce((newValue: T) => {
      setDebouncedValue(newValue);
    }, delay)
  );

  const setValueAndDebounce = useCallback((newValue: T) => {
    setValue(newValue);
    if (debouncedSetValueRef.current) {
      debouncedSetValueRef.current(newValue);
    }
  }, []);

  return [value, setValueAndDebounce, debouncedValue] as const;
}
