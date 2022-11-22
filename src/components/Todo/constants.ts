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
    EMPTY_BOX: {
        ICON: '\u2610',
        CLASS_NAME: 'checkbox'
    },
    CHECKED_BOX: {
        ICON: '\u2612',
        CLASS_NAME: 'checkbox'
    },
    PENCIL: {
        ICON: '\u270F',
        CLASS_NAME: 'pencil'
    },
    X_REMOVE: {
        ICON: '\u2715',
        CLASS_NAME: 'x-remove'
    },
    PLUS: {
        ICON: '\uFF0B',
        CLASS_NAME: 'plus'
    },
    NO_ICON: {
        ICON: '',
        CLASS_NAME: 'no-icon'
    }
} as const;
