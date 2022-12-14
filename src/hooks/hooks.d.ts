import { Task } from '../types';
import { KEYS } from './constants';

export type Key = typeof KEYS[keyof typeof KEYS];

export type UseLocalStorage<T> = [T, (value: T) => void];
export type UseTasksState = UseLocalStorage<Task[]>;
export type UseSortState = UseLocalStorage<boolean>;
export type UseThemeColorState = UseLocalStorage<ThemeColor[]>;
export type UseThemeModeState = UseLocalStorage<ThemeMode>;
