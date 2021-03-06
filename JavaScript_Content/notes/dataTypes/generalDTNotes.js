// This file is where I am creating my first GitHub Repo
// console.log() is used to print (AKA log) information to the Command Line Interface (CLI)
//     console.log("Hello World, I've updated this file!")  
    
// Variables are containers that you can store values in
    // For example:
        // var x = 2;
        // let y = 4;
        // const z = 6;
    // We can declare variables using var, let, or const. 
        // var is function scoped
        // let is block scoped
        // const is block scoped but cannot be updated
            // const cannot be updated or re-declared
            // const hello = "hello World"
            // hello = "Hello World" // --> this throws an error 

        // The reason that let and const have been created is because of some confusing situations regarding var and {}
            // Block Scope:
                // different for var and let

                // var thing1 = "Hello World";
                // if (3 > 0){
                //     var thing1 = "Howdy World"; // most people expect this to be confined to curly brackets
                // }
                // // console.log(thing1); // --> Howdy World, confusingly getting the value from inside the brackets
                
                // let thing2 = "Hello World";
                // if (3 > 0){
                //     let thing2 = "Howdy World";
                //     // console.log(thing2);
                // }
                // console.log(thing2); // --> Hello World, not getting the value from inside the brackets
                
                // const thing3 = "Hello World";
                // if (3 > 0){
                //     const thing3 = "Howdy World"; // --> Error: const variables cannot be re-assigned
                //     console.log(thing3); 
                // }
                // console.log(thing3); 

                // function scope
                    // the same for both var and let

                    // var thing4 = "Hello World";
                    // function varOnInside(){
                    //     var thing4 = 'Howdy World';
                    //     console.log(thing4); //  Howdy World as that is how thing4 was defined on the previous line
                    //     return thing4;
                    // }
                    // console.log(thing4); // Thing4 is still defined as "Hello World" due to the function scope

                    // let thing5 = "Hello World";
                    // function letOnInside(){
                    //     let thing5 = 'Howdy World';
                    //     console.log(thing5); //  Howdy World as that is how thing5 was defined on the previous line
                    //     return thing5;
                    // }
                    // console.log(thing5); // Thing5 is still defined as "Hello World" due to the function scope
    // We can give variables value using var, let, const, or without the pervious three options
        // var a = 1;
        // let b = 2;
        // const c = 3;
        // d = 4; // Global scope, but bad practice if the variable hasn't previously been defined
            // Example
                // Good practice:
                    // let a = 10;
                    // a = 20; // this is usually done inside of a function or after recieving new data
                        // Example:
                //             let t = 7;

                //             function changeT(){
                //                 t = 11;
                //                 return t;
                //             }
                //             changeT();
                //             console.log(t);
                // // bad practice
                //     b = 15; // when declaring variables we want to initialize them with let or var (if they are going to change)
                //     b = 20;

                // Scope:
                    // What is accessible within a specific function or block.
                    // Scope determines where variables, functions, and objects are accessible in your code during runtime.
                // Hoisting
                    // A mechanism where variables and function declarations are moved to the top of their scope before code execution.
                    // Specifics:
                        // var: var variables are hoisted, we can log variables declared with var prior to their declaration and we will recieve undefined as a result
                        // let: let variables are hoisted, although the variables are not immediately assigned any value and will give us an error
                        // functions: Functions are hoisted with full value to the beginning of a document
                            // let thing = 1;
                            // for(let i = 0; i < 10; i++){
                            //     let thing = "Hello World"
                            // }
                            // console.log(i);
                    // Example:    
                        // not defined:
                            // console.log(test); // --> Error: not defined
                        // full value:
                            // console.log(testfunk1()); --> hi
                            // function testfunk1(){ return 'hi' }
                        // no value: (but still hoisted)
                            // console.log( testVariable1 ); // error, testVariable1 is not defined. 
                            // let testVariable1 = 'Hello World'; 

// JavaScript Data types

//     1. Strings
//     A set of characters surrounded by quotes " ", ' ', ` `
// var name = "Nic";
// console.log("My name is " + name);

