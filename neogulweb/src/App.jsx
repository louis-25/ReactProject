import style from './App.module.css';
import Login from './components/Login/Login'

function App({authService}) {
  return (
    <div className={style.app}>
      <Login authService={authService}></Login>
    </div>
  );
}

export default App;
