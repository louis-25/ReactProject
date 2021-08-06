import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // 라우터
import AuthService from './service/auth_service' // 파이어베이스 인증

const authService = new AuthService()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App authService={authService}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
