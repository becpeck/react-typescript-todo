import { useState } from 'react';
import { Task, ThemeColor, ThemeMode } from '../components/types';
import { KEYS } from './constants';
import {
    Key,
    UseLocalStorage,
    UseTaskState,
    UseSortState,
    UseThemeColorState,
    UseThemeModeState
} from './hooks';


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
    return useLocalStorage<Task[]>(KEYS.TASKS, initialTasks);
}

export function useSortState(initialSortOn: boolean): UseSortState {
    return useLocalStorage<boolean>(KEYS.SORT_ON, initialSortOn);
}

export function useThemeColorState(initialThemeColors: ThemeColor[]): UseThemeColorState {
    return useLocalStorage<ThemeColor[]>(KEYS.THEME_COLOR, initialThemeColors);
}

export function useThemeModeState(initialThemeMode: ThemeMode): UseThemeModeState {
    return useLocalStorage<ThemeMode>(KEYS.THEME_MODE, initialThemeMode);
}