// var singleQuote = 'single-quoted';
// var doubleQuote = "double-quoted";
// var backticks = `backticks`;

// back ticks can be used for more complicated stuff
// var multiplePeople = `Desmond
// Geo
// Nat
// `
// The following are template literals
// console.log(`My name is ${name}`)
// console.log(`${multiplePeople}`)

// We can reference a single letter by its index
// var str = "Highness";
// console.log('Index 2: ' + str[2] + '.'); //g
//Highness
//01234567 <- indices

// var str2 = "Sleepy";
// console.log(str2[1] + str2[2] + str2[3]);
//Sleepy
//012345 <- indices
// var alphabet = 'abcdefghijklmnopqrstuvwxyz';

// console.log(alphabet[13] + alphabet[8] + alphabet[2]);
// console.log("Hi," + name + ' welcome to FB!');
// console.log(`Hi ${name}, welcome to FB!`);


//a b c d e f g h i j k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z
//0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 <- indices

// //Declare str1 and give it a value
// var  str1 = "Hello";
// //Goal is to change one letter of str1

// //We forget string are immutable and try to swap a letter, this doesnt work
// str1[0] = "J"; // Hello -> Jello; // DOESNT WORK

// //We create a new string (str2) and assign it a value by referencing indicies of str1
// var str2 =  `J${str1[1] + str1[2] + str1[3] + str1[4]}`;

// //We set str1 equal to str2
// // str1 = str2;

// //we check to see the value of str1
// console.log('str1: ' + str1 + ', ' + 'str2: ' + str2);
// // str[0] = "h"; // wont work

// console.log(str)
// //Strings are immutable, which means that they cannot be changed (however, the variable can)
// var str = "Hello";
// str = "Hello World!"; // we want new string to be "Hello World!"
// console.log(str)

//Getting string length & last character
    // var str = "Hello"; // length of 5, the o is at index 4
    // //Hello <- 5 characters = length of 5
    // var lengthOfStr = str.length; 
    // var lastStrChar = str[lengthOfStr - 1];
    // console.log(lastStrChar);




// //Get a specific substring, a substring is any small portion of a string
//     // Create our fullName variable 
//     // var fullName = 'Kaya;Chouprouta';
//     var fullName = 'Nic;Leask';
//     // Look for 'divider' index. AKA the index of ';'.
//     var divider = fullName.indexOf(';'); // a number
//     // Slice fullname into its first part starting from index 0 until the index of ';'. AKA the divider.
//     var first = fullName.slice(0, divider)
//     // Slice fullname into its last part starting the index of ';' until the end ';'. 
//     // +1 is to account for inclusiveness.
//     var last = fullName.slice(divider + 1, fullName.length)
//     // Show on the CLI. 
//     console.log(first);
//     console.log(last);

//Character doesn't exist 
    // Declare fullName and assign it a value.
    // var fullName = 'Nic Leask';
    // // Look for the index of ';'
    // var divider = fullName.indexOf(';'); // a number
    // // Show the result
    // console.log(divider); //Produces -1




// Making a string lower case
    // var meme = "tHiS is a MEmE";
    // var smallMeme = meme.toLowerCase();
    // var bigMeme = meme.toUpperCase();

    // console.log(meme)
    // console.log(smallMeme)
    // console.log(bigMeme);

    // // Example with no caps
    //     var fullName = 'leisser espana';
    //     var divider = fullName.indexOf(' ');
    //     var fixedFirst = 'L' + fullName.slice(1, divider); //'Leisser';
    //     var fixedLast = "E" + fullName.slice(divider + 2, fullName.length); //'Espana';
    //     var fixedName = fixedFirst + ' ' + fixedLast;
    //     console.log(fixedName);

    // //Variable naming conventions
    //     // camelCase
    //         var fullName = "Nic Leask";
    //     // snake_case
    //         var full_name = "Nic Leask";
    //     // PascalCase
    //         var FullName = "Nic Leask";
    
