# What is the Autocomplete?

In Material UI (MUI), the Autocomplete component is a powerful UI widget that provides a text input field with suggestions or options that appear as the user types. It's ideal for building search boxes, dropdowns with search, multi-selects, or combo boxes.

It helps users quickly find and select from a list of options while typing.

It enhances a standard `<input>` field with:

- Filtering options as the user types
- Option to select from a list
- Support for free text input or strict selection
- Single or multiple selection
- Full keyboard and screen reader accessibility


``` .jsx
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

```