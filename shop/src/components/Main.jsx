import React, { useState } from 'react';

import Jumbotron from './Jumbo'
import data from '../data.js';

function Main(props) {
  let [shoes, setShoes] = useState(data);
  return (
    <div>
      
      <Jumbotron></Jumbotron>
      <div className="container">
        <div className="row">
          {shoes.map((shoe, i)=>{
            return(              
              <Card shoe={shoe} i={i+1} key={i}/>              
            )
          })
          }
        </div>
      </div>       
    </div>
  );
}

function Card({shoe, i}){
  return (
    <div className="col-md-4">
      <img src={`https://codingapple1.github.io/shop/shoes${i}.jpg`} alt={`shoes${i}`} width="100%" />
      <h4>{shoe.title}</h4>
      <p>{shoe.content}</p>
    </div>
  )
}
export default Main;