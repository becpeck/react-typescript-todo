import React, { useRef } from 'react';
import Icon from './Icon';

import { TaskInputProps } from './TodoList.interface';
import { IconValues } from './constants';

export default function TaskInput(props: TaskInputProps) {
  const { text, editOn } = props.newTaskInput;
  const { toggleEditOn, handleChange, addNewTask } = props;

  const activeInput = useRef<HTMLInputElement>(null);
  const form = useRef<HTMLFormElement>(null);

  const getEditOnClass = () => editOn ? 'edit' : '';

  const handlePencilClick = () => {
    toggleEditOn();
    activeInput.current!.focus();
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    activeInput.current!.blur()
    if (text.length > 0) {  // TODO: Strip text
      addNewTask()
    }
  }

  const handleBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
    if (text.length > 0) {  // TODO: Strip text
      form.current!.requestSubmit()
    } else {
      toggleEditOn()
    }
  }

  return ( // TODO: fix className whitespace
    <form className={`item-line task-input ${getEditOnClass()}`} ref={form} onSubmit={handleSubmit}>
      <div className='todo-item'>
        <Icon type={IconValues.EMPTY_BOX} />
        <input
          type='text'
          value={text}
          onChange={handleChange}
          ref={activeInput}
          className={`item-text`}
          style={{width: text.length + 2 + 'ch'}} // TODO: move to css component library
          onBlur={handleBlur}
        />
      </div>
      <div className='todo-item-buttons'>
        {!editOn && <Icon type={IconValues.PENCIL} handleClick={handlePencilClick}/>}
        <Icon type={IconValues.NO_ICON}/>
        {editOn && text.length > 0 && <Icon type={IconValues.PLUS}/>}
      </div>
    </form>
  );
}
