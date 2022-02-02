import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import { Routes, Route } from 'react-router-dom'

function App(props) {
  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <ToastContainer />
      <Routes>
        <Route path="/" exact element={<MainPage/>}></Route>
        <Route path="/auth/register" exact element={<RegisterPage/>}></Route>
        <Route path="/auth/login" exact element={<LoginPage/>}></Route>
      </Routes>      
    </div>
  );
}

export default App;