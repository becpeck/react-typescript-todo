import React, { useRef } from 'react';
import Icon from '../Icon';
import { Task } from '../../types';
import { ICONS } from '../constants';

type TaskItemProps = {
  task: Task;
  toggleComplete: (id: Task['id']) => void;
  removeTask: (id: Task['id']) => void;
  toggleEditOn: (id: Task['id']) => void;
  handleChange: (id: Task['id']) => React.ChangeEventHandler<HTMLInputElement>;
}

export default function TaskItem(props: TaskItemProps) {
  const { task, toggleComplete, removeTask, toggleEditOn, handleChange } = props;

  const activeInput = useRef<HTMLInputElement>(null);

  const getCompleteClass = () => (task.completed ? 'complete' : '');

  const getEditOnClass = () => (task.editOn ? 'edit' : '');

  const getClassName = (classNames: string[]) => (
    classNames.filter(className => className !== '').join(' ')
  );

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

  return (
    <form
      className={getClassName(['item-line', getCompleteClass(), getEditOnClass()])}
      onSubmit={handleSubmit}
    >
      <Icon
        variant={task.completed ? ICONS.CHECKED_BOX : ICONS.EMPTY_BOX}
        handleClick={() => toggleComplete(task.id)}
      />
      <input
        type='text'
        value={task.text}
        onChange={handleChange(task.id)}
        ref={activeInput}
        className='item-text'
        readOnly={!task.editOn}
        onBlur={toggleFocus}
      />
      { task.editOn 
        ? <Icon variant={ICONS.NO_ICON}/>
        : <Icon variant={ICONS.PENCIL} handleClick={toggleFocus}/>
      }
      <Icon variant={ICONS.X_REMOVE} handleClick={() => removeTask(task.id)}/>
    </form>
  );
}
