import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import TaskButtons from './TaskButtons';
import TaskItemList from './TaskItemList';
import TaskInput from './TaskInput';

import { Task } from './TodoList.interface';

const sampleTexts: string[] = ['TS conversion', 'Make lunch', 'Clean kitchen', 'Finish laundry'];
const sampleTasks: Task[] = sampleTexts.map(text => ({ id: uuid(), text, completed: false }));


export default function TodoList() {
  const [tasks, setTasks] = useState(sampleTasks);
  const [inputValue, setInputValue] = useState('');
  const [sortOn, setSortOn] = useState(false);

  // Task State functions
  const checkAllTasks = () => {
    setTasks(tasks.map(task => ({...task, completed: true})));
  }

  const uncheckAllTasks = () => {
    setTasks(tasks.map(task => ({...task, completed: false})));
  }

  const removeAllTasks = () => {
    setTasks([]);
  }
  
  const toggleComplete = (id: Task['id']) => {
    setTasks(tasks.map(task => {
      return task.id === id 
        ? {...task, completed: !task.completed} 
        : task;
    }));
  }

  const removeTask = (id: Task['id']) => {
    setTasks(tasks.filter(task => task.id !== id));
  }


  // Input state functions
  const changeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setInputValue(value);
  }

  const handleSubmitTask = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const newTask: Task = {id: uuid(), text: inputValue, completed: false}
    setTasks([...tasks, newTask])
  }

  // Sort state functions
  const toggleSort = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSortOn(evt.target.checked)
    if (evt.target.checked) {
      sortTasks()
    }
  }

  const sortTasks = () => {
    const completed = tasks.filter((task) => task.completed)
    const uncompleted = tasks.filter((task) => !(task.completed))
    setTasks(uncompleted.concat(completed))
  }

  return (
    <div className='widget-todo container'>
      <h2>To-do List</h2>
      <div>
        <label>
          <input type="checkbox" name="sort" checked={sortOn} onChange={toggleSort}/>
          Sort
        </label>
      </div>
      <TaskButtons 
        tasks={tasks}
        checkAll={checkAllTasks}
        uncheckAll={uncheckAllTasks}
        removeAll={removeAllTasks}
      />
      <div>
        <TaskItemList 
          tasks={tasks}
          toggleComplete={toggleComplete}
          removeTask={removeTask}
        />
        <TaskInput 
          value={inputValue}
          handleChange={changeInput}
          handleSubmit={handleSubmitTask}
        />
      </div>
    </div>
  );
}
