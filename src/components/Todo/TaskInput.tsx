import React from 'react';

import { TaskInputProps } from './TodoList.interface';

const x = '\u2715';

export default function TaskInput(props: TaskInputProps) {
  const { value, isOpen, toggleOpen, handleChange, handleSubmit } = props;

  return (
    <>
      {isOpen ? 
        <form className='input item-line' onSubmit={handleSubmit}>
          <input type='text' value={value} onChange={handleChange}/>
          <button type='submit'>Add</button>
          <span onClick={toggleOpen}>{x}</span>
        </form>
      : <div className='input item-line' onClick={toggleOpen}>
          <button>Add Task</button>
        </div>  
      }
    </>
  );
}
