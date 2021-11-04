import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ScrollProvider } from './context/ScrollContext'

ReactDOM.render(
  <React.StrictMode>
    <ScrollProvider>
      <App />
    </ScrollProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

