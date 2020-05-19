// Homework:
    // Read:
    //     https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
    //     SKIP: A “Hello World!” example
    //     SKIP: Events section
    //     SKIP/STOP HERE: Supercharging our example website
    //     SKIP: Conclusion

// Write down 7 questions. 
    // Write them down as soon as they come to you.

// What is an API?
    // Application programming interface
        // Gives developers access to data 
            // Examples:
                // Twitter API gives access to tweet data
                // YouTube API gives access to video data

// What kinds of games can you create through JavaScript?
    // JavaScript games would have sligtly lower response times than games written in C#
        // Couldn't create good games with low lag times required 
            // most live multiplayer games
                // wow 
                // league of legend 
                // call of duty 

// Why don't we use let?
    // We hadn't learnt it yet
        // var vs let vs const

// A More in depth definition of third party framework?
    // frameworks exist to enable us to create clean/finished applications rapidly 
        // Examples:
            // Materialize - for styling 
            // Bootstrap - for styling
            // Express.js - for back end requests
            // React.js - for mobile friendly, faster, syled applications

// How hard is it to learn a different coding language?
    // Not hard at all
        // Once you have learned one you can pick them up almost weekly

// How long does it take to make a game or 3d image.
    // Right now about a week 
        // Conceptually a day
            // Tic Tac Toe would take me about 1.5 hours

// How do you connect HTML to JavaScript
    // You request it within Script tags in an HTLM doc
        // We will learn this soon

// Is CSS the same as JavaScript
    // Nope, it's for styling HTML documents

// What do they mean by written tools on top of the JavaScript language
    // People have written applications, libraries, frameworks, and more to assist us in developing 

// When can you use a semicolon?
    // At the end of a statement 
        // examples:
            // declaring variables
            // giving variables value
            // finishing a function 
            // after an if statement 

// What are comments and what is thier purpose?
    // To explain the surrounding code
        // To leave hints to yourself and other developers as to what is going on in that document
    // To comment out unused code (that you still want to keep around)
    // How do we join objects together?
        // var obj1 = {
        //     first: 'Nic',
        // }
        // var obj2 = {
        //     last: 'Leask',
        // }
        // var obj1 = {
        //     ...obj1,
        //     ...obj2
        // }
        // console.log(obj1);

// How do we declare a variable?
    // With either var, let or const plus the variable name
        // example
            // var greeting;
        // example with variable assignment
            // var aGreeting = 'hello world';


// Is JavaScript case sensitive?
    // YES! 
        // Examples include variable declarations and keywords (console vs Console)

// When using booleans should we use quotes?
    // No
    // booleans are keywords that are already stored in JavaScripts memory

// What is core JavaScript
    // It is JavaScript without any libraries, frameworks, or applications.
        // It is JS as you know it at this point 
        
// Why are variables compared to containers and not functions
    // variables are more static and unchanging (unless we re-assign values)
    // functions do stuff based on what is given
        // a function is like a Keurig 
            // you put in a keurigCup (tea, coffee, chocolate, cider, no keurigCup) <-- these are our variables
            // you get out something different based on what is put in
    // Diving deeper into 
    // Keurig is the function
    // keurigCup is our variable 
    // where we put the keurigCup is the parameter 

function test(parameter){
    return parameter * parameter;
}

console.log(test(2));