//str.replace('substring', 'newSubstring') 🔥IMMUTABILITY🔥
    // replace() is a method which searches for a specific string and replaces it with a new one.
    // Example:
    //     // Assign a variable to a string
    //     var str = "Hello World.";
    //     // Looking for a specific character and replacing it 
    //     // Setting our orignial variable to the new string
    //     str = str.replace('.', '!');
    //     // Logging it to the console
    //     console.log(str);

    // 'Hello World';
    // "Don't";
    // var secondWord = 'World';
    // `Hello ${secondWord}`;

// String Summary
//      A set of characters surrounded by quotes " ", ' ', ` `
//      String are immutable, which means they cannot be changed.
//      Use variables to create new strings 
    //  Backticks (template literals) vs Single or Double Quotes:
//          - You can include JavaScript within backticks by using ${}, which is called interpolation
//          - Backticks are very literal, until you close them out everything (included new lines will be included)
//          - Backticks are very literal, they inlucde new line characters
//              var string = `
//               `
//              //Single or double quoutes will see a new line as a statement finisher
//              var string2 = '
//              '

//      Concatenation
//          - Joining together of multiple strings 
//              - Examples: 
//                  - str1 + str2
//                  - 'Hello' + 'World' = 'Hello World'
//                  - "Hello" + "World" = "Hello World"

//      Indicies
//          - Each character in a string has an index
//          - Index starts at 0 and counts upwards until the end of the string
//          - Note: .indexOf() is a method, see methods below

//      Getting Specific Characters
//          - We can get specific characters by using square brackets
//          - Example
//              - 'Hello World'[0] = 'H'
//              - 'Hello World'[3] = 'l'
//              - 'Hello World'[5] = ' '
//          - Note: Empty quotes and quots with a space are completely different
//              - '' ≠ ' '
//          - A common thing is to look for the last character the code for that looks like this:
//              - var str = 'Hello World'
//              - str[str.length - 1] will equal 'd'
//          - We can search for a substring and we will get where it starts as a value
//              - Example: 'Hello World'.indexOf('llo') = 2

//      Methods
//          - Length
//              - All strings have a length 
//              - We can find the length with the length method.
//                  - Example: 
//                      - 'Hello World'.length = 11
//              - Length is usually 1 more than the highest index (because index starts at 0 and length starts at 1)
//                  - Think, what is the length of "h"?
//              - Case
//                  - We have two methods for changing case
//                      - 'Hello World'.toUpperCase() equals 'HELLO WORLD'
//                      - 'Hello World'.toLowerCase() equals 'hello world'
//          - Slice
//              - We can grab a substring starting from index #1 (inclusive) to index #2 (exclusive)
//                  - Example:
//                      - 'Hello World'.slice(6, 11) = World
//          - Replace
//              - We can replace a substring by using .replace()
//                  - Example:
//                      - 'Hello World'.replace('H', 'J') = 'Jello World'
//                      - 🔥IMPORTANT🔥 the string 'Hello World' has not been changed, it is immutable
//          - IndexOf
//              - We can find this index using the method .indexOf()
//                  - For example: 'Hello World'.indexOf('e') will be equal to 1
//              - If we search for a character that doesn't exist we will get -1
//                  - For example: 'Hello World'.indexOf('x') will be equal to -1
//              - If we search for a character that appears multiple times we'll get the first instance
//                  - For example: 'llama'.indexOf('l') will be equal to 0, which is the first instance of the l
//              - Capitals and lowercase letters are not the same
//                  - For example: 
//                      - 'Bobby'.indexOf('B') will be equal to 0
//                      - 'Bobby'.indexOf('b') will be equal to 2


//  What is syntax:
    // The syntax of JavaScript is the set of rules that define a correctly structured JavaScript program.
        // Similar to Grammer
            // Lets eat, Grandpa! // this means lets eat with gradpa
            // Lets eat  Grandpa! // this means something cannibal
            // Examples:
                
                // var variableName1; //declare variable syntax
                // var variableName2 = 'Test'; // assign variable a value syntax
                // if(condition){
                //     execution;
                // }; // if statement syntax
                // for (let index = 0; index < array.length; index++) {
                //     'do something here'
                // } //for loop syntax
                // console.log(variableName);

