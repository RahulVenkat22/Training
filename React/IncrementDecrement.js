import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

/* 5) Create a component like increment and decrement the counter 
(least count is zero and the max count is 25) */



function Increment(){
    const [count,setCount] =useState(0)
    function ForIncrement(){
        if(count==25){
            return
        }
        setCount(count+1)
    }

    function ForDecrement(){
        if (count==0){
            return
        }
        setCount(count-1)
    }

    
    return(
    <>
        <h1>Count:{count}</h1>
        <button onClick={ForIncrement}>Increment</button>

        <button onClick={ForDecrement}>Decrement</button>
    </>)
    }


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Increment />)