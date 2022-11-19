import { useState } from 'react';

import { Task } from '../components/Todo/TodoList.interface';
import { UseLocalStorage, UseTaskState, UseSortState } from './hooks';

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

export function useTaskState(initialTasks: Task[]): UseTaskState {
    return useLocalStorage<Task[]>('tasks', initialTasks)
}

export function useSortState(initialSortOn: boolean): UseSortState {
    return useLocalStorage<boolean>('sortOn', initialSortOn)
}
