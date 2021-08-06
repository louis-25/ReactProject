import React from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function Detail(props) {

  let { id } = useParams(); // :id자리에 입력한 값이 저장된다

  let product = props.shoes.find((a)=>{
    return a.id == id
  })

  let history = useHistory(); // 앞으로가기 뒤로가기 가능

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${parseInt(product.id)+1}.jpg`} alt="shoes" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}</p>
          <button className="btn btn-danger" onClick={()=>{ 
              props.dispatch({type: '항목추가', payload : {id: 2, name : '새로운상품', quan : 1}})
              history.push('/cart');
            }}>주문하기</button> 
          <button className="btn btn-danger" onClick={()=>{
            history.goBack();
          }}>뒤로가기</button>
        </div>
      </div>
    </div> 
  );
}

function state를props화(state){
  return {
    state : state.reducer,
    alert열렸니 : state.reducer2
  }
}

export default connect(state를props화)(Detail);