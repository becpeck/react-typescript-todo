import React from 'react';

import { TaskInputProps } from './TodoList.interface';

export default function TaskInput(props: TaskInputProps) {
  const { value, handleChange, handleSubmit } = props;

  return (
    <form className='input item-line' onSubmit={handleSubmit}>
      <input type='text' value={value} onChange={handleChange}/>
      <button type='submit'>Add Task</button>
    </form>
  );
}
