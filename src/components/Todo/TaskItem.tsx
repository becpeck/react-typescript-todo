import React, { useRef, useEffect } from 'react';

import { Task, TaskItemProps } from './TodoList.interface';

const box = '\u2610';
const xBox = '\u2612';
const x = '\u2715';
const pencil = '\u270F';
const check = '\u2713';

export default function TaskItem(props: TaskItemProps) {
  const { task, toggleComplete, removeTask, toggleEditOn, handleChange } = props;

  // TODO: see how to trigger toggleEdit on input blur without preventing other UI interaction
  // TODO: move to higher component, only one possible input open at once
  const activeInput = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    activeInput.current?.focus()
  }, [activeInput, task.editOn])
  
  const getCompleteClass = (task: Task) => (task.completed ? 'complete' : '');

  return (
    <div className={`item-line ${getCompleteClass(task)}`}>
      <div className='todo-item'>
        <span className='checkbox' onClick={() => toggleComplete(task.id)}>
          {task.completed ? xBox : box}
        </span>
        {task.editOn ?
          <input 
            type='text' 
            value={task.text} 
            onChange={handleChange(task.id)} 
            ref={activeInput}
          /> // TODO: Fix size issue
        : <span className={`item-text ${getCompleteClass(task)}`}>
            {task.text}
          </span>
        }
      </div>
      <div className='todo-item-buttons'>
        {task.editOn ?
          <span className='check' onClick={() => toggleEditOn(task.id)}>{check}</span> // TODO: Fix width/weight difference
        : <span className='pencil' onClick={() => toggleEditOn(task.id)}>{pencil}</span>
        }
        <span className='x-remove' onClick={() => removeTask(task.id)}>{x}</span>
      </div>
    </div>
  );
}
