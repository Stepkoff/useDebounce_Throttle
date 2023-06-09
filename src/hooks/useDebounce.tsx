import {useEffect, useMemo} from "react";
import {debounce} from "../utils/debounce.ts";
import {useEvent} from "./useEvent.tsx";


export const useDebounce = <Fn extends (...args: any[]) => any>(fn: Fn, ms: number) => {
  const memoizedFn = useEvent(fn);
  const debouncedFn = useMemo(() => {
    return debounce((...args:Parameters<Fn>) => {
      memoizedFn(...args)
    }, 1000)
  }, [ms])

  useEffect(() => () => {
    debouncedFn.cancel()
  }, [debouncedFn])

return debouncedFn;
}

