import { THEME_MODES, THEME_COLORS } from "./constants";

export type ThemeColor = {
    color: typeof THEME_COLORS[keyof typeof THEME_COLORS];
    active: boolean
}

export type ThemeMode = typeof THEME_MODES[keyof typeof THEME_MODES];

export type NewTask = {
    text: string;
    editOn: boolean;
}

export type Task = NewTask & {
    id: string;
    completed: boolean;
}
