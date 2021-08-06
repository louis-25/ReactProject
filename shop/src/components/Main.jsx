import React from 'react';
import { useHistory } from 'react-router-dom';
import Visual from './Visual'


function Main({shoes}) {

  return (
    <div>      
      <Visual></Visual>
      <div className="container">
        <div className="row">
          {shoes.map((shoe, i)=>{
            return(              
              <Card shoe={shoe} i={i} key={i}/>              
            )
          })
          }
        </div>
      </div>       
    </div>
  );
}

function Card({shoe, i}){
  let history = useHistory()
  return (
    <div className="col-md-4">
      <img onClick={()=>{history.push(`/detail/${i}`)}} src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} alt={`shoes${i}`} width="100%" />
      <h4>{shoe.title}</h4>
      <p>{shoe.content}</p>
    </div>
  )
}
export default Main;