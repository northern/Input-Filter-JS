# Input-Filter-JS

A simple jQuery plugin to filter keystrokes on an input field.

## Example

Input Filter allows you two filter on two distinct attributes; characters and length (or both).

To filter on characters, simply initialize the input field you wish to target and specify which characters are allowed:

    $('input[name=creditcard-number]').inputFilter( {
    		'allowed': "0123456789"
    } );

Or maybe you want to set a maximum length:

    $('input[name=creditcard-cvv]').inputFilter( {
    		'allowed': "0123456789",
    		'max-length': 3
    } );

That's pretty much it.
