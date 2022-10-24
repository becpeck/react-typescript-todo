import React from 'react';

import { Task, TaskItemProps } from './TodoList.interface';

const box = '\u2610';
const xBox = '\u2612';
const x = '\u2715';
const pencil = '\u270F';
const check = '\u2713';

export default function TaskItem(props: TaskItemProps) {
  const { task, toggleComplete, removeTask } = props;

  const getCompleteClass = (task: Task) => (task.completed ? 'complete' : '');

  return (
    <div className={`item-line ${getCompleteClass(task)}`}>
      <div className='todo-item'>
        <span className='checkbox' onClick={() => {toggleComplete(task.id)}}>
          {task.completed ? xBox : box}
        </span>
        <span className={`item-text ${getCompleteClass(task)}`}>
          {task.text}
        </span>
      </div>
      <div className='todo-item-buttons'>
        {task.editOn ?
          <span className='check'>{check}</span>
        : <span className='pencil'>{pencil}</span>
        }
        <span className='x-remove' onClick={() => removeTask(task.id)}>{x}</span>
      </div>
    </div>
  );
}
