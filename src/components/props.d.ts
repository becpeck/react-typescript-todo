import React from 'react';

import { ThemeColor, ThemeMode, Task, NewTask } from './types';
import { ICONS } from './constants';

interface ColorProps {
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface ColorDotProps extends ColorProps {
    themeColor: ThemeColor;
}

export interface ColorDotListProps extends ColorProps {
    themeColors: ThemeColor[];
}

export interface ThemeButtonsProps {
    themeMode: ThemeMode;
    setMode: (mode: ThemeMode) => void;
}

export interface ThemePaletteProps {
    paletteOpen: boolean;
    themeColors: ThemeColor[];
    themeMode: ThemeMode;
    togglePaletteOpen: () => void;
    handleChangeColor: ColorProps['handleChange'];
    setMode: ThemeButtonsProps['setMode'];
}

export interface SortToggleProps {
    sortOn: boolean;
    toggleSort: React.ChangeEventHandler<HTMLInputElement>;
}

export interface TaskButtonsProps {
    tasks: Task[];
    checkAll: () => void;
    uncheckAll: () => void;
    removeAll: () => void;
}

export interface IconProps {
    variant: typeof ICONS[keyof typeof ICONS]
    handleClick?: () => void;
}

interface TaskProps {
    toggleComplete: (id: Task['id']) => void;
    removeTask: (id: Task['id']) => void;
    toggleEditOn: (id: Task['id']) => void;
    handleChange: (id: Task['id']) => React.ChangeEventHandler<HTMLInputElement>;
}

export interface TaskItemProps extends TaskProps {
    task: Task;
}
  
export interface TaskItemListProps extends TaskProps {
    tasks: Task[];
}

export interface TaskInputProps {
    newTaskInput: NewTask;
    toggleEditOn: () => void;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    addNewTask: () => void;
}
