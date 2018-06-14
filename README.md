# ReactJS Number Textfield
ReactJS component for accepting numerical input as a standard textfield

# Quickstart

## Installation
`npm install --save-dev react-number-textfield`

## Import
`import { NumberTextfield } from "react-number-textfield"`

## Usage
```
<NumberTextfield
  decimal_character="."
  group_separator=","
  precision={ 2 }
  placeholder="Enter a number..."
  didChangeNumber={(newNumber) => {
    console.log("New Number", newNumber);
  }}
/>
```

# Props

## className `string`
CSS classes to apply to the input element.

## placeholder `string`
Standard HTML placeholder attribute. This is the string displayed in the textfield when it is empty.

## decimal_character `string`
Which character(s) should be used for the decimal point. Most commonly, this will be a comma or a dot.

## group_separator `string`
Which character(s) should be used for grouping numbers every 3 digits. Most commonly, this will be a comma or a space.

## precision `number`
Set the maximum number of decimal digits. Use 0 to disable decimals.

## didChangeNumber `function`
Callback function that is executed every time the number value from the textfield changes. The function receives one argument: the number value from the textfield, or undefined if no number can be derived.
