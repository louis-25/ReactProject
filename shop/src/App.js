import React, {useState} from 'react';
import Bnavbar from './components/Header'
import Jumbo from './components/Jumbo'
import Detail from './components/Detail'
import Main from './components/Main'
import Header from './components/Header'
import './App.css';


import { Link, Route, Switch } from 'react-router-dom';

function App() {

  

  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Main></Main>        
        </Route>
        <Route path="/detail">
          <Detail/>
        </Route>

        <Route path="/:id">
          <div>아무거나 적었을때</div>
        </Route>
      </Switch>
    </div>
  );
}


export default App;
