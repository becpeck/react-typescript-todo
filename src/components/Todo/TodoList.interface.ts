import React from "react";

export interface Task {
    text: string;
    completed: boolean;
}
  
interface TaskProps {
    toggleComplete: (itemText: Task['text']) => void;
    removeTask: (itemText: Task['text']) => void;
}

export interface TaskItemProps extends TaskProps {
    task: Task;
}
  
export interface TaskItemListProps extends TaskProps {
    tasks: Task[];
}

export interface TaskInputProps {
    value: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

export interface TaskButtonProps {
    tasks: Task[];
    checkAll: () => void;
    uncheckAll: () => void;
    removeAll: () => void;
}