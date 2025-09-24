# What is the Autocomplete?

In Material UI (MUI), the Autocomplete component is a powerful UI widget that provides a text input field with suggestions or options that appear as the user types. It's ideal for building search boxes, dropdowns with search, multi-selects, or combo boxes.

It helps users quickly find and select from a list of options while typing.

It enhances a standard `<input>` field with:

- Filtering options as the user types
- Option to select from a list
- Support for free text input or strict selection
- Single or multiple selection
- Full keyboard and screen reader accessibility


#### Example of Combo Box
``` jsx
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


### Controlled states
The component has two states that can be controlled:

#### 1) Selected Value (value / onChange)
- This is the actual choice the user makes.
- Example: When the user picks an item from a list or presses Enter.
- you control it with the value and onChange props.
- Think of it as: “What the user picked.”

#### 2. Text in the Input Box (inputValue / onInputChange)
- This is what the user is typing in the box.
- You control it with the inputValue and onInputChange props.
- Think of it as: “What the user is typing right now.”




### Free Solo 
freeSolo allows users to enter values that aren't in the predefined options list. 
Useful for tags, custom entries, or when you want to allow arbitrary input.

``` jsx

return (<Autocomplete
  freeSolo
  options={topMovies.map(option => option.label)}
  renderInput={(params) => <TextField {...params} label="Type anything" />}
/>
);

```  


### Search Input  
A search input typically filters the existing options based on user input. User cannot submit a value that's not in the options list.


``` jsx
return (
<Autocomplete
  options={topMovies}
  getOptionLabel={(option) => option.label}
  filterOptions={(options, { inputValue }) =>
    options.filter(option =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    )
  }
  renderInput={(params) => <TextField {...params} label="Search movies" />}  
);  


```  

### Grouped 
You can group the options with the groupBy prop. If you do so, make sure that the options are also sorted with the same dimension that they are grouped by, otherwise, you will notice duplicate headers.  

To control how the groups are rendered, provide a custom renderGroup prop. This is a function that accepts an object with two fields:

- group: a string representing a group name
- children: a collection of list items that belong to the group
``` jsx
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';  
import top100Films from './top100Films';

export default function Grouped() {
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="With categories" />}
    />
  );
} 

```  



### Disabled Options 
``` jsx  
return (  
  <Autocomplete
  options={timeSlots}
  getOptionDisabled={(option) =>
    option === timeSlots[0] || option === timeSlots[2]
  }
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Disabled options" />}
/>);

```


