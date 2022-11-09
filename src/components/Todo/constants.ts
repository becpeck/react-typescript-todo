import { v4 as uuid } from 'uuid';
import { Task, NewTask } from './TodoList.interface';

export const emptyBox = { icon: '\u2610', className: 'checkbox' };
export const checkedBox = { icon: '\u2612', className: 'checkbox' };
export const pencil = { icon: '\u270F', className: 'pencil' };
export const xRemove = { icon: '\u2715', className: 'x-remove' };
export const plus = { icon: '\uFF0B', className: 'plus' };

export const initialNewTaskInput: NewTask = { text: '', editOn: false };

export const sampleTasks: Task [] = [
    { id: uuid(), text: 'TS conversion', completed: true, editOn: false },
    { id: uuid(), text: 'Make lunch', completed: false, editOn: false },
    { id: uuid(), text: 'Clean kitchen', completed: true, editOn: false },
    { id: uuid(), text: 'Finish laundry', completed: false, editOn: false },
];
