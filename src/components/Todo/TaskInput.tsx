import React, { useRef } from 'react';
import Icon from './Icon';

import { TaskInputProps } from './TodoList.interface';
import { ICONS } from './constants';

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
      <Icon variant={ICONS.EMPTY_BOX} />
      <input
        type='text'
        value={text}
        onChange={handleChange}
        ref={activeInput}
        className={`item-text`}
        onBlur={handleBlur}
      />
      { editOn
        ? <Icon variant={ICONS.NO_ICON} />
        : <Icon variant={ICONS.PENCIL} handleClick={handlePencilClick} />
      }
      { editOn && text.length > 0
        ? <Icon variant={ICONS.PLUS}/>
        : <Icon variant={ICONS.NO_ICON} />
      }
    </form>
  );
}
