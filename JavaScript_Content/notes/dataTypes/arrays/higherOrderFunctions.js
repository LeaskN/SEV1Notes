//Higher order functions:
    // Definition:
    // A higher order function is a function that takes a function as an argument, or returns a function. 

// Filter 
    // returns a new array based on if each value is true or false
        // Syntax:
            // Simple: 
                arr.filter(element => element.length !== 4);
            // Single line WITH return
                arr.filter(element => { return element.length !== 4});
            // Multiple line
                arr.filter(element => { 
                    return element.length !== 4
                });


        // example: remove all words that are 4 characters from an array or words

        // let words = ['thing', 'item', 'person', 'sun', 'gasp'];

        // let newArr = words.filter(word =>  word.length !== 4);

        // console.log(newArr);

        // let newArr = words.filter(word => {
        //     return word.length !== 4
        // });

        // console.log(newArr);

        // console.log(words);

        // examples:
            // given an array filter it to return all words that are 4 characters
            // given an array filter it to return only the objects or arrays
            // given an array filter it to return words that only contain the letter a or e

        

// Reduce

// Map

// Sort

