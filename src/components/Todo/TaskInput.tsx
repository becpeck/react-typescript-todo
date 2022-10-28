import React, { useState, useRef, useEffect } from 'react';

import { TaskInputProps } from './TodoList.interface';

const box = '\u2610';
const pencil = '\u270F';

export default function TaskInput(props: TaskInputProps) {
  const { value, handleChange, handleSubmit } = props;

  const [inputFocus, setInputFocus] = useState(false);

  const activeInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    activeInput.current?.focus()
  }, [activeInput, inputFocus])

  const toggleInputFocus = () => setInputFocus(!inputFocus);

  const getEditOnClass = () => inputFocus ? 'edit' : '';

  return (
  <div className={`item-line ${getEditOnClass()}`}>
    <div className='todo-item'>
      <span className='checkbox'>
        {box}
      </span>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={value}
          onChange={handleChange}
          ref={activeInput}
          className={`item-text`}
          style={{width: value.length + 2 + 'ch'}} // TODO: move to css component library
          onBlur={() => inputFocus && toggleInputFocus()}
        />
      </form>
    </div>
    <div className='todo-item-buttons'>
      <span className='pencil' onClick={toggleInputFocus}>{pencil}</span>
      <span className='no-pencil'></span>
    </div>
  </div>
  );
}
