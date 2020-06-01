// loops
    // Definition: Repeatedly executes a block of code until a certain condition is met.
        // syntax: for(let i = 0; i < number; i++){}
    // Examples: 
        // Repeatedly log something to the console
        function looper(param){
            for(let i = 0; i < param.length; i++){
                console.log(param[i]);
            }
        }

        // looper(['test', 'anotherTest', 'a final test']);
        // Basic accumilator pattern
            // Given an array of names, return an array of initials
        let fullNames1 = ['Ronald Vilorio', 'Spencer Cannon', 'Deboraht Neal', 'Nat Martinez']; // declare our array of names
        let fullNames2 = ['Geo Francis', 'Kaya Chouprouta', 'Patrick Francois', 'Rosendo Pili']; 
        let fullNames3 = ['Solomon West', 'Nic Leask']; 
        let fullNames4 = ['Mike Lebowski', 'Boo Kid', 'Andy Davis']; 

        function accPatter(param){ // create & name our function
            let initialsArr = []; // create our accumilator and set it equal to an array

            for(i = 0; i < param.length; i++){ // loop over all items in the given array
                let element = param[i]; // set a variable to our current element 
                let space = element.indexOf(' '); // get the index of the space
                let initials = element[0]; // set initials to the first character of the current element

                initials += element[space + 1]; // using the space's index, add the second initial 
                initialsArr.push(initials); // push our current initials into the accumilator called, initialsArr
            }

            return initialsArr; // return the accumilator full of initials
        }

        // console.log(accPatter(fullNames1));
        // console.log(accPatter(fullNames2));
        // console.log(accPatter(fullNames3));
        // console.log(accPatter(fullNames4));



// conditionals
    // Definition: Conditionals execute a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
        // syntax: 
            // if(true){
            //     // do something
            // } else if(true){
            //     // do something else
            // } else {
            //     // do this
            // }

    // Example:
        // Write a function that returns true if the given array includes the word 'good'
        // let arrOfStrings = ['Great', 'Perfect', 'Awesome', 'Fantastic', 'Good'];

        // function isThereGood(param){
        //     if( param.indexOf('good') > -1 || param.indexOf('Good') > -1 ){
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }

        // console.log(isThereGood(arrOfStrings));
// Previous review:

// Data Types
    // Data Types specify what kind of data can be stored and manipulated within a program.
        // Two types: primitive and non-primitive
    // Primitive (immutable data types)
        // Numbers
            // Digits that JS can perfom mathematical operations on.
        // Strings
            // Set of characters surrounded by quotes
        // Boolean
            // True or false. 
                // To test somethings boolean value:
                    // let test = -1;
                    // if(null){
                    //     console.log(true);
                    // } else {
                    //     console.log(false);
                    // }
        // Null
            // An empty value and signifies the lack of anything. 
        // Undefined 
            // When a variable doesnt have a value. (It HAS been declared. )
        // Symbols
            // assigns a specific set of characters to a unique value which is kept private and for internal use
    // Non-Primitive (mutable data types)
        // Arrays
            // List of items surrounded by square brackets
        // Objects
            // An unordered set of key-value pairs. 
        // Functions
            // Block of code designed for a paticular task. 
// String
    // Definition: Set of characters surrounded by quotes
    // Syntax: 
        // ""
        // ''
        // ``
            // Template literal
                // Can contain ${}, which is called interpolation (its a placeholder)
                // Inside this placeholder we can have code 
                    // Example:
                        // let greeting = 'Hello';
                        // let name = 'Desmond';
                        // console.log(`${greeting}, ${name}. Goodmorning!`);

// Arrays
    // Definition: List of items surrounded by square brackets
    // Syntax:
        // [item1, item2]
    
// Objects
    // Definition: An unordered set of key-value pairs
    // let obj = {
    //     key: 'value',
    //     key2: 'value2',
    // }
    // Accessing values in an object
        // obj.key2
    // Changing a value in an object
        // obj.key = 'value1';
        // console.log(obj)
    // Adding a value to an object
        // obj.key3 = 'value3';
        // console.log(obj)
    // Examples:
        // Getting the value of an object within an object
        // let nestedObj = {
        //     insideObj1: {
        //         insideKey1: 'insideValue1',
        //         insideKey2: 'insideValue2',
        //     },
        //     insideObj2: {
        //         insideKey: 'insideValue'
        //     },
        // }
        // console.log(nestedObj.insideObj1.insideKey1);
        
        // Real-World-Crazy-Exmple
        // Getting a specific value from within some JSON (JavaScript Object Notation)
        // let crazyObj = {
        //     "glossary": {
        //         "title": "example glossary",
        //         "GlossDiv": {
        //             "title": "S",
        //             "GlossList": {
        //                 "GlossEntry": {
        //                     "ID": "SGML",
        //                     "SortAs": "SGML",
        //                     "GlossTerm": "Standard Generalized Markup Language",
        //                     "Acronym": "SGML",
        //                     "Abbrev": "ISO 8879:1986",
        //                     "GlossDef": {
        //                         "para": "A meta-markup language, used to create markup languages such as DocBook.",
        //                         "GlossSeeAlso": ["GML", "XML"]
        //                     },
        //                     "GlossSee": "markup"
        //                 }
        //             }
        //         }
        //     }
        // }
        // console.log(crazyObj.glossary.GlossDiv.GlossList.GlossEntry.GlossSee)
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
    // Example:
        // let pizza = 'Pizza';
        // if (pizza === 'pizza' || pizza === 'Pizza'){
        //     console.log('You get to eat 🍕');
        // } else {
        //     console.log('🍔');
        // }

