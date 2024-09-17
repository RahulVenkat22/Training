// import logo from './logo.svg';
import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import React, { useReducer, useState, useRef }  from 'react';
//  --> Create a simple form with 3 text fields and submit button

const App = ()=>{

  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const nameRef = useRef(null);

  const [isContInvalid, setIsContInvalid] = useState(false);
  const contRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    if (nameRef.current.value === "") {
      setIsNameInvalid(true);
  
    
    }
    if(contRef.current.value===""){
     setIsContInvalid(true);
    }
  }
 
  return(
    <>
      <form onSubmit={handleSubmit}>
        <p id="namePara"><input placeholder="Enter in CAPTIAL LETTERS" type='text' id="inboxName" ref={nameRef}/>Enter Your Name in Capital Only</p>
        <span>{ isNameInvalid ? "Please enter a valid name" : "" }</span>
        <p><input placeholder="Contact Number" type='number' id='inboxContact' ref={contRef}/>Enter Your Contact Number</p>
        <span>{isContInvalid ? "Please enter a valid Number":""}</span>
        <p><input placeholder='Current Location' type='text' id='inboxLocation'/>Enter Your Location</p>
        <button>Button</button> 
      </form>
    </>
  )
}

export {App}