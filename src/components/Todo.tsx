import React, {useState} from 'react';

const box = '\u2610';
const xBox = '\u2612';

type TaskItem = {
  text: string;
  completed: boolean;
}

const sampleTasks: TaskItem[] = [ 
  { text: 'TS conversion',  completed: false }, 
  { text: 'Make lunch',     completed: false }, 
  { text: 'Clean kitchen',  completed: false }, 
  { text: 'Finish laundry', completed: false }
];


export default function Todo() {
  const [tasks, setTasks] = useState(sampleTasks);

  const clearTasks = () => {
    setTasks([]);
  }

  const getClassCompleted = (item: TaskItem) => {
    return item.completed ? 'complete' : ''
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
      </div>
      {/* <input>Ignore</input>
      <button>Ignore</button> */}
    </div>
  );
}