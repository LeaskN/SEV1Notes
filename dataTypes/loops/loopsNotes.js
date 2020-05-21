//Loops: 
//      - Loops are handy in scripting languages such as JavaScript 
        // Definition1: A loop iterates, or counts through, items and executes code for each item until a certain condition is met.
        // Definition2: JavaScript loops are used to repeatedly run a block of code - until a certain condition is met.

//  - Syntax:
//      for(starting point; max value; increase value){
//          do something repative here
//      }
//      Example:
//          for(let index = 0; index < 10; index++){
//              console.log(index) //This will happen 10 times because of the 10 on the previous line.
//          }

// Shorthand to increase a variable (i) by a specific number
                // longhand
                    // i = i + 1
                // shorthand:
                    // i++ // increase i by 1
                    // i-- // decrease i by 1
                    // i += 1 // increase i by 1
                    // i += 2 // increase i by 2 etc...
                    // i -= 1 // decrease i by 1
                    // i -= 2 // decrease i by 2 etc...
                // note: 
                    // usually used inside a for loop

//  - Break keyword:
//      - Break can be used to exit the loop
//      Example
    //     var x = 5;
    //     var y = 0;
    //     for (var index = 0; index < 10; index++){
    //        y = y + 1
    //        if(y === x){
    //            console.log('breaking the loop!');
    //            //break ends a loop
    //            break;
    //        }
    //    }
//  - Nested Loops:
//      - Are loops that contain other loops
//          - DANGEROUS because it can decrease your code efficiency by magnitudes
        // For example:
            // A loop that counts over an array of arrays both of unknown size

// In-class examples & practice:

// Section 1:
    // Iterating through an array

    // var nameArr = ['Cathy-Montacella', 'Deboraht-Neal', 'Desmond-HB', 'Solomon-West', 'Spencer-Cannon', 'Nat-Martinez' ];
    // var fixedNames = [];
    // // // Iterate through the nameArr and remove the dash
    // for(var index = 0; index < nameArr.length; index++){
    //     var fullName = nameArr[index];
    //     var twoNames = fullName.replace('-', ' ')
    //     fixedNames.push(twoNames)
    // }
    // console.log(fixedNames);

