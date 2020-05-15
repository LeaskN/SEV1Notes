
// var arr = [];
// var str = '';
// var obj = {};
// Data Types:
    // null
    //  - The absence of anything

    // var thing = null;

    // console.log(thing);

    //Undefined
    // - Example:
    //  - var thing2;
    // - NOT the same as not defined
    // - Relates to hoisting
    // - Item (usually variable, function, or Class) exists but hasn't been assigned a value yet

    //Boolean
        // A true or false value. 
        // Often referred to as truthy or falsy
        // Great for creating 'switches'
        // All datatypes hold a boolean value
            // The falsy values in JavaScript are false, 0, -0, 0n, null, undefined, NaN, and the empty string ""; 
            // Everything else is a truthy value.
                // All objects & arrays are truthy, including empty objects {} and arrays [].

        // //Boolean Practice
        // var thing3 = true; 
        // var thing4 = false;
        // var day = 'ANY STRING';
        // var emptyStr = ''; //false
        // var emptyArr = []; //false
        // var obj = { person: 'name' };

        // // console.log(Boolean(day));
        // if(emptyStr){
        //     console.log('Hello');
        // } else {
        //     console.log('Bye')
        // }

    //Everything Without a "Value" is False
    // console.log(true == 10/'h');

    // var thing = 'Kaya,Solomon,Spencer,Mitsie';

    // if( thing.indexOf(',') > -1){
    //     console.log(thing.split(','))
    // } else {
    //     console.log(thing.indexOf('-'))
    // }

    // var fullName = 'Desmond Hosham-Brathwaite'

    // if(fullName.length > 20) {
    //     fullName = fullName.slice(0, 20)
    //     console.log('fullName')
    // }


// Examples
// typeof checks the data type 
//      - Example:
//          - typeof '' equals string
//          - typeof [] equals object
//          - typeof {} equals object
//          - typeof null equals object
//          - typeof true equals boolean
//          - typeof undefined equals undefined
//          - typeof Symbol equals function

// console.log(typeof obj); 

// Parameter explanation:
    // var user = 'Mike';
    // function greetUser(parameter){
    //     return `Hi ${parameter}, welcome to the website!`
    // }
    // console.log(greetUser(user));

// commenting 
    // Define the next line's code 
        // The purpose of this is to think out a solution PRIOR to actually writing any code
// syntax
    // the set of rules we have to adhear to within JavaScript
    // Each specific thing has its own specific syntax
        // Function syntax:
            // function funkName(parameter){}
        // Loop Syntax:
            // for(var i = 0; i < number; i++){}
        // Methods
            // join
                // only for arrays
                // arr.join('-') // <- we get to choose what goes where the dash is
            // split
                // Only for strings
                // str.split('-') // <- we get to choose what goes where the dash is 
            // splice
                // Only for arrays 
                    // arr.splice(i, n, element)
                        // where i is the index that we want our element to be
                        // n is the number of items that will be removed
                        // and element is the item being added 

                    // Example:
                        // var greetings = ['Hello', 'Howdy'];
                        // greetings.splice(1, 0, "Hi", "Hola");
                        // console.log(greetings)
            // Math
                // Math.floor(9.99)
                // Math.ceil(9.01)
                // Math.round(9.5)
// functions
    // Definition: a reusable block of code that performs a specific task 

// for loops
    // Definition: A loop iterates over items and executes code for each item.
        // Important features: 
            // it has a starting point, max value, and incrimentation amount.
    // basic accumilator pattern
        // when a loop is adding value to an existing variable 
            // This can be an array, string, number, object, etc..
// ++
    // increase by 1
// --
    // decrease by 1 
// how to name variables apropriately
    // helps us and others re-read our exisiting code
// console.log & testing code 
    // console.log doesn't manipulate our code in any way
    // It JUST posts it to our console for our viewing
// Math.
    // See previous Math description. 
