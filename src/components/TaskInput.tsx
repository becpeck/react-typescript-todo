import React, { useRef } from 'react';
import Icon from './Icon';
import { NewTask } from './types';
import { ICONS } from './constants';

type TaskInputProps = {
  newTaskInput: NewTask;
  toggleEditOn: () => void;
  resetInput: () => void;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  addNewTask: () => void;
}

export default function TaskInput(props: TaskInputProps) {
  const { text, editOn } = props.newTaskInput;
  const { toggleEditOn, resetInput, handleChange, addNewTask } = props;

  const activeInput = useRef<HTMLInputElement>(null);
  const form = useRef<HTMLFormElement>(null);

  const getEditOnClass = () => (editOn ? 'edit' : '');

  const getClassName = (classNames: string[]) => (
    classNames.filter(className => className !== '').join(' ')
  );

  const handlePencilClick = () => {
    toggleEditOn();
    activeInput.current!.focus();
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    activeInput.current!.blur();
    if (text.trim().length > 0) {
      addNewTask();
    }
  }

  const handleBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
    if (text.trim().length > 0) {
      form.current!.requestSubmit();
    } else {
      toggleEditOn();
      resetInput();
    }
  }

  return (
    <form
      className={getClassName(['item-line', 'task-input', getEditOnClass()])}
      ref={form}
      onSubmit={handleSubmit}
    >
      <Icon variant={ICONS.EMPTY_BOX} />
      <input
        type='text'
        value={text}
        onChange={handleChange}
        ref={activeInput}
        className='item-text'
        onBlur={handleBlur}
      />
      { editOn
        ? <Icon variant={ICONS.NO_ICON} />
        : <Icon variant={ICONS.PENCIL} handleClick={handlePencilClick} />
      }
      { editOn && text.trim().length > 0
        ? <Icon variant={ICONS.PLUS}/>
        : <Icon variant={ICONS.NO_ICON} />
      }
    </form>
  );
}
