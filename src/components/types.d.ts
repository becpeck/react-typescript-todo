import { THEME_MODES, THEME_COLORS } from "./constants";

export interface ThemeColor {
    color: typeof THEME_COLORS[keyof typeof THEME_COLORS];
    active: boolean
}

export type ThemeMode = typeof THEME_MODES[keyof typeof THEME_MODES];

export interface NewTask {
    text: string;
    editOn: boolean;
}

export interface Task extends NewTask {
    id: string;
    completed: boolean;
}
