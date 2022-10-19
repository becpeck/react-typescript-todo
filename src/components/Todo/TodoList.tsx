import React, {useState} from 'react';
import TaskItem from './TaskItem';

export type Task = {
  text: string;
  completed: boolean;
};

export type TaskItemProps = {
  task: Task;
  getCompleted: (task: Task) => 'complete' | '';
  toggleComplete: (itemText: Task['text']) => void;
  removeTask: (itemText: Task['text']) => void;
}

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
  const clearTasks = () => {
    setTasks([]);
  }

  const getCompleted = (task: Task) => {
    return task.completed ? 'complete' : '';
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
      <button className='clear-list' onClick={clearTasks}>Clear All</button>
      <div className='list'>
        {
          tasks.map((task: Task) => {
            return (
              <TaskItem
                key={task.text}
                task={task} 
                getCompleted={getCompleted} 
                toggleComplete={toggleComplete} 
                removeTask={removeTask}
              />
            );
          })
        }
        <form className='input item-line' onSubmit={handleSubmitTask}>
          <input type='text' value={inputValue} onChange={changeInput}/>
          <button type='submit'>Add Task</button>
        </form>
      </div>
    </div>
  );
}