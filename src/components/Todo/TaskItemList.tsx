import React from 'react';
import TaskItem from './TaskItem';

import { Task, TaskItemListProps } from './TodoList.interface';

export default function TaskItemList(props: TaskItemListProps) {
  const { tasks, getCompleted, toggleComplete, removeTask } = props;

  return(
    <div id='task-list'>
      {
        tasks.map((task: Task) => {
          return (
            <TaskItem
              key={task.text}
              task={task} 
              getCompleted={getCompleted} 
              toggleComplete={toggleComplete} 
              removeTask={removeTask}
            />
          );
        })
      }
    </div>
  );
}
