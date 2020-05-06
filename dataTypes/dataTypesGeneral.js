
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