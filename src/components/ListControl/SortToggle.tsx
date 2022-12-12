import React from 'react';

type SortToggleProps = {
  sortOn: boolean;
  toggleSort: React.ChangeEventHandler<HTMLInputElement>;
}

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