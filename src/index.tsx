import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Todo from './components/Todo';

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);
