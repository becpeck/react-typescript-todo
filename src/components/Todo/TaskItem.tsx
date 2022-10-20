import React from 'react';

import { Task, TaskItemProps } from './TodoList.interface';

const box = '\u2610';
const xBox = '\u2612';

export default function TaskItem(props: TaskItemProps) {
  const { task, toggleComplete, removeTask } = props;

  const getCompleteClass = (task: Task) => (task.completed ? 'complete' : '');

  return (
    <div className={`item-line ${getCompleteClass(task)}`} key={task.text}> {/* TODO: Find better key */}
      <div className='todo-item'>
        <span className='checkbox' onClick={() => {toggleComplete(task.text)}}>
          {task.completed ? xBox : box}
        </span>
        <span className={`item-text ${getCompleteClass(task)}`}>
          {task.text}
        </span>
      </div>
      <button onClick={() => removeTask(task.text)}>Remove</button>
    </div>
  );
}
