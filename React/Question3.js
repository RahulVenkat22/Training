import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

/* 3) Create a button "Update Me" . Show the content "I am learning react" as default. 
I need the content needs to be updated like "I am learning react and hooks as well"
while clicking the button.*/

function MyText(){
const [newText,setNewtext]=useState("");
return(
<>
<h1 id='root1'>I am learning react {newText}</h1>
<button onClick={() =>setNewtext("and hooks as well")}>Update Me</button>
</>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyText />)

