import { useDebouncedState } from "@/hooks/use-debounced-state";
import Fuse, { IFuseOptions } from "fuse.js";
import { useMemo } from "react";

export function useSearch<T extends object>(
  data: T[],
  options: {
    keys: IFuseOptions<T>["keys"];
    debounce?: number;
    fuseOptions?: Omit<IFuseOptions<T>, "keys">;
  }
) {
  const [searchTerm, setSearchTerm, debouncedSearchTerm] = useDebouncedState("", options.debounce ?? 30);

  const fuse = useMemo(
    () =>
      new Fuse(data, {
        keys: options.keys,
        threshold: 0.3,
        ...options.fuseOptions,
      }),
    [data, options.keys, options.fuseOptions]
  );

  const results = useMemo(() => {
    return debouncedSearchTerm ? fuse.search(debouncedSearchTerm).map(f => f.item) : data;
  }, [fuse, debouncedSearchTerm, data]);

  return { results, searchTerm, setSearchTerm };
}
