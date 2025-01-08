import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, timedelay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedValue(value), timedelay);

    return () => clearTimeout(timerId);
  }, [value, timedelay]);

  return debouncedValue;
}