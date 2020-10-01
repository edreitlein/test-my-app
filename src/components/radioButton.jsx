import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('alyssa');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Choose your DAS Mentor</FormLabel>
      <RadioGroup aria-label="das mentor" name="dasMentor" value={value} onChange={handleChange} >
        <FormControlLabel value="alyssa" control={<Radio />} label="Alyssa" />
        <FormControlLabel value="cassidy" control={<Radio />} label="Cassidy" />
        <FormControlLabel value="janak" control={<Radio />} label="Janak" />
        <FormControlLabel value="kate" control={<Radio />} label="Kate" />
        <FormControlLabel value="marwa" control={<Radio />} label="Marwa" />
        <FormControlLabel value="melanie" control={<Radio />} label="Melanie" />

        
      </RadioGroup>
    </FormControl>
  );
}