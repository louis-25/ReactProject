import logo from './logo.svg';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return (
    <BrowserRouter>    
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Switch>
        <Route path={['/',"/home"]} exact component={Home}>
          <Home/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
  
}

export default App;
