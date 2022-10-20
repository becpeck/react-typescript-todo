import React, {useState} from 'react';

import TaskButtons from './TaskButtons';
import TaskItemList from './TaskItemList';
import TaskInput from './TaskInput';

import { Task } from './TodoList.interface';

const sampleTasks: Task[] = [ 
  { text: 'TS conversion',  completed: false }, 
  { text: 'Make lunch',     completed: false }, 
  { text: 'Clean kitchen',  completed: false }, 
  { text: 'Finish laundry', completed: false }
];


export default function TodoList() {
  const [tasks, setTasks] = useState(sampleTasks);
  const [inputValue, setInputValue] = useState('');


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
  
  const toggleComplete = (itemText: Task['text']) => {
    setTasks(tasks.map(task => {
      return task.text === itemText 
        ? {...task, completed: !task.completed} 
        : task;
    }));
  }

  const removeTask = (itemText: Task['text']) => {
    setTasks(tasks.filter(task => task.text !== itemText));
  }


  // Input state functions
  const changeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setInputValue(value);
  }

  const handleSubmitTask = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const newTask: Task = {text: inputValue, completed: false}
    setTasks([...tasks, newTask])
  }

  return (
    <div className='widget-todo container'>
      <h2>To-do List</h2>
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
