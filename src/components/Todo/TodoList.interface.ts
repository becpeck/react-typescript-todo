import React from "react";

export interface NewTask {
    text: string;
    editOn: boolean;
}

export interface Task extends NewTask {
    id: string;
    completed: boolean;
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

export interface TaskButtonProps {
    tasks: Task[];
    checkAll: () => void;
    uncheckAll: () => void;
    removeAll: () => void;
}

export interface SortToggleProps {
    sortOn: boolean;
    toggleSort: React.ChangeEventHandler<HTMLInputElement>;
}