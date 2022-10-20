import React from 'react';

import { TaskButtonProps } from './TodoList.interface';

export default function TaskButtons(props: TaskButtonProps) {
  const { tasks, checkAll, uncheckAll, removeAll } = props;

  const allChecked = () => (tasks.every(task => task.completed))
  const noneChecked = () => (tasks.every(task => !(task.completed)))
  const noTasks = () => (tasks.length === 0)

  return(
    <div className='list-buttons'>
      <button disabled={allChecked()} onClick={checkAll}>Check All</button>
      <button disabled={noneChecked()} onClick={uncheckAll}>Uncheck All</button>
      <button disabled={noTasks()} onClick={removeAll}>Remove All</button>
    </div>
  );
}
