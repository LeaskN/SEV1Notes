// This is how we declare strings
// var str = 'Hello World';

// Setting a variable equal to an Array, Arrays are defined with []
//      - Example: var arr = []

// Indexing:
//      - Grabbing an item from an array is called indexing an array
//      - For example arr[1] would give us the value at index 1

// Adding items
//      - to the end of an array using push() 
//      - to the beginning of an array using unshift()
//      - to the middle using splice()
//      - Note: Arrays AREN'T immutable, they can be changed!

// Array Methods: 
//      - length gives us the length of the array
//          - Example: ['Sam', 'Jess', 'Sid'].length === 3;
//      - push adds an item to the end of an array
//          - Example: ['Sam', 'Jess', 'Sid'].push('Mic') === ['Sam', 'Jess', 'Sid', 'Mic'];
//      - unshift adds an item to the front of an array
//          - Example: ['Sam', 'Jess', 'Sid'].unshift('Mic') === [Mic, 'Sam', 'Jess', 'Sid'];
//      - shift removes the first item from an array
//          - Example: ['Sam', 'Jess', 'Sid'].shift() === ['Jess', 'Sid'];
//      - pop deletes the last item in array
//          - Example: ['Sam', 'Jess', 'Sid'].pop() === ['Sam', 'Jess'];
//      - join converts an array into a string 
//          - Example: ['Sam', 'Jess', 'Sid'].join(',') === 'Sam, Jess, Sid';


// Class Work:
// (Comment in each section by itself, remember you may need to console.log what you want to see in the CLI)
    //Section 1 examples:
    // var arr = ['Desmond', 'Mitsie', 'Kaya']
    // arr[1] // 'Mitsie';
    // console.log(arr); // gives us ['Desmond', 'Mitsie', 'Kaya']

    //Section 2 examples:
    // var arr = ['Desmond', 'Mitsie', 'Kaya', 'Geo'];
    // arr.splice(1, 2, 'Mitsie', 'Spencer');// [ 'Desmond', 'Mitsie', 'Spencer', 'Geo' ]
    // arr.push('Debbie');// [ 'Desmond', 'Mitsie', 'Spencer', 'Geo', 'Debbie' ]
    // arr.unshift('Solomon'); //[ 'Solomon', 'Desmond', 'Mitsie', 'Spencer', 'Geo', 'Debbie' ]
    // arr.splice(1, 0, 'Nat')// [ 'Solomon', 'Nat', 'Desmond', 'Mitsie', 'Spencer', 'Geo', 'Debbie' ];

    //Section 3 example:
    // GOAL: Turn a string into an array and add a value, then change it back to a string
    // var str = '4444-5555-3333-2222-1111';
    // var arr = str.split('-');
    // str = arr.join('');
    // console.log(str);