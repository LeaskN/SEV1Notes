// Basic Accumiator Pattern

// Using a loop count every time we iterate over the loop

    // declare a function, that takes in a number, giving it a name, and value
    // function loopCounter(n){
    //     // declare a variable so we can hold the total value
    //     var totalValue = 0;
    //     // declare a for loop
    //     for(var i = 0; i < n; i++){
    //         // add one to the total value;
    //         totalValue = totalValue + 1;
    //     }
    //     // return the total value
    //     return totalValue;
    // }
    // console.log(loopCounter(1000));

//Example 2:
// Create a function that takes in a array and counts every item in the array

var fruits = ['apple','banana','orange','pineapple','kiwi', 'pear'];
var newFruits = ['lime', 'lemon'];
    // declare a function that takes in any array
        function arrayFruits(foods){
            // declare a variable called totalFruits
            var totalFruits = 0;
            // declare a for loop -> starting at the zero index go the length of the entire array and increase by 1
            for (var i = 0; i < foods.length; i++){
                // add one to the total count  
                totalFruits = totalFruits + 1;
            }
            // return totalFruits
            return totalFruits;
        }

        console.log(arrayFruits(fruits));
        console.log(arrayFruits(newFruits));
        




// Given an array of strings write a function that returns any items that are longer than 4 letters
// Example array: var words = ['Hello', 'World', 'Pasta', Pizza', 'Dog', 'Cat', 'Fish', 'Jump']

// Given a string write a function that removes every other letter