// Functions
    // A reusable block of code designed for a paticular task. 
    // Syntax:
        // function funkName(param){}
        // Articulating syntax:
            // We first have the keyword, function. Then we declare the function name with parenthesis afterwards. Inside the parens goes a parameter and after the parens we have curly brackets. 
    // Example:
        // write a function which takes in a username and a preferred greeting and replies with the greeting + name
        // let userName1 = 'Geo';
        // let userName2 = 'Nic';
        // let userName3 = 'Nat';

        // let prefGreet1 = 'Hello';
        // let prefGreet2 = 'Hi';
        // let prefGreet3 = 'Hola';

        // function greetName(greeting, name){
        //     return greeting + ' ' + name;
        // }

        // return keyword
            // return will give a function a value 
                // This will stop all aspects of the function. No remaining lines will evalualte, including loops.

        // console.log(greetName(prefGreet1, userName1));
        // console.log(greetName(prefGreet2, userName2));
        // console.log(greetName(prefGreet3, userName3));

// Loops
    // Definition: Repeatedly executes a block of code until a certain condition is met.
        // Note: usually iterates over all elements in an array, string, or up to a number. 
    // Syntax:
        // for(let i = 0; i < number; i++){ 'do something repatedly here' }
    // Example:
        // iterate over an array and log each element to the console
        // let names = ['Ronald', 'Pat', 'Spencer', 'Solomon'];
        // let cars = ['Porche', 'BMW', 'Ford', 'Toyota'];
        // let countries = ['England', 'US', 'Scotland', 'Mexico'];
            
        // function nameLogger(param){
        //     for(let index = 0; index < param.length; index++){ // for loop iterating over all names                 
        //         console.log(param[index]); // log each name to the console
        //     }
        // }

        // function nameLogger(param){
        //     let newArr = [];

        //     for(let index = 0; index < param.length; index++){ // for loop iterating over all names                 
        //         newArr.push(param[index][0]); // log each name to the console
        //     }

        //     return newArr;
        // }

        // console.log(nameLogger(names)); 
        // console.log(nameLogger(cars));
        // console.log(nameLogger(countries));

// ES6
    // Ecmascript version 6 is a specific standardization of JavaScript. 
    // Most legacy code is written in ES5
    // We initially learned ES5 and are now practicing ES6
    // Big differences between ES5 and ES6 (so far)
        // var vs let & const

// DevOps
    // develeopment management tool created by Microsoft
        // Recall: We practiced by creating our goals in DevOps
        // Future: We will be using it going forwards

// File navigation
    // cd <filename>
        // change directory
    // cd .. 
        // go up one directory
    // ls
        // list storage
    // mkdir
        // make directory
    // touch
        // make file
    // pwd
        // print working directory 
    // rm -rf <filename>
        // remove forcefully

// Git
    // Versioning software

// GitHub
    // The worlds most globally used versioning software website
    // Owned by MSFT as of 2018
    // Itergrates seamlessly with git 

// GUI
    // Graphical User Interface
        // Gives users a visualization of what our computer is doing or thinking
        // Allows users to interact with electronic devices through visual icons and audio indicators

// API
    // Application Programming Interface
        // Data that we can interact with
            // Usually in JSON (JavaScript Object Notation) format
            // Examples include YouTube API, Twitter API, or FB API

// Methods
    // String Methods
        // .length
            // evaluates to the length of a string
        //.indexOf();
            // evaluates to the first instance's index of a substring 
        // .slice(a, b);
            // string: evaluates to specific characters between given indicies
            // array: evaluates to selected elements within an array or string 
        // .split('');
            // turn a string into an array on the given character
        // .replace('thing1', 'thing2')
            // Ex: 'hello world'.replace('hello', 'hi');
            // within a string, replace the first instance of a given string with the second given string
        // .toUpperCase()
            // A method that takes all the alphabetical characters in a string and makes them uppercase. 
        // .toLowerCase()
            // A method that takes all the alphabetical characters in a string and makes them lowercase.
    // Array Methods
        // .length;
            // evaluates to the length of an array
        // arr.indexOf(ele);
            // Evaluates to a specific element's index
        // .slice(a, b);
            // Evaluates to the elements between the two given indicies.
            // Example
                // let greet = ['hello', '-', 'world'];
                // let noDash = greet.slice(1, 2);
                // console.log(noDash);
        // .splice(a, b, '');
            // Adds, or removes elements from an array at a specific index.
        // .push(ele);
            // Puts an element at the end of an array.
        // .unshift();
            // Puts an element at the beginning.
        // .pop();
            // Removes an element the end of an array.
        // .shift();
            // Removes the first element from an array.
        // .join('');
            // Converts array to a string.

// Property accessors
    // Objects
        // Dot notation
    // Arrays
        // Bracket notation
            // Example: 
                // Get the second element in an array
                // ['one', 'two', 'three'][1]; // --> 'two'
    // Strings
        // Bracket notation
            // Example: 
                // Get the second character in a string
                // 'Hello World'[1]; // --> 'e'