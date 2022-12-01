import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './styles/index.scss';

import TodoList from './components/Todo/TodoList';

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);
