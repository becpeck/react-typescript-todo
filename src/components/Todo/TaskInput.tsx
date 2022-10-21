import React from 'react';

import { TaskInputProps } from './TodoList.interface';

const x = '\u2715';
const plus = '\uFF0B';

export default function TaskInput(props: TaskInputProps) {
  const { value, isOpen, toggleOpen, handleChange, handleSubmit } = props;

  return (
    <>
      {isOpen ? 
        <form className='add-item-line open' onSubmit={handleSubmit}>
          <div className='input-line'>
            <input type='text' value={value} onChange={handleChange}/>
            <button type='submit'>Add</button>
          </div>
          <span onClick={toggleOpen}>{x}</span>
        </form>
      : <div className='add-item-line' onClick={toggleOpen}>
          <span className='plus'>{plus}</span>
          <button>Add Task</button>
        </div>  
      }
    </>
  );
}
