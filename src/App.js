import React from 'react';
import { Button } from './components/Button';
import {TextInput} from './components/TextInput';
import TextWithInput from './components/TextWInput';
import './App.css';
import 'fontsource-roboto';
import RadioButtonsGroup from './components/radioButton';
import GoogleLogin from 'react-google-login';
import GoogleBtn from './components/GoogleBtn';






var name = 'Firstname Lastname';





function App() {

  
    
  

//attempt to show that login was successful -  with either button change or text update on page?

  var buttonText = 'Login';
  return (

    <div className="App">
      
      <GoogleBtn></GoogleBtn>


          
    </div>
    
  );
}

export default App;

/*
OTHER FIELDS
<RadioButtonsGroup></RadioButtonsGroup>

      <TextWithInput></TextWithInput>
      <div>
      <button onClick = {() => {alert('')}}>Grab</button>
      </div>

*/
