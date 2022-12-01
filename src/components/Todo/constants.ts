import { v4 as uuid } from 'uuid';
import { Task, NewTask } from './TodoList.interface';

export const initialNewTaskInput: NewTask = { text: '', editOn: false };

export const sampleTasks: Task [] = [
    {
        id: uuid(),
        text: 'TS conversion',
        completed: true,
        editOn: false
    },
    {
        id: uuid(),
        text: 'Make lunch',
        completed: false,
        editOn: false
    },
    {
        id: uuid(),
        text: 'Clean kitchen',
        completed: true,
        editOn: false
    },
    {
        id: uuid(),
        text: 'Finish laundry',
        completed: false,
        editOn: false
    }
];

export const ICONS = {
    EMPTY_BOX: 'empty-box',
    CHECKED_BOX: 'checked-box',
    PENCIL: 'pencil',
    X_REMOVE: 'x-remove',
    PLUS: 'plus',
    NO_ICON: 'no-icon'
} as const;
