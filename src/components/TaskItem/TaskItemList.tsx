import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../../types';

type TaskItemListProps = {
  tasks: Task[];
  toggleComplete: (id: Task['id']) => void;
  removeTask: (id: Task['id']) => void;
  toggleEditOn: (id: Task['id']) => void;
  handleChange: (id: Task['id']) => React.ChangeEventHandler<HTMLInputElement>;
}

export default function TaskItemList(props: TaskItemListProps) {
  const { tasks, toggleComplete, removeTask, toggleEditOn, handleChange } = props;

  return(
    <div id='task-list'>
      {
        tasks.map((task: Task) => {
          return (
            <TaskItem
              key={task.id}
              task={task} 
              toggleComplete={toggleComplete} 
              removeTask={removeTask}
              toggleEditOn={toggleEditOn}
              handleChange={handleChange}
            />
          );
        })
      }
    </div>
  );
}