// Section 2:
    //Iterating through a string
    // var str = "Hello World!";
    // var newStr = '';
    // var lCount = 0;

    // for(var index = 0; index < str.length; index++){
    //     var letter = str[index];
    //     if( letter === 'l' ){
    //         lCount = lCount+1;
    //         newStr = newStr + letter.toUpperCase();
    //     } else {
    //         newStr = newStr + letter;
    //     }
    // }
    // console.log(newStr);
    // console.log(lCount);

    // Create a function that contains a loop that greets us 5 times

        // function greet(){
        //     for(var i = 0; i < 5; i++){
        //         console.log('Hi!')
        //     }
        // }
        // greet();

    // Create a function which loops up to a number and logs i to the console
        
        // function logger(number){
        //     for(let i = 0; i < number; i++){
        //         console.log(i)
        //     }
        // }

        // logger(20);

    // Looping over strings
        // Create a function which iterates over a string and logs the current letter to the console.
            
        //     let str = "Hello World!"
        //     function letterLogger(strParam){
        //         for(let i = 0; i < strParam.length; i++){
        //             console.log(strParam[i]);
        //         }
                
        //     }
        //     letterLogger(str);

        // Create a function which iterates over every other letter in a string and logs it to the console.

        //     let str = "Hello World!";

        //     function otherLetter(strParam){
        //         for(let i = 0; i < strParam.length; i +=2){
        //             console.log(strParam[i]);
        //         }
        //     }
        //     otherLetter(str);

        // Create a function which iterates over every letter, from the back, of a string and logs it to the console.

        //     let str = 'Hello World!';

        //     function reverseLetters(strParam){
        //         for(let i = strParam.length - 1; i >= 0; i--){
        //             console.log(strParam[i]);
        //         }
        //     }

        //     reverseLetters(str);
    
    // Looping over Arrays:
        // create a function which iterates over an array and logs the current index to the console

        // let arrOfName = ['Patrick', 'Debbie', 'Solomon', 'Spencer'];
        
        // function logIndexFromArr(arrParam){
        //     for(let i = 0; i < arrParam.length; i++){
        //         console.log(i);
        //     }
        // }
        // logIndexFromArr(arrOfName);

        // create a function which iterates over an array and logs the current element to the console

        // let arrOfName = ['Patrick', 'Debbie', 'Solomon', 'Spencer'];
        
        // function logEle(arrParam){
        //     for(let i = 0; i < arrParam.length; i++){
        //         console.log(arrParam[i]);
        //     }
        // }
        // logEle(arrOfName);

        // create a function which iterates over an array and logs every other element
        //  and logs 

        // var arrColors = ['Red', 'Blue', 'Pink', 'Silver', 'Orange', 'Gold', 'Purple', 'White', 'Black', 'Cyan'];

        // function everyOtherEle(arrParam){
        //     for(let i = 0; i < arrParam.length; i += 2){
        //         console.log(arrParam[i]);
        //     }
        // }

        // everyOtherEle(arrColors);


        // create a function which logs the first letter of each element in an array

        // var arrCars = ['BMW', 'Mercedes', 'Nissan', 'Honda', 'Ford', 'Jaguar', 'Porche'];

        // function firstLetterEle(arrParam){
        //     for(let i = 0; i < arrParam.length; i++){
        //         const currentCar = arrParam[i]; // BMW, then Mercedes, etc...
        //         // The next two lines do the same thing
        //         console.log(currentCar.slice(0,1)); 
        //         // console.log(currentCar[0]);
        //     }
        // }

        // firstLetterEle(arrCars);

        // create a function which logs the last letter of every other element, starting from the back of an array
            // declare a variable
            // give your variable a value of an array
            let bfastFoods = ['Eggs', 'Potatoes', 'Cereal', 'Apple', 'Coffee', 'Tea', 'Milk'];

            // create a function 
            // with a name
            // it takes in one parameter
            // function lastLetter(param){
            //     // iterate over our parameter
            //         // starting from the back
            //             // until the front
            //             // look at every other element
            //     for(let i = param.length - 1; i >= 0; i -= 2){
            //         // grab the specific element
            //         let currentEle = param[i];
            //         // grab the last letter of the element
            //             // the next two lines do the same thing
            //         // let letter = currentEle.slice(currentEle.length - 1, currentEle.length);
            //         let letter = currentEle.slice(-1);
            //         // log that letter
            //         console.log(letter);
            //     }
            // }     

            // lastLetter(bfastFoods);

            // Basic accumilator pattern example:
            // Write a function which iterates over an array and fills a new array with the middle letter of each element
            //  and fills a new array with the 
            let cartoons = ['Tom-&-Jerry', 'X-Men', 'Gundam-Wing', 'Hey-Arnold', 'Pokémon', 'Boondoks', 'Happy-Tree-Friends'];

            function midEleLet(paramArr){
                let allMidLet = [];
                
                for(let i = 0; i < paramArr.length; i++){
                    let currentEle = paramArr[i];
                    //look for middle letter
                    let middleLetterIndex = currentEle.length/2;
                    let middleLetter = currentEle.slice(middleLetterIndex, middleLetterIndex+1);

                    allMidLet.push(middleLetter);
                }
                return allMidLet;
            }
            console.log(midEleLet(cartoons));


// Section 3:
// Psudocode 
    // Psudocode is theorizing code and writing english instead
    // When you only write comments and 'fake code' instead of the real thing 

//Example:
//  Objective: 
//     - Iterate through the nameArr and remove the dash
//     - var nameArr = ['Cathy-Montacella', 'Deboraht-Neal', 'Desmond-HB', 'Solomon-West', 'Spencer-Cannon', 'Nat-Martinez' ];
//  PsudoCode Answer:

    //  create a new empty array to hold fixed words with spaces

    //create a loop and look at each unique item in the array
        // for each specific item
            // target the dash
            // remove the dash
            // add a space where the dash was
            // put the new word with the space into our new array
        
    //log the array to the CLI

// Real code answer:
    // var fixedNames = [];
    // for(var index = 0; index < nameArr.length; index++){
    //     var fullName = nameArr[index];
    //     var twoNames = fullName.replace('-', ' ')
    //     fixedNames.push(twoNames)
    // }
    // console.log(fixedNames);

// What is incrementation?
    // var num = 1;
    // The following lines do the same thing, increase num by 1
        // num = num + 1;
        // num += 1;
        // num++;
    // BIG Difference is (n + 1) vs (n = n + 1)


//How and why is the variable changing?

// var str = 'Hello';
// an example of returning the index value
// this is an example of how a loop thinks
// str[0] // H
// str[1] // e
// str[2] // l
// str[3] // l
// str[4] // 0
// str[5] // break

// Loop up to the number 100, increasing by 1
    // for (var i = 0; i < 6; i+=1) {

    //     console.log(i);
        
    // }
// Nested Loop Practice
        // var arr = ['Hello', 'World', 'This', 'Is', 'Machine'];

        // for (var i = 0; i < arr.length; i++) {
        //     var word = arr[i];
            
        //     // console.log(i);
        //     console.log(word);

        //     //Hello
        //     for(var j = 0; j < word.length; j++){
        //         var letter = word[j];
        //         // console.log('   ' + j);
        //         console.log(word)
        //     }
            
        // }