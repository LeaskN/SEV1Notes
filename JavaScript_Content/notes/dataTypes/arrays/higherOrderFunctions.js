//Higher order functions:
    // Definition:
    // A higher order function is a function that takes a function as an argument, or returns a function. 

// Filter 
    // returns a new array based on if each value is true or false
        // Syntax:
            // Simple: 
            //     arr.filter(element => element.length !== 4);
            // // Single line WITH return
            //     arr.filter(element => { return element.length !== 4});
            // // Multiple line
            //     arr.filter(element => { 
            //         return element.length !== 4
            //     });


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
                let arr = ['tree', 'no', 'past', 'hungry'];
                let only4Letters = arr.filter( ele => ele.length === 4);
                // console.log(only4Letters);
            // given an array filter it to return only the objects or arrays
                let arr1 = [true, false, undefined, null, [1, 2, 3, 4], {name: 'car', wheels:'4'}];
                let newArr = arr1.filter(ele => typeof ele === 'object');
                // console.log(newArr);
            // given an array filter it to return words that only contain one of the following letters a, e, i, o, or u
                let arr2 = ['hey', 'how', 'are', 'you', 'a', 'by', 1, undefined, null, true]; 
                let newArr2 = arr2.filter(ele => 
                    (typeof ele !== 'number' &&
                    typeof ele !== 'object' && 
                    typeof ele !== 'undefined' &&
                    typeof ele !== 'boolean')
                    && (ele.indexOf('a') > -1 ||
                    ele.indexOf('e') > -1 ||
                    ele.indexOf('i') > -1 ||
                    ele.indexOf('o') > -1 ||
                    ele.indexOf('u') > -1)
                );

                // console.log(newArr2);

            // Given the array on the following line. Filter all guests for only the ones over 21. 
            let guests = [
                {name: 'Vernon', age: 40},
                {name: 'Petunia', age: 44},
                {name: 'Harry', age: 11},
                {name: 'Dudley', age: 12}
            ]


        

// Reduce

// Map

// Sort

