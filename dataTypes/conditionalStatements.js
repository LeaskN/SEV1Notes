// Conditional Statements:
//  In JavaScript our conditional statements are if or if/else statements.
//      - If something is true do something 
//      - If something is false do something else 
//      - Directly tied into booleans (true and false)

// Potential Conditions Include (Comparison Operators)
//  - Greater than: 
//      - >
//  - Less than::
//      - <
//  - Greater than or equal to:
//      - >=
//  - Less than or equal to:
//      - <=
//  - Strict comparison:
//      - Strictly Equal:
//          - ===
//      - Not Strictly Equal:
//          - !==
//  - Abstract comparison:
//      - Abstractly Equal:
//          - ==
//      - Not Abstractly Equal:
//          - !=
//  - logical and:
//      - && 
//  - logical or:
//      - || 
//  - A condition can include 'and' statements and 'or' statements
//      - An 'and' statement is defined with two ampersand signs: &&
//          - Example: if(x === true && y === true){then do this}
//      - An 'or' statement is defined with two bars (||)
//          - Example: if(x === true || y === true){then do this}
//      - Doubles:
//          - true && true === true
//          - true && false === false
//          - false && false === false
//          - true || true === true
//          - true || false === true
//          - false || false === false
//      - Triples:
//          - true && true && true === true
//          - true && true && false === false 
//              - if ANY statement in an all 'and' conditional is false the entire thing is false
//          - true && true || true === true
//          - true || false || false === true
//          - true && false || false === true
//          - true || false && false === true
//      - We can keep going beyond triples!
//          - Not common though as this quickly gets confusing
//  Important things to Note:
//      - '!' is called bang
//  Everything has a boolean value.  
//      However, remeber you can always look up the following
//        var x; // x is undefined, undefined is 'falsy';
//        var y = ""; // an empty string is 'falsy';
//        var z = 0; // 0 is 'falsy';
//        var a = null; // null is 'falsy';
//        var b = -10; // any number other than 0 is 'truthy';

// Modular:
//  - Modular gives us the remainder of two numbers as a whole number
//      - 10 % 3 === 1 
//      - The above line can be read: 
//          -   Ten Mod 3 gives us a remainder of 1
//  - Modular can be used with our without conditionalStatements
//      - However, they are often paired together
//  - Examples:
//        5 % 2 === 1
//            The above line is true because 2 goes into 5 twice (2*2 === 4) with a remainder of 1
//            (5-(2*2)) === 1
//        17 % 3 === 2
//        100 % 51 === 49
//        -100 % 51 === -49
//        0 % n === 0
//        -100 % -10 === -0
//        100 % -20 === 0
//        100 % -7 === 2


// In-class examples & practice:

//SECTION 1 EXAMPLES:

    // var n = 10;
    // var i = 7;
    // var k = 12;

    // if ( n > 0 && i > 0 && k > 13 ) {
    //     //statement(s)
    //     console.log('condition1 is true');
    // } else {
    //     //statement(s) when all other conditions evaluate to false
    //     // in this situation both condition1 & condition2 evaluate to false
    //     console.log('no condition is true');
    // }

    // if ( n > 0 ) {
    //     console.log('n is larger than 0');
        
    //     if ( i > 10 ){
    //         console.log('both n and i are greater than 0');

    //         if(k > 0){
    //             console.log('all n, i, and k are greater than 0');
    //         }

    //     } else {
    //         console.log('Skipped previous if statement')
    //     }
    //     //statement(s)
    //     console.log('condition1 is true');
    // } else {
    //     //statement(s) when all other conditions evaluate to false
    //     // in this situation both condition1 & condition2 evaluate to false
    //     console.log('no condition is true');
    // }

// SECTION 2 EXAMPLES: 

    // // User login example
    // var inputUserName = 'mike@gmail.com';
    // var inputPassword = 'mikePassword123';

    // var databaseUserName = 'mike@gmail.com';
    // var databasePassword = 'mikePassword123';

    // //situation1 the user has a correct username & password combo & lands on their newsfeed 
    // if((inputUserName === databaseUserName) && (inputPassword === databasePassword)){
    //     console.log('Facebook NewsFeed page');
        
    // //situation2 user has an incorrect username & password combo & gets an "incorrect user/password combo" alert
    // } else {
    //     console.log('Incorrect username/password combo.');
    // }
    //situation2 user has an incorrect username & password combo & gets an "incorrect user/password combo" alert

// SECTION 3 EXAMPLES:

    // Section 3a:
        //Put images into column 1, 2, or 3

        // for (let index = 0; index < 20; index++) { // count up to 20
        //     if (index <= 3){
        //         //put image in first column
        //         console.log('first column')
        //     } else if( index > 3 && index < 7){
        //         // put image in second column
        //         console.log('second column')
        //     } else {
        //         // put image in third column
        //         console.log('third column')
        //     }
        // }

        // var arr1 = [];
        // var arr2 = [];
        // var arr3 = [];

    // Section 3b:
        // //the following includes a loop
        // //refer to loop notes
        // for (let index = 0; index < 24; index++) { // count up to 21
        //     //index = 4
        //     if (index % 3 === 0){
        //         //put image in first column
        //         arr1.push('🍕')
        //     } else if( index % 3 === 1){
        //         // put image in second column
        //         arr2.push('🍔')
        //     } else {
        //         arr3.push('🍟')
        //         // put image in third column
        //     }
        // }

        // console.log(arr1)
        // console.log(arr2)
        // console.log(arr3)

// SECTION 4: (Modular)
        
    // if(10 % 3 > 3){ // 1 > 3
    //     console.log('condition 1 met')
    // } else {
    //     console.log('no conditions met');
    // }