import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.css'
import App from './App'
import AuthService from './service/auth_service'

const authService = new AuthService(); //인증

ReactDOM.render(
    <React.StrictMode>
        <App authService={authService}/>
    </React.StrictMode>,
    document.getElementById('root')
)
