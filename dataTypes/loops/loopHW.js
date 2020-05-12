// Q1: Create a loop that greets us 5 times!
//      - After running your console should look like:
//          - Hi!
//          - Hi!
//          - Hi!
//          - Hi!
//          - Hi!

// The variable "let i = 0" means the variable is starting at the 0 index

//** For Loop Comment **
// The word LET replaces (var) i equals 0; which is less than 5;  
// The i++ indicates an addition of one iteration of the word "Hi". Anything in {} indicate its own scope.
// For example the word 'Hi' was Looped (repeated) 5 times. 
// The value of i is mutable, meaning that the index can be changed to give a different outcome.

// ** For Loop Comment **
// We are creating a loop. First We are declaring a variable called i. 
// Then we are setting the maximum value of i.
// Then we are saying what we'd like i to increase by. 

for (let i = 0; i < 5; i++) {
    // console.log prints what is inside its parantesis to the terminal/cli/bash/zsh
    console.log('Hi!');
}

// Q2: Create a loop which tells us what loop number it is on
//      - The CLI should look as follows:
//          - Loop Count: 1
//          - Loop Count: 2
//          - Loop Count: 3
//          - Etc.. based on the max value parameter

// ** For Loop Comment **
for (let j = 0; j < 10; j++) {
    // add 1 to j and print it to the cli
    console.log(j + 1);    
}


// Q3: Loop over the following array and console.log the current index value
//      - ['Zeus', 'Hades', 'Hermies', 'Poseidon']
//          -   Zeus
//          -   Hades
//          -   Hermies
//          -   Poseidon

// declare a variable called greekGods. Set the variable greekGods equal to an Array filled with 4 strings which are, 'Zeus', 'Hades', 'Hermies', 'Poseidon'.
var greekGods = ['Zeus', 'Hades', 'Hermies', 'Poseidon'];
// iterate through the greekGods array, one value at a time
for(var k = 0; k < greekGods.length; k++){
    // declare a variable called currentGod
    // set that variable equal to the value at the current index
    var currentGod = greekGods[k];
    // print our current value to the CLI
    console.log(currentGod);
}


