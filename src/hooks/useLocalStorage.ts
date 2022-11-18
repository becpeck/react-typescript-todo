import { useState } from 'react';

import { UseLocalStorage } from './hooks';

function useLocalStorage<T>(key: string, initialValue: T): UseLocalStorage<T> {
    const [storedValue, setStoredValue] = useState<T>(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    })

    const setValue = (value: T) => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue];
}
