import React, { useRef, useEffect } from 'react';

import { TaskInputProps } from './TodoList.interface';

const box = '\u2610';
const pencil = '\u270F';

export default function TaskInput(props: TaskInputProps) {
  const { text, editOn } = props.newTaskInput;
  const { toggleEditOn, handleChange, handleSubmit } = props;

  const activeInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    activeInput.current?.focus()
  }, [activeInput, editOn])

  const getEditOnClass = () => editOn ? 'edit' : '';

  return (
  <div className={`item-line ${getEditOnClass()}`}>
    <div className='todo-item'>
      <span className='checkbox'>
        {box}
      </span>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={text}
          onChange={handleChange}
          ref={activeInput}
          className={`item-text`}
          style={{width: text.length + 2 + 'ch'}} // TODO: move to css component library
          onBlur={() => editOn && toggleEditOn()}
        />
      </form>
    </div>
    <div className='todo-item-buttons'>
      <span className='pencil' onClick={toggleEditOn}>{pencil}</span>
      <span className='no-pencil'></span>
    </div>
  </div>
  );
}
