// import logo from './logo.svg';
import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import React, { useReducer }  from 'react';


const App =()=>{


  const reducer =(state,action)=>{
  
    switch(action.type){
      case "INC":{
        if(state.count>=25){
          return state  
        }
        return {count:state.count+1}
      }
      case "DEC":{
        if(state.count<=0){
          return state
        }
        return{count:state.count-1}
      }
      default :{
        return state
      }
    }
  }

  const initialState={count:0}
  const [state,dispatch]=useReducer(reducer,initialState)



  return(
    <>
      <h1>Count:{state.count}</h1>
      <button onClick={()=>dispatch({type:"INC"})}>Press for Increment</button>
      <button onClick={()=>dispatch({type:"DEC"})}>Press for Decrement</button>
    </>
  )






}
export {App}