import React from 'react';
import { Button } from './components/Button';
import {TextInput} from './components/TextInput';
import TextWithInput from './components/TextWInput';
import './App.css';
import 'fontsource-roboto';
import RadioButtonsGroup from './components/radioButton';



var name = 'Firstname Lastname';



function App() {
  return (
    <div className="App">
      <h1>Volunteer Submission Form</h1>
      <h3>Student View</h3>
      
      <RadioButtonsGroup></RadioButtonsGroup>

      <TextWithInput></TextWithInput>
      <div>
      <button onClick = {() => {alert('')}}>Grab</button>
      </div>

      
      
    </div>
    
  );
}

export default App;
