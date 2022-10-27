import React, { useRef, useEffect } from 'react';

import { Task, TaskItemProps } from './TodoList.interface';

const box = '\u2610';
const xBox = '\u2612';
const x = '\u2715';
const pencil = '\u270F';

export default function TaskItem(props: TaskItemProps) {
  const { task, toggleComplete, removeTask, toggleEditOn, handleChange, handleSubmit } = props;

  // TODO: move to higher component, only one possible input open at once
  const activeInput = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    activeInput.current?.focus()
  }, [activeInput, task.editOn])
  
  const getCompleteClass = (task: Task) => (task.completed ? 'complete' : '');

  const getEditOnClass = (task: Task) => (task.editOn ? 'edit' : '');

  return (
    <div className={`item-line ${getCompleteClass(task)} ${getEditOnClass(task)}`}>
      <div className='todo-item'>
        <span className='checkbox' onClick={() => toggleComplete(task.id)}>
          {task.completed ? xBox : box}
        </span>
        <form onSubmit={handleSubmit(task.id)}>
          <input
            type='text'
            value={task.text}
            onChange={handleChange(task.id)}
            ref={activeInput}
            className={`item-text ${getCompleteClass(task)}`}
            style={{width: task.text.length + 2 + 'ch'}} // TODO: move to css component library
            readOnly={!task.editOn}
            onBlur={() => task.editOn && toggleEditOn(task.id)}
          />
        </form>
      </div>
      <div className='todo-item-buttons'>
        {task.editOn ?
          <span className='no-pencil'></span>
        : <span className='pencil' onClick={() => toggleEditOn(task.id)}>{pencil}</span>
        }
        <span className='x-remove' onClick={() => removeTask(task.id)}>{x}</span>
      </div>
    </div>
  );
}
