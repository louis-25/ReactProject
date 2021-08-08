import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // 라우터
import AuthService from './service/auth_service' // 파이어베이스 인증
import PostRepository from './service/post_repository'

const authService = new AuthService()
const postRepository = new PostRepository()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App authService={authService} postRepository={postRepository}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
