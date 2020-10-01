import React from 'react';
import './textinput.css';
import { Button } from './Button';

export const TextInput = props => {
    
    return (
        <>
            <input
            
            type='text'
            value = {props.value}
            onChange={event => console.log("Value Changed!")}
            />
            
            <Button onClick={() => alert()}>Enter</Button>
            
            </>
    );
};



