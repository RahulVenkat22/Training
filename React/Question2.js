import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// 2) Have a items like React,node.js,Express.js in an array and 
// loop the item in the list.
const arrayList=["React","node.js","Express.js"]
function MyArray(){
return arrayList.map((listing)=>{
return <h1>{listing}</h1>
})
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyArray />)