// Q1:
// var fruit = 'Banana';

// Remove the first a from 'Banana'
// console.log(fruit.replace('a',''))

// Remove all 'a's from Banana using a loop (immutability makes this slightly more difficult)
// //Solution 1:
// var finalStr = '';
// for (var i = 0; i < fruit.length; i++) {
//     var letter = fruit[i];  
//     //if the letter is a 
//     if(letter.indexOf('a') === -1){
//         //remove the letter
//         console.log(letter);
//         finalStr = finalStr + letter
//     };
// };
// console.log(finalStr);


// //Solution 2:
// var finalStr = '';
// for (let i = 0; i < fruit.length; i++) {
//     //if the letter is a 
//     if(fruit[i] !== 'a'){
//         //remove the letter
//         console.log(letter);
//         finalStr = finalStr + letter;
//     };
// }
// console.log(finalStr);

// Primative Data Types
        // All immutable, (re-assign the variable if you'd like to change it)
            // Example:
                // var str1 = 'Test'
                // str1 = str1.slice(1,3);
                // console.log(str1);
    // String
        // Characters surrounded by a set of quotes, either '', "", or ``
    // Boolean
        // True or False values. Can be called Truthy or Falsy. All data types hold boolean values. 
    // Undefined
        // Something has been defined but hasn't been assigned a value.
        // var thing; 
    // Null
        // An empty value. Signifies the lack of anything.
        // var thing1 = null;
    // Number
        // Numbers are comprised of digits. JavaScript can perform mathematical operations on them. 

    // Symbol
        // Used for creating unique identifiers.

