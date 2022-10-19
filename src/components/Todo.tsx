import React, {useState} from 'react';

const box = '\u2610';
const xBox = '\u2612';

type TaskItem = {
  text: string;
  completed: boolean;
};

const sampleTasks: TaskItem[] = [ 
  { text: 'TS conversion',  completed: false }, 
  { text: 'Make lunch',     completed: false }, 
  { text: 'Clean kitchen',  completed: false }, 
  { text: 'Finish laundry', completed: false }
];


export default function Todo() {
  const [tasks, setTasks] = useState(sampleTasks);
  const [inputValue, setInputValue] = useState('');


  // Task State functions
  const clearTasks = () => {
    setTasks([]);
  }

  const getClassCompleted = (item: TaskItem) => {
    return item.completed ? 'complete' : '';
  }
  
  const toggleComplete = (itemText: TaskItem['text']) => {
    setTasks(tasks.map(task => {
      return task.text === itemText 
        ? {...task, completed: !task.completed} 
        : task;
    }));
  }

  const removeTask = (itemText: TaskItem['text']) => {
    setTasks(tasks.filter(task => task.text !== itemText));
  }

  // Input state functions
  const changeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setInputValue(value);
  }

  const handleSubmitTask = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const newTask: TaskItem = {text: inputValue, completed: false}
    setTasks([...tasks, newTask])
  }

  return (
    <div className='widget-todo container'>
      <h2>To-do List</h2>
      <button className='clearList' onClick={clearTasks}>Clear All</button>
      <div className='list'>
        {
          tasks.map((item: TaskItem) => {
            return (
              <div className={`item-line ${getClassCompleted(item)}`} key={item.text}> {/* TODO: Find better key */}
                <div className='todo-item'>
                  <span className='checkbox' onClick={() => {toggleComplete(item.text)}}>
                    {item.completed ? xBox : box}
                  </span>
                  <span className={`item-text ${getClassCompleted(item)}`}>
                    {item.text}
                  </span>
                </div>
                <button onClick={() => removeTask(item.text)}>Remove</button>
              </div>
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