import { useEffect, useState } from "react";

function useLocalStorage(initialValue, key) {
  const [value, setValue] = useState(function () {
    const StoredValue = localStorage.getItem(key);
    return StoredValue ? JSON.parse(StoredValue) : initialValue;
  })
  useEffect(function () {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue];
}

export default useLocalStorage;
