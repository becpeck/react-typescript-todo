import React from 'react';
import TaskItem from './TaskItem';

import { TaskItemListProps } from '../props';
import { Task } from '../types';

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
