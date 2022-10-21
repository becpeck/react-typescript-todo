import React from 'react';

import { SortToggleProps } from './TodoList.interface';

export default function SortToggle(props: SortToggleProps) {
  const { sortOn, toggleSort } = props;

  return (
    <div>
      <input 
        type='checkbox' 
        name='sort-toggle' 
        id='sort-toggle' 
        checked={sortOn} 
        onChange={toggleSort}
      />
      <label htmlFor='sort-toggle'>
        Sort
      </label>
    </div>
  );
}