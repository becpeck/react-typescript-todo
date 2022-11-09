import React, { useRef } from 'react';
import Icon from './Icon';

import { TaskItemProps } from './TodoList.interface';

import { emptyBox, checkedBox, pencil, xRemove } from './constants';

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
        <Icon
          type={task.completed ? checkedBox : emptyBox}
          handleClick={() => toggleComplete(task.id)}
        />
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
          <Icon/>
        : <Icon type={pencil} handleClick={toggleFocus}/>
        }
        <Icon type={xRemove} handleClick={() => removeTask(task.id)}/>
      </div>
    </form>
  );
}
