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

            // Given the array on the following line. 
            // Filter all guests for only the ones over 21. 
            let guests = [
                {name: 'Vernon', age: 40},
                {name: 'Petunia', age: 44},
                {name: 'Hagrid', age: 21},
                {name: 'Harry', age: 11},
                {name: 'Dudley', age: 12}
            ];

            let over21 = guests.filter(ele => ele.age >= 21);
            // console.log(over21);  

// Reduce
    // returns a single value
    // for example you can:
        // reduce an array of numbers to one number (the total)
        // reduce multiple arrays into one array
        // reduce multiple strings into one string

    // examples:
        // given an array of numbers reduce it to the total (COMMON)
            let nums = [2,3,4,5];
            let totalVal = nums.reduce((total, num) => total + num);
            // console.log(totalVal);
        // reduce multiple arrays into one array ("flatten them") (VERY COMMON)
            let arrs = [['thing1', 'thing2', 'thing3'],[1,2,3],[true, false, true]];
            let oneArr = arrs.reduce((newArr, arr) => newArr.concat(arr));
            // console.log(oneArr);
        // reduce multiple strings into one string (NOT COMMON PEOPLE USE JOIN INSTEAD)
            let strings = ['Hello', 'this', 'should', 'be', 'a', 'sentence', '.']
            let sentence = strings.reduce((newString, currentString) => newString + ' ' + currentString);
            console.log(sentence);
        // reduce an object to a single array (NOT COMMON & VERY COMPLEX)
            // no example, just head to Google. 

    // Break until 3:10
    // 5 mins for 1st 2 
    // 10 mins per q

    // practice
        // Given an array of arrays reduce it to one array. 
            // input: [[],[],[]]
            // output:
        // Given an array of numbers reduce it to a total plus an additional 50. 
        // Given the following list of objects reduce all populations to one.
            let countries = [
                {USA: 300000000},
                {UK: 66000000},
                {India:1300000000},
            ]
        // Given an array of numbers, add all the even ones
        // Given an array of test scores(numbers), get the average score using reduce



// Map

// Sort

