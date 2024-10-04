import React from 'react';

interface ButtonProps{
    label : string;
    onClick? : (event: React.MouseEvent<HTMLButtonElement>) => void;
    type? : "button" | "submit" | "reset"; 
}

const Button: React.FC<ButtonProps>  = ({label,onClick}) => {
    return <button onClick={onClick}>{label}</button>
}

export default Button;