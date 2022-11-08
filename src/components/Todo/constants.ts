import { v4 as uuid } from 'uuid';
import { Task, NewTask } from './TodoList.interface';

export const emptyBox = '\u2610';
export const checkedBox = '\u2612';
export const pencil = '\u270F';
export const xRemove = '\u2715';
export const plus = '\uFF0B';

export const initialNewTaskInput: NewTask = { text: '', editOn: false };

export const sampleTasks: Task [] = [
    { id: uuid(), text: 'TS conversion', completed: true, editOn: false },
    { id: uuid(), text: 'Make lunch', completed: false, editOn: false },
    { id: uuid(), text: 'Clean kitchen', completed: true, editOn: false },
    { id: uuid(), text: 'Finish laundry', completed: false, editOn: false },
];
