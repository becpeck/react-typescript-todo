import React from 'react';

import { Task, TaskItemProps } from './TodoList.interface';

const box = '\u2610';
const xBox = '\u2612';
const x = '\u2715';
const pencil = '\u270F';
const check = '\u2713';

export default function TaskItem(props: TaskItemProps) {
  const { task, toggleComplete, removeTask, toggleEditOn, handleChange } = props;

  const getCompleteClass = (task: Task) => (task.completed ? 'complete' : '');

  return (
    <div className={`item-line ${getCompleteClass(task)}`}>
      <div className='todo-item'>
        <span className='checkbox' onClick={() => toggleComplete(task.id)}>
          {task.completed ? xBox : box}
        </span>
        {task.editOn ?
          <input type='text' value={task.text} onChange={handleChange(task.id)}/> // TODO: Fix size issue
        : <span className={`item-text ${getCompleteClass(task)}`}>
            {task.text}
          </span>
        }
      </div>
      <div className='todo-item-buttons'>
        {task.editOn ?
          <span className='check'>{check}</span> // TODO: Fix width/weight difference
        : <span className='pencil' onClick={() => toggleEditOn(task.id)}>{pencil}</span>
        }
        <span className='x-remove' onClick={() => removeTask(task.id)}>{x}</span>
      </div>
    </div>
  );
}
