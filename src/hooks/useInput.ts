import {useState, useCallback} from 'react';

type ReturnType<T> = [
  T,
  (text: T) => void,
  React.Dispatch<React.SetStateAction<T>>,
];

export const useInput = <T>(initialValue: T): ReturnType<T> => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((text: T) => {
    setValue(text);
  }, []);
  return [value, handler, setValue];
};