// Complex Data Types 
    // Arrays
        // A list of items surrounded in square brackets. 
    // Objects
        // An unordered collection of key-value pairs.
            // Internet:
                // An unordered collection of related data in the form of “key: value” pairs. 
        // var obj1 = {
        //     team: {
        //         player1: {
        //             attributes: {
        //                 hair: 'brown',
        //                 eyes: 'brown',
        //                 height: '150cm'
        //             }
        //         },
        //         player2: {
        //             attributes: {
        //                 hair: 'brown',
        //                 eyes: 'brown',
        //                 height: '150cm'
        //             }
        //         },
        //         player3: {
        //             attributes: {
        //                 hair: 'brown',
        //                 eyes: 'brown',
        //                 height: '150cm'
        //             }
        //         }
        //     }
        // }
        // console.log(obj1.team.player.attributes.hair)
    // Functions
        // A re-usable block of code designed to perform a particular task. 
            // Syntax:  
                // keyword, function name, parameter
                // function firstPersonsName(names){
                //     firstPerson = names[0];
                //     // return ensures the function evaluates to a value. 
                //     return firstPerson;
                // }
                // // define our variable which will be utilized as an argument
                // // the argument takes place of all occurences of the parameter
                // var people = [ 'Debbie', 'Geo' ];
                // //      calling the function, and invoking it with the people array.
                // console.log(firstPersonsName(people));
                // // ^ logging it to the terminal
                // var arg = "I am arguing"

                // function test(parameter){

                //     return "Welcome to Facebook!";
                // }

                // console.log(test(arg));
    // Dynamic Solutions or Dynamic Code
        // A dynamic solution is one that is built to handle all scenarios, not just the one at hand. 
            // For example:
                // find the middle letter of a string   
                    // should return the middle letter of ANY string not just one string, no matter the length
                // find the last element of an array
                    // should return the last letter of ANY array not just one array, no matter the length
            // example of turning static solutions into dynamic solutions
                // Instructions: write a function that gets the middle character of a string
                let str1 = "Hug";
                let str2 = "Higgs";
                let str3 = "Trench";
                let str4 = "Prying";
                let str5 = "Tipping";
                let str6 = "Hello";
                let str7 = "World";

                // the following solutions evolve from one to the next to be more dynamic

                // Static solution 1: 
                    // function middleCharacter(param){
                    //     return 'u';
                    // }
                    // console.log(middleCharacter(str1));
                    // this solution works for any string with an odd amout of Characters and the middle Character is u.

                // Static solution 2:
                    // function middleCharacter(param){
                    //     return str2[1];
                    // }
                    // console.log(middleCharacter(str2));
                    // this solution works for any string with 3 Characters and is contained in the variable str2.
                
                // Static solution 3:
                    // function middleCharacter(param){
                    //     return param[1];
                    // }
                    // console.log(middleCharacter(str1));
                    // console.log(middleCharacter(str2));
                    // console.log(middleCharacter(str3));
                    // console.log(middleCharacter(str4));
                    // console.log(middleCharacter(str5));
                    // console.log(middleCharacter(str6));
                    // console.log(middleCharacter(str7));
                    // this solution works for any string with 3 or 4 Characters
                
                // Dynamic solution 1:
                    // this will be dynamic, but only by a hair
                    // function middleCharacter(param){
                    //     let middleIndex = (Math.floor(param.length/2));
                    //     return param[middleIndex];
                    // }
                    // console.log(middleCharacter(str1));
                    // console.log(middleCharacter(str2));
                    // console.log(middleCharacter(str3));
                    // console.log(middleCharacter(str4));
                    // console.log(middleCharacter(str5));
                    // console.log(middleCharacter(str6));
                    // console.log(middleCharacter(str7));
                    // // this solution works for any string

                // Dynamic solution 2: (final solution)
                    // this will be dynamic, but only by a hair
                    function middleCharacter(param){
                        if(typeof param === 'string'){
                            let middleIndex = param.length / 2;
                            let middleCharacter = param.slice(middleIndex, middleIndex+1);
                            return middleCharacter;
                        } else {
                            return "Unable to find middle character, not a string.";
                        }
                    }
                    console.log(middleCharacter(['Hello', 'World']));
                    console.log(middleCharacter(str2));
                    console.log(middleCharacter(str3));
                    console.log(middleCharacter(str4));
                    console.log(middleCharacter(str5));
                    console.log(middleCharacter(str6));
                    console.log(middleCharacter(str7));
// Bracket Notation:
    // Getting specific characters from a string or
    // Getting specific elements from an array
    // Examples:
        // String:    
            // 'Hello-World'[0] // --> 'H'
        // Array
            // ['Hello', 'World'][0] // --> 'Hello'
        // Common example is to get something based on its length
            // 'Hello-World'[('Hello-World'.length -1)]// --> 'd' (which is the last letter)
            // ['Hello', 'World'][(['Hello', 'World'].length -1)] --> 'World' (the last element)
            // 'Hello-World'[('Hello-World'.length - 4)] // --> o