// Q4: Hard:
    // Loop over the following array and log to the CLI an array that has each word without any vowels
    //      - ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
    //      - Output: ['ppl', 'Bnn', 'rng', 'Pch', 'Strwbrry', 'Plm']; 


    //I want to loop over the array
        // I want to figure out if a word has a vowel in it
        // If a word has a vowel remove said vowel
        // Do the same thing for capital voewls
        // Add these words into a new array

    // var fruit = ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
    // var fruitNoVowels = [];

    // Original solution
    // for(var i = 0; i < fruit.length; i++){
    //     var currentFruit = fruit[i];
    //     if(currentFruit.indexOf('a') > -1 || currentFruit.indexOf('A') > -1){
    //         currentFruit = currentFruit.split('A').join('');
    //         currentFruit = currentFruit.split('a').join('');
    //     }
    //     if (currentFruit.indexOf('e') > -1 || currentFruit.indexOf('E') > -1){
    //         currentFruit = currentFruit.split('E').join('');
    //         currentFruit = currentFruit.split('e').join('');
    //     }
    //     if (currentFruit.indexOf('i') > -1 || currentFruit.indexOf('I') > -1){
    //         currentFruit = currentFruit.split('I').join('');
    //         currentFruit = currentFruit.split('i').join('');
    //     }
    //     if (currentFruit.indexOf('o') > -1 || currentFruit.indexOf('O') > -1){
    //         currentFruit = currentFruit.split('O').join('');
    //         currentFruit = currentFruit.split('o').join('');
    //     }
    //     if (currentFruit.indexOf('u') > -1 || currentFruit.indexOf('U') > -1){
    //         currentFruit = currentFruit.split('U').join('');
    //         currentFruit = currentFruit.split('u').join('');
    //     }
    //     fruitNoVowels.push(currentFruit)
    // }

    // // Solution 2
    // for(var i = 0; i < fruit.length; i++){
    //     var currentFruit = fruit[i];
    //     // One if
    //     if(currentFruit.indexOf('a') > -1 || currentFruit.indexOf('A') > -1 ||
    //     currentFruit.indexOf('e') > -1 || currentFruit.indexOf('E') > -1 ||
    //     currentFruit.indexOf('i') > -1 || currentFruit.indexOf('I') > -1 ||
    //     currentFruit.indexOf('o') > -1 || currentFruit.indexOf('O') > -1 ||
    //     currentFruit.indexOf('u') > -1 || currentFruit.indexOf('U') > -1
    //     ){
    //         currentFruit = currentFruit.split('A').join('');
    //         currentFruit = currentFruit.split('a').join('');
    //         currentFruit = currentFruit.split('E').join('');
    //         currentFruit = currentFruit.split('e').join('');
    //         currentFruit = currentFruit.split('I').join('');
    //         currentFruit = currentFruit.split('i').join('');
    //         currentFruit = currentFruit.split('O').join('');
    //         currentFruit = currentFruit.split('o').join('');
    //         currentFruit = currentFruit.split('U').join('');
    //         currentFruit = currentFruit.split('u').join('');
    //     }
    //     fruitNoVowels.push(currentFruit)
    // }

    // // Solution 3
    // for(var i = 0; i < fruit.length; i++){
    //     var currentFruit = fruit[i].toLowerCase();
    //     // One if
    //     if(currentFruit.indexOf('a') > -1 || currentFruit.indexOf('A') > -1 ||
    //     currentFruit.indexOf('e') > -1 || currentFruit.indexOf('E') > -1 ||
    //     currentFruit.indexOf('i') > -1 || currentFruit.indexOf('I') > -1 ||
    //     currentFruit.indexOf('o') > -1 || currentFruit.indexOf('O') > -1 ||
    //     currentFruit.indexOf('u') > -1 || currentFruit.indexOf('U') > -1){
    //         currentFruit = currentFruit.split('A').join('').split('a').join('').split('E').join('').split('e').join('').split('I').join('').split('i').join('').split('O').join('').split('o').join('').split('U').join('').split('u').join('');
    //     }
    //     fruitNoVowels.push(currentFruit);
    // }

    // Final Solution
    // Declare a variable called fruit. Set it equal to an array of strings. 
    var fruit = ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];

    // Declare a variable which will be our edited array. This variable starts as an empty array.
    var fruitNoVowels = [];

    // Iterate over the fruit array. Starting at the first index and going until the last. 
    for(var i = 0; i < fruit.length; i++){
        // create a variable that is equal to the lowercase version of the current fruit
        var currentFruit = fruit[i].toLowerCase();
        // create a variable, which is an array, that holds all of the vowel values
        var vowels = ['a','e','i','o','u'];
        // iterate through the vowel array
        for (var index = 0; index < vowels.length; index++) {
            // create a variable that is equal to the current vowel
            const currentVowel = vowels[index];
            // if our current fruit has a vowel in it execute what's inside the curly brackets
            if(currentFruit.indexOf( currentVowel ) > -1){
                //set current fruit to currentfruit minus the vowels by using the split and join methods.
                currentFruit = currentFruit.split(currentVowel).join('');
            }
        }
        // insert our current fruit into our new array which was declared prior to the loop (fruitNoVowels) 
        fruitNoVowels.push(currentFruit);
    }
    // print our new, filled in, array to the CLI
    console.log("Q4:" , fruitNoVowels);
    
// Q5: Very Hard:
    //Optional 
    // Loop over the following array and log to the CLI each word without any vowels UNLESS the vowel is the first letter of the word
    //      - ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
    //      - Output: ['Appl', 'Bnn', 'Orng', 'Pch', 'Strwbrry', 'Plm'];
// var fruit = ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
// var fruitNoVowels = [];

    // Solution
    for(var i = 0; i < fruit.length; i++){
        var currentFruit = fruit[i].toLowerCase();
        var vowels = ['a','e','i','o','u'];
        for (var index = 0; index < vowels.length; index++) {
            const currentVowel = vowels[index];
            // NEXT LINE IS THE DIFFERENCE FOR THE TWO PROBLEMS
            // Start changing vowels after the first letter, 0, not at -1
            // if our current fruit has a vowel after the first letter execute what's inside the curly brackets
            if(currentFruit.indexOf( currentVowel ) > 0){
                currentFruit = currentFruit.split(currentVowel).join('');
            }
        }    
        fruitNoVowels.push(currentFruit);
    }
    console.log(fruitNoVowels);