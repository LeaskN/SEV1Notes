// loops or conditionals (level 0-2: focus on picking ONE or the other)

// level 0
// loop warmup
    // create a function which iterates over an array of strings 
    // the function returns a new array of captalized strings
    // let arr = ['one', 'two', 'three', 'four'];

    // function allCaps(param){
    //     let newArr = [];

    //     for (let i = 0; i < param.length; i++) {
    //         let placeholder = param[i].toUpperCase();
    //         newArr.push(placeholder);
    //     }

    //     return newArr;
    // }

    // console.log(allCaps(arr));

// conditional warmup
    // create a function which takes in a number 
    // the function returns 'even' if the number is even and 'odd' if its odd

    // function evenOrOdd(param){
    //     if( param % 2 === 0){
    //         return 'even';
    //     } else if ( param % 2 === 1 ) {
    //         return 'odd';
    //     }
    // }

    // console.log(evenOrOdd(3));
    // console.log(evenOrOdd(2));
    // console.log(evenOrOdd(7));
    // console.log(evenOrOdd(11));

// level 1
    // Q1:
        // create a function which takes in a string 
        // the function returns even if the string has an even amount of characters
        // otherwise it returns odd
    
    // let str = 'Hey, how are you?';

    // function getStr(param){
    //     if(param.length % 2 === 0){
    //         return 'even';
    //     } else {
    //         return 'odd';
    //     }
    // }

    // console.log(getStr(str));

    // Q2: 
        // create a function which takes in an array
        // the function returns a new array with every other element in the array

    // function everyOther(arr){
    //     let newArr = [];

    //     for(let i = 0; i < arr.length; i+=2){
    //         newArr.push(arr[i]);
    //     }

    //     return newArr;
    // }

    // console.log(everyOther([0,1,2,3,4,5,6]));

    // Q3:
        // create a function which takes in an array 
        // the function returns the first element with the character 'i';

        // let names = ['hey', 'now', 'how', 'sink', 'tower', 'pink'];

        // function firstEl(arr){
        //     let iElement = [];

        //     for(let i = 0; i < arr.length; i++){
        //         let element = arr[i];

        //         if(element.indexOf('i') > -1){
        //             iElement.push(element);
        //         }
        //     }

        //     return iElement[0];
        // }

        // console.log(firstEl(names));

// level 2:
    // Q1:
        // create a function which takes in two numbers
        // it returns 'That was divisible!' if the first number is divisble by the second

        // let numbers = [16, 4];

        // function divNumber(param){
        //     let num1 = param[0];
        //     let num2 = param[1];

        //     if( num1 % num2 === 0 ){
        //         return 'That was divisible!';
        //     } else {
        //         return "that wasn't divisible";
        //     }
        // }

        // console.log(divNumber(numbers));

    // Q2:
        // create a function which takes in an array and a string
        // it returns the index if the string exists within the array
        // it returns 'not here' if the array doesn't contain the string

        // let arrOfStr = ['Blue', 'Yellow', 'Pink'];
        // let color1 = 'Pink';
        // let color2 = 'Blue';
        // let color3 = 'White';
        
        // function doesExist(arrParam, strParam){
        //     if( arrParam.indexOf(strParam) > -1 ){
        //         return arrParam.indexOf(strParam);
        //     } else {
        //         return 'not here';
        //     }
        // }

        // console.log(doesExist(arrOfStr, color1)); // 2
        // console.log(doesExist(arrOfStr, color2)); // 0
        // console.log(doesExist(arrOfStr, color3)); // 'not here'

// level 3:
    // Q1:
        // create a function which searches a string for any elements within an array
        // the function returns an array of elements that do exist in the string
        // for example:
            // input ['abc', 'def', 'llo', ' ', 'o'] & "Hello World" 
            // output: ['llo', ' ', 'o'];
        
        // let arr = ['abc', 'def', 'llo', ' ', 'o'];
        // let str = "Hello World";

        // function simElement(paramArr, paramStr){
        //     let cntr = [];

        //     for(let i = 0; i < paramArr.length; i++){
        //         let element = paramArr[i];

        //         if( paramStr.indexOf(element) > -1 ){
        //             cntr.push(paramArr[i]);
        //         }
        //     }

        //     return cntr;
        // }

        // console.log(simElement(arr, str));


    // Q2: 
        // create a function which takes in two arrays
        // the function will return a new array of any common elements

        let arr1 = ['abc', 'def', 'llo', 'o', true, 3, '123', undefined, null, NaN];
        // let arr2 = ['123', '789', 'llo', 'o', true, 3, undefined, NaN];

        // function simElement(param1, param2){
        //     let cntr = [];

        //     for(let i = 0; i < param1.length; i++){
        //         let element = param1[i];

        //         if( param2.indexOf(element) > -1 ){
        //             cntr.push(param1[i]);
        //         }
        //     }

        //     return cntr;
        // }

        // console.log(simElement(arr1, arr2));