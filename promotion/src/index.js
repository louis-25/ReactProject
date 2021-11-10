import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ScrollProvider } from './context/ScrollContext'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

