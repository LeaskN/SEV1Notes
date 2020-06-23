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
            // console.log(sentence);
        // reduce an object to a single array (NOT COMMON & VERY COMPLEX)
            // no example, just head to Google. 


    // practice
        // Given an array of arrays reduce it to one array. 
            // input: [['item1', 'item2'],[true],[1]];
            // output: ['item1', 'item2', true, 1];
            let pracArr = [['item1', 'item2'],[true],[1]];
            let flatPracArr = pracArr.reduce((newArr, currentEle) => newArr.concat(currentEle));
            // console.log(pracArr[0]);
            // console.log(flatPracArr[0]);
        // Given an array of numbers reduce it to a total plus an additional 50. 
            let nums2 = [1, 2, 30, 5];
            let totalVal2 = nums2.reduce((total, num) => total + num, 50);
            // console.log(totalVal2)
        // Given the following list of objects reduce all populations to one.
            let countries = [
                {USA: 300000000},
                {UK: 66000000},
                {India: 1300000000},
            ]
            let oneObj = countries.reduce((acc, ele) => {return {...acc, ...ele}});
            let totalPop = Object.values(oneObj).reduce((acc, val) => acc + val);

        // Given the following list of objects reduce all populations to one.
            // let countries = [
            //     {name: 'USA', pop: 300000000},
            //     {name: 'UK', pop: 66000000},
            //     {name: 'India',pop: 1300000000},
            // ]
            // let totalPop = countries.reduce((total, ele) => total + ele.pop, 0);
            // console.log(totalPop);

// Sort
    // returns the original array but sorted 

    // Examples:
        // sort an array of strings alphabetically
            let arrOfStr = ['dog', 'doe', 'cat', 'bat', 'rat'];
            // console.log(arrOfStr.sort());

        // sort an array of numbers by first digit, then second, etc...
            let arrOfNums = [0, 99, 1, 34, -144, -51, -13, 0, 1, 4,12312, 51212, -1424211];
            let sortedNums = () => arrOfNums.sort();
            // console.time('sortedNums');
            // console.log(sortedNums(arrOfNums));
            // console.timeEnd('sortedNums');

        // sort an array of numbers by ACTUAL size (this is what we generally expect as humans)
            let arrOfNums2 = [0, 99, 123, 51, 2, 3, -1, 01, 3, -3, -3000, -1000];
            // console.log(arrOfNums2.sort((a, b) => a - b)); // (Potentially super inefficient)

        // sort an array of objects (based on numeric Key-Value pairs)
            let arrOfObjs = [
                {name: 'Mike', age: 39},
                {name: 'Sammi', age: 16},
                {name: 'Shawn', age: 15},
                {name: 'Sharice', age: 20},
            ];

            // console.log(arrOfObjs.sort((person1, person2) => person1.age - person2.age))
            
        // sort an array of objects (based on non-numeric Key-Value pairs)
            // very complex, look-up if needed

// Map
    // returns a new array populated with the function results
    
    // examples: (Impossible to cover them all as there are so many possible scenareos)
        // Duplicated all numeric values in an array
            let doubled = [2,4,6,8].map(n => n * 2);
            console.log(doubled);

        // Remove last letter of all string in an array
            let strings4 = ['Hello', 'Goodbye', 'Goodmorning'];
            let shortStrings = strings4.map(str => str.slice(0, -1))
            console.log(shortStrings);

        // Reverse all strings in an array
            let strings5 = ['Hello', 'Goodbye', 'Goodmorning'];
            let reversedStrings = strings5.map(str => str.split('').reverse().join(''));
            console.log(reversedStrings);
            // before we had .map() this would look like:
                let reversedStringsOld = (param) => {
                    let acc = [];

                    for(let i = 0; i < param.length; i++){
                        acc.push(param[i].split('').reverse().join(''));
                    }
                    return acc;
                }
                console.log(reversedStringsOld(strings5));
            
        // More complex syntatically
            // add one to every other element
            let numbers = [-1, 4, 7, 0, -3, 6];
            let newNumbers = numbers.map((num, index) => {
                if(index % 2){
                    return num + 1
                } else {
                    return num + 0;
                }    
            })
            
            console.log(newNumbers);
        

