import { useState } from 'react';
import './App.css';
import Modal from './components/modal/modal';

function App() {
  const [modal, setModal] = useState(false)

  return (
    <div className="App">      
      <h1>TEST</h1>
      <button onClick={()=>setModal(!modal)}>모달버튼</button>
      <pre>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
        Laboriosam, magni! Unde tempora ad cumque quaerat suscipit nisi.<br/>
        Sit voluptate a debitis quas, molestiae officia voluptatem eius doloribus,<br/>
        ratione, quaerat nam?
      </pre>
      <pre>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
        Laboriosam, magni! Unde tempora ad cumque quaerat suscipit nisi.<br/>
        Sit voluptate a debitis quas, molestiae officia voluptatem eius doloribus,<br/>
        ratione, quaerat nam?
      </pre>
      <pre>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
        Laboriosam, magni! Unde tempora ad cumque quaerat suscipit nisi.<br/>
        Sit voluptate a debitis quas, molestiae officia voluptatem eius doloribus,<br/>
        ratione, quaerat nam?
      </pre>
      <div className='modalBox'>
        {
          modal && 
          <>
            <Modal/>
            <div className='modal-cover' onClick={()=>setModal(!modal)}/>
          </>
        }
      </div>      
    </div>
  );
}

export default App;
