import { useState } from 'react';
import { Task, ThemeColor, ThemeMode } from '../components/types';
import { KEYS } from './constants';
import {
    Key,
    UseLocalStorage,
    UseTasksState,
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

export function useTasksState(initialTasks: Task[]): UseTasksState {
    const [storedTasks, setStoredTasks] = useState<Task[]>(() => {
        const tasks = window.localStorage.getItem(KEYS.TASKS);
        if (!tasks) {
            return initialTasks;
        } else {
            const parsed: Omit<Task, 'editOn'>[] = JSON.parse(tasks);
            const includedTasks: Task[] = parsed.map(excludedTask => ({...excludedTask, editOn: false}));
            return includedTasks;
        }
    })

    const setTasks = (tasks: Task[]) => {
        const lastStoredTasks = storedTasks;
        setStoredTasks(tasks);
        if (tasks.length !== lastStoredTasks.length || 
            tasks.some((task, i) => (
                task.id !== lastStoredTasks[i].id 
                    || task.completed !== lastStoredTasks[i].completed 
                    || task.text !== lastStoredTasks[i].text
            ))
        ) {
            const excludedTasks: Omit<Task, 'editOn'>[] = tasks.map(task => {
                const { editOn, ...excludedTask } = task;
                return excludedTask;
            })
            window.localStorage.setItem(KEYS.TASKS, JSON.stringify(excludedTasks));
        }
    }

    return [storedTasks, setTasks];
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
