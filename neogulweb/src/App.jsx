import {Route} from 'react-router-dom';
import style from './App.module.css';
import Login from './components/Login/Login'
import Main from './components/Main/Main'

function App({authService, postRepository}) {
  return (
    <div className={style.app}>
      <Route exact path="/">
        <Login authService={authService}></Login>
      </Route>
      <Route exact path="/main">
        <Main authService={authService} postRepository={postRepository}></Main>
      </Route>
    </div>
  );
}

export default App;
