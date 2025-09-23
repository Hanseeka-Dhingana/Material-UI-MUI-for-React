import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['Apple', 'Banana', 'Cherry', 'Date'];

export default function FruitAutocomplete() {
  return (
    <Autocomplete
      options={options}
      renderInput={(params) => <TextField {...params} label="Choose a fruit" />}
    />
  );
}
