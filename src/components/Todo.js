import React, {useState} from 'react';

const box = '\u2610';
const xBox = '\u2612';
const sampleTasks = [ {text: 'Practice JS'}, 
                      {text: 'Make lunch'}, 
                      {text: 'Clean kitchen'}, 
                      {text: 'Clear desktop'} ];

sampleTasks.forEach(task => {
  task.completed = false;
})

export default function Todo() {
  const [tasks, setTasks] = useState(sampleTasks);

  const clearTasks = () => {
    setTasks([]);
  }

  const getClassCompleted = item => {
    return item.completed ? 'complete' : ''
  }
  
  const toggleComplete = itemText => {
    setTasks(tasks.map(task => {
      return task.text === itemText 
        ? {...task, completed: !task.completed} 
        : task;
    }));
  }

  const removeTask = itemText => {
    setTasks(tasks.filter(task => task.text !== itemText));
  }

  return (
    <div className='widget-todo container'>
      <h2>To-do List</h2>
      <button className='clearList' onClick={clearTasks}>Clear All</button>
      <div className='list'>
        {
          tasks.map(item => {
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