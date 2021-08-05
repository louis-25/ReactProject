import React, {useState} from 'react';
import Detail from './components/Detail'
import Main from './components/Main'
import Header from './components/Header'
import data from './data.js';
import Cart from './Cart'
import './App.css';


import { Route, Switch } from 'react-router-dom';

function App() {

  let [shoes, setShoes] = useState(data);

  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Main shoes={shoes}></Main>      
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes}/>
        </Route>
        <Route path="/cart">
          <Cart></Cart>
        </Route>
        <Route path="/:id">
          <div>아무거나 적었을때</div>
        </Route>
      </Switch>
    </div>
  );
}


export default App;
