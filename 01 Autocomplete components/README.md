# What is the Autocomplete?

In Material UI (MUI), the Autocomplete component is a powerful UI widget that provides a text input field with suggestions or options that appear as the user types. It's ideal for building search boxes, dropdowns with search, multi-selects, or combo boxes.

It helps users quickly find and select from a list of options while typing.

It enhances a standard `<input>` field with:

- Filtering options as the user types
- Option to select from a list
- Support for free text input or strict selection
- Single or multiple selection
- Full keyboard and screen reader accessibility


### Controlled states
The component has two states that can be controlled:

#### 1) Selected Value (value / onChange)
- This is the actual choice the user makes.
- Example: When the user picks an item from a list or presses Enter.
- you control it with the value and onChange props.
- Think of it as: “What the user picked.”

2. Text in the Input Box (inputValue / onInputChange)
- This is what the user is typing in the box.
- You control it with the inputValue and onInputChange props.
- Think of it as: “What the user is typing right now.”