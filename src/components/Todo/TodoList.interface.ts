export interface Task {
    text: string;
    completed: boolean;
}
  
interface TaskProps {
    getCompleted: (task: Task) => 'complete' | '';
    toggleComplete: (itemText: Task['text']) => void;
    removeTask: (itemText: Task['text']) => void;
}

export interface TaskItemProps extends TaskProps {
    task: Task;
}
  
export interface TaskItemListProps extends TaskProps {
    tasks: Task[];
}
