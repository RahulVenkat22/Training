import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';

//1) Create simple component that displays "This is my first react project"

function Display(){
return(
"This is my first react project"
)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Display />)
