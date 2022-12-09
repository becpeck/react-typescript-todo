import React from 'react';
import { ThemeColor, ThemeMode, Task, NewTask } from './types';
import { ICONS } from './constants';

type BaseColorDotProps = {
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export type ColorDotProps = BaseColorDotProps & {
    themeColor: ThemeColor;
}

export type ColorDotListProps = BaseColorDotProps & {
    themeColors: ThemeColor[];
}

export type ThemeButtonsProps = {
    themeMode: ThemeMode;
    setMode: (mode: ThemeMode) => void;
}

export type ThemePaletteProps = {
    paletteOpen: boolean;
    themeColors: ThemeColor[];
    themeMode: ThemeMode;
    togglePaletteOpen: () => void;
    handleChangeColor: ColorProps['handleChange'];
    setMode: ThemeButtonsProps['setMode'];
}

export type SortToggleProps = {
    sortOn: boolean;
    toggleSort: React.ChangeEventHandler<HTMLInputElement>;
}

export type TaskButtonsProps = {
    tasks: Task[];
    checkAll: () => void;
    uncheckAll: () => void;
    removeAll: () => void;
}

export type IconProps = {
    variant: typeof ICONS[keyof typeof ICONS];
    handleClick?: () => void;
}

type BaseTaskProps = {
    toggleComplete: (id: Task['id']) => void;
    removeTask: (id: Task['id']) => void;
    toggleEditOn: (id: Task['id']) => void;
    handleChange: (id: Task['id']) => React.ChangeEventHandler<HTMLInputElement>;
}

export type TaskItemProps = BaseTaskProps & {
    task: Task;
}
  
export type TaskItemListProps = BaseTaskProps & {
    tasks: Task[];
}

export type TaskInputProps = {
    newTaskInput: NewTask;
    toggleEditOn: () => void;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    addNewTask: () => void;
}
