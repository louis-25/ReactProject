import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.css'
import App from './App'
import AuthService from './service/auth_service'
import ImageUploader from './service/image_uploader'
import ImageFileInput from './components/image_file_input/image_file_input';

const authService = new AuthService(); //인증
const imageUploader = new ImageUploader();
const FileInput = props => (
    <ImageFileInput {...props} imageUploader={imageUploader}/>
);

ReactDOM.render(
    <React.StrictMode>
        <App authService={authService} FileInput={FileInput}/>
    </React.StrictMode>,
    document.getElementById('root')
)
