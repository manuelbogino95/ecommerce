import { getLocalStorage } from 'lib/localStorage';
import { useEffect, useState } from 'react';

export default function useStateWithStorage(
  key: string,
  defaultValue: unknown
) {
  const [value, setValue] = useState(() => {
    return getLocalStorage(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
