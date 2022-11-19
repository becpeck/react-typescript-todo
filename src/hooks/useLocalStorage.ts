import { useState } from 'react';

import { Task } from '../components/Todo/TodoList.interface';
import { Key, UseLocalStorage, UseTaskState, UseSortState } from './hooks';

import { KEYS } from './constants';

function useLocalStorage<T>(key: Key, initialValue: T): UseLocalStorage<T> {
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

export function useTaskState(initialTasks: Task[]): UseTaskState {
    return useLocalStorage<Task[]>(KEYS.TASK_KEY, initialTasks)
}

export function useSortState(initialSortOn: boolean): UseSortState {
    return useLocalStorage<boolean>(KEYS.SORT_KEY, initialSortOn)
}
