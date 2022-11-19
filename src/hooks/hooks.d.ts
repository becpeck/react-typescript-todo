import { Task } from '../components/Todo/TodoList.interface';

export type UseLocalStorage<T> = [T, (value: T) => void];
export type UseTaskState = UseLocalStorage<Task[]>;
export type UseSortState = UseLocalStorage<boolean>;
