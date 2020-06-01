// Conditionals
    // 'if' or 'if/else' statements.
    // Definition: Conditionals execute a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
    // Syntax:
        // if something is true, do something. If that thing is false do something else.
        // Standard all-inclive syntax:
            if ('something is true') {
                // do something 
            } else if ('something else is true') {
                // do something else
                // we can have an infinite amount of else if statements
            } else {
                // a catch all
                // do this if everything else is false
            }
        // Syntax for no else-if statements
            if ('something is true') {
                // do something 
            } else {
                // a catch all
                // do this if everything else is false
            }
        // Syntax for no else-if statements just if statement
            if ('something is true') {
                // do something 
            }
// Comparison Operators:
    // <
        // less than
    // >
        // greater than
    // >=
        // greater than or equal to
    // <=
        // less than or equal to
    // === 
        // strictly equals
    // !==
        // strictly does not equal
    // == 
        // abstractly equals
    // !=
        // abstractly does not equal 
    // && 
        // logical and 
    // || 
        // logical or
// Examples:
    // let food = 'Pizza';
    // if (food === 'pizza' || food === 'Pizza'){
    //     console.log('You get to eat 🍕');
    // } else {
    //     console.log('🍔');
    // }
    
    // Write a function which tells you if the given string has a e in it.
        // let str1 = "Hello World";
        // function eChecker(param){
        //     // if param includes the letter e return "We found an e!!"
        //     if( param.indexOf('e') > -1 ){
        //         return "We found an e!!";
        //     }
        // }
        // // console.log(eChecker(str1));
        // console.log(str1.indexOf('x'));

    // Write a function which returns 'Whoa, thats a long string!' if the given string is longer than 5 characters.
    // Otherwise return, 'Not a long string.'
        // let str1 = "Hello World";
        // let str2 = "Help";

        // function longStr(param){
        //     if( param.length > 5 ){
        //         return 'Whoa, thats a long string!';
        //     } else {
        //         return 'Not a long string.';
        //     }
        // }

        // console.log(longStr(str1));
        // console.log(longStr(str2));

    // Write a function that checks an object (defined below) to see if its name key has a value
        // let user1 = {
        //     age: 44,
        //     location: 'Oregon', 
        //     device: 'iPhone 10',
        // }
        // let user2 = {
        //     age: 23,
        //     location: 'Hawaii', 
        //     device: 'iPhone 5',
        //     name: 'Paul@gmail.com',
        // }
        // let user3 = {
        //     age: 99,
        //     location: 'Alaska', 
        //     device: 'Nokia',
        //     name: 'Dorothy'
        // }
        
        // function nameChecker(param){
        //     if( param.name === undefined ){
        //         return 'No value';
        //     } else if(param.name.indexOf('.') > -1) {
        //         return "Enter Name Please";
        //     } else {
        //         return param.name;
        //     }
        // }

            // console.log(nameChecker(user1));
        // console.log(nameChecker(user2));
        // console.log(nameChecker(user3));

        // console.log(user.name) // undefined

        // Write a function that takes an array. 
        // If the array has length greater than 5 return 'Longer than 5'. 
        // If it doesn't, return 'Shorter than 5'.
        // If the legnth is equal to 5 do something else.

        // let randArr1 = [0, true, false, undefined, 'Red', '🍕', 6];
        // let randArr2 = ['Red', 'Green', '🍕', 6];
        // let randArr3 = ['😄', '💯', '🐶', '🍕', '🥳'];
        
        // function lessThan5(param){
        //     if( param.length > 5 ){
        //         return 'Longer than 5';
        //     } else if(param.length === 5){
        //         return 'Exactly length of 5';
        //     } else {
        //         return 'Shorter than 5';
        //     }
        // }

        // console.log(lessThan5(randArr1));
        // console.log(lessThan5(randArr2));
        // console.log(lessThan5(randArr3));