// Methods:

    // String:
        // Length
            // gives us how many characters are in the string
            // Syntax:
                // str.length
        // Slice
            // gives us specific characters inbetween two indicies. Inclusive at the start and exlusive at the end. 
            // Syntax:
                // ('Hello-World').slice(0,2); // --> 'He'
                // console.log('hello world'.slice(0,2));
        // Split
            // Turns a string into an array cut on a given character. 
            // Syntax:
                // ('Hello-World').split('-') // --> ['Hello', 'World']
        // Replace
            // Replaces the first occurrence a character with another character.
            // Syntax:
                // ('Hello-World').replace('-', ' ') // --> 'Hello World'
                // ('Hello-World').replace('l', ' ') // --> 'He lo-World'
        // IndexOf
            // Gives you the specific location of an element.
            // Syntax
                // ('Hello-World').indexOf('o'); // --> 4;
        
    // Arrays:
        // length
            // gives us how many elements are in the array
            // Syntax:
                // arr.length
        // push
            // Adds an element to the end of an array
            // Syntax:
                // var arr = ['Hello', 'World']
                // arr.push('Goodmorning')
                // console.log(arr); // --> ['Hello', 'World', 'Goodmorning']
        // unshift
            // Adds an element to the beginning of an array.
            // Syntax
                // var arr1 = ['Hello', 'World']
                // arr1.unshift('Great')
                // console.log(arr1); // --> ['Great', 'Hello', 'World']
        // shift
            // Removes the first element from an array.
            // Syntax
                // var arr2 = ['Hello', 'World']
                // arr2.shift()
                // console.log(arr2) // --> ['World']
        // pop
            // Deletes the last element from an array.
            // Syntax
                // var arr3 = ['Hello', 'World']
                // arr3.pop()
                // console.log(arr3) // --> ['Hello']
        // Splice
            // Adds and removes elements.
                // Syntax
                    // var arr = ["Hello", "World"];
                    // arr.splice(0,0,'Greetings', 'Hi');
                    // console.log(arr);
        // join
            // Converts an array into a string by concatenating all elements together on a given character.
            // Syntax
                // var arr4 = ['Hello', 'World'];
                // var stringFromArr4 = arr4.join('-');
                // console.log(stringFromArr4);
        

// 
    // Definition:
        // Repeatedly executes a block of code until a certain condition is met.
    // Syntax:
        // for (var index = 0; index < number; index++){}
        // Inside a function
            // function doALoop(parameter){
                // for (var index = 0; index < number; index++){

                // }
                // return 
            // }
    // basic accumilator pattern
        // definition:
            // A commonly occuring block of code which has a variable outside a loop that we are modifying from inside a loop. 
                // Remember the warehouse/forklift example.
            // Syntax:
                // Number:
                    // var highest = 10;
                    // function countEvenSum (numParam){
                    //     var accumilator1 = 0;

                    //     for(var i = 0; i < numParam; i++){
                    //         if(i % 2 === 0 ){
                    //             accumilator1 = accumilator1 + i; // accumilator1 += i
                    //         } 
                    //     }

                    //     return accumilator1;
                    // }
                    // console.log(countEvenSum(highest));
                // Array:
                    // var names = ['Debbie Neal', 'Nat Martinez', 'Solomon West'];

                    // function lastNames(arrParam){
                    //     var allLasts = [];

                    //     for(var i = 0; i < arrParam.length; i++){
                    //         var fullName = arrParam[i];
                    //         var space = fullName.indexOf(' ');
                    //         var last = fullName.slice(space + 1, fullName.length);
                    //         allLasts.push(last);
                    //     }
                    //     return allLasts;
                    // }
                    // console.log(lastNames(names));
                // String:
                    // every time we have the letter e our count will increase
                    // var sentence = 'The quick brown fox jumps over the lazy dog.';

                    // function allEs(strParam){
                    //     var numberOfEs = 0;

                    //     for(var i = 0; i < strParam.length; i++){
                    //         var letter = strParam[i];

                    //         if ( letter === 'e' || letter === 'E' ){
                    //             numberOfEs++;
                    //         } else {

                    //         }
                    //     }
                    //     return numberOfEs;
                    // }
                    // console.log(allEs(sentence));

                    // function allVowels(strParam){
                    //     var numberOfEs = 0;

                    //     for(var i = 0; i < strParam.length; i++){
                    //         var letter = strParam[i];

                    //         if ( letter === 'e' || letter === 'E' ||
                    //              letter === 'a' || letter === 'A' ||
                    //              letter === 'i' || letter === 'I' ||
                    //              letter === 'o' || letter === 'O' ||
                    //              letter === 'u' || letter === 'U'
                    //         ){
                    //             numberOfEs++;
                    //         } else {

                    //         }
                    //     }
                    //     return numberOfEs;
                    // }
                    // console.log(allVowels(sentence));
    // Why is order important?       
        // function movingArray(param){
        //     param.splice( 5, 0, 'five');
        //     param.push('six');
        //     param.unshift('negOne');

        //     return param;
        // }

        // console.log(movingArray([0,1,2,3,4]));