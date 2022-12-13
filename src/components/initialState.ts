import { v4 as uuid } from 'uuid';
import { ThemeMode, ThemeColor, NewTask, Task } from '../types';
import { THEME_COLORS, THEME_MODES } from './constants';

const themeColors: ThemeColor[] = [
    {
        color: THEME_COLORS.RED,
        active: true
    },
    {
        color: THEME_COLORS.YELLOW,
        active: false
    },
    {
        color: THEME_COLORS.GREEN,
        active: false
    },
    {
        color: THEME_COLORS.BLUE,
        active: false
    },
    {
        color: THEME_COLORS.VIOLET,
        active: false
    },
    {
        color: THEME_COLORS.GRAY,
        active: false
    },
];

const themeMode: ThemeMode = THEME_MODES.AUTO;

const tasks: Task[] = [
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
    },
];

const taskInput: NewTask = { text: '', editOn: false };

const initialState = {
    themeColors,
    themeMode,
    tasks,
    taskInput,
}

export default initialState;
