import React from 'react';

import { TaskItemProps } from './TodoList.interface';

const box = '\u2610';
const xBox = '\u2612';

export default function TaskItem(props: TaskItemProps) {
  const { task, getCompleted, toggleComplete, removeTask } = props;

  return (
    <div className={`item-line ${getCompleted(task)}`} key={task.text}> {/* TODO: Find better key */}
      <div className='todo-item'>
        <span className='checkbox' onClick={() => {toggleComplete(task.text)}}>
          {task.completed ? xBox : box}
        </span>
        <span className={`item-text ${getCompleted(task)}`}>
          {task.text}
        </span>
      </div>
      <button onClick={() => removeTask(task.text)}>Remove</button>
    </div>
  );
}
