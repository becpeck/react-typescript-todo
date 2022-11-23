import React from 'react';

import { SortToggleProps } from './TodoList.interface';

export default function SortToggle(props: SortToggleProps) {
  const { sortOn, toggleSort } = props;

  return (
    <div className='toggle'>
      <label htmlFor='sort-toggle' className='toggle-label'>Sort</label>
      <div> {/* TODO: remove extraneous?  */}
        <input 
          className='toggle-input'
          type='checkbox' 
          name='sort-toggle' 
          id='sort-toggle' 
          checked={sortOn} 
          onChange={toggleSort}
        />
        <label htmlFor='sort-toggle' className='toggle-track'>
          <span className='toggle-slider'/>
        </label>
      </div>
    </div>
  );
}