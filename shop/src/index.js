import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';

let state초기값 = [
  {id : 0, name : '멋진신발', quan : 2},
  {id : 1, name : '멋진신발', quan : 5}
];

//reducer는 state를 변경할때 사용한다
function reducer(state = state초기값, action){
  let copy = [...state];
  switch(action.type) {
    case '항목추가':      
      copy.push(action.payload)
      return copy      
    case '수량증가':
      copy[action.payload.i].quan++;      
      return copy
    case '수량감소':
      copy[action.payload.i].quan--;
      return copy
    default:
      return state
  }
}

let alert초기값 = true;

function reducer2(state = alert초기값, 액션){
  if (액션.type === '닫기') {
    return false
  }
  return state
}

// reducer 2개이상 사용할 경우 combineReducers 를 사용하자
let store = createStore(combineReducers({reducer, reducer2}));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> {/*Router 적용*/}
      <Provider store={store}>  {/*리덕스 적용*/}
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

