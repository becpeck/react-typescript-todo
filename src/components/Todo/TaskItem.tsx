import React, { useRef } from 'react';

import { TaskItemProps } from './TodoList.interface';

const box = '\u2610';
const xBox = '\u2612';
const x = '\u2715';
const pencil = '\u270F';

export default function TaskItem(props: TaskItemProps) {
  const { task, toggleComplete, removeTask, toggleEditOn, handleChange } = props;

  const activeInput = useRef<HTMLInputElement>(null);

  const getCompleteClass = () => (task.completed ? 'complete' : '');

  const getEditOnClass = () => (task.editOn ? 'edit' : '');

  const toggleFocus = () => {
    if (task.editOn) {
      activeInput.current!.blur()
    } else {
      activeInput.current!.focus()
    }
    toggleEditOn(task.id)
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    toggleFocus();
  }

  return ( // TODO: fix className whitespace
    <form className={`item-line ${getCompleteClass()} ${getEditOnClass()}`} onSubmit={handleSubmit}>
      <div className='todo-item'>
        <span className='checkbox' onClick={() => toggleComplete(task.id)}>
          {task.completed ? xBox : box}
        </span>
        <input
          type='text'
          value={task.text}
          onChange={handleChange(task.id)}
          ref={activeInput}
          className={`item-text ${getCompleteClass()}`}
          style={{width: task.text.length + 2 + 'ch'}} // TODO: move to css component library
          readOnly={!task.editOn}
          onBlur={toggleFocus}
        />
      </div>
      <div className='todo-item-buttons'>
        {task.editOn ?
          <span className='no-icon'></span>
        : <span className='pencil' onClick={toggleFocus}>{pencil}</span>
        }
        <span className='x-remove' onClick={() => removeTask(task.id)}>{x}</span>
      </div>
    </form>
  );
}
