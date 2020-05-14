// 5.14.20
// Example:

    // ONLY using comments write a function that turns an array into a string

    // Q1 Solution:

    // Declare a function that takes in an array

    // The function will join the array into one long string using spaces

// Q1:

    // Only using comments write a function that gets the first item in an array
        // To extract an item from an array use: arr.shift()
        // var arr = ['zero',1,2,3];

        // function getFirst(array){
        //     var itemOne = array.shift();
        //     return itemOne;
        // }

        // console.log(getFirst(arr));

        // Declare a function that takes in an array
        // The function will index the array and grab the first item

        // var arr = ['zero',1,2,3];
        // function getFirst(array){
        //     var firstItem = array[0];
        //     return firstItem;
        // }

        // console.log(getFirst(arr));


        // Pop deletes the last item in an array

        // var arr = ['zero',1,2,3];
        // function getFirst(array){
        //     for (let i = 0; i < array.length + 1; i++) {
        //         array.pop();
        //     }
        //     return array;
        // }

        // console.log(getFirst(arr));

        // Create a variable arr with square brackets 
        // Get the first item in the array by stating the array and its index bracket of zero

        // var arr = ['zero', 'one', 'two']

        // function getFirst(array){
        //     return array[0];
        // }

        // console.log(getFirst(arr));

// Q2:

    // Given a string remove every other letter

        // To remove every other letter in a string you'd need to use a loop
        // var str = 'Hello World';

        // function rmvEvryOthr(string){
        //     var finalString = '';

        //     for(var i = 0; i < string.length; i+=2){
        //         var currentLetter = string[i];

        //         finalString = finalString + currentLetter;

        //     }

        //     return finalString;
        // }

        // console.log(rmvEvryOthr(str));


        // Declare a function that turns a string into a for loop
        // The function will index the letter and if true do one thing, else do something else 
        // var str = 'Hello World';

        //NOT  A WORKING SOLUTION, USE SOMETHING OTHER THAN REPLACE
        // function rmvEvryOthr(string){

        //     for (var i = 0; i < string.length; i++) {
        //         var letter = string[i];

        //         if( i % 2 === 0 ){
        //             string = string.replace(letter, '');
        //         }        
        //         console.log(string);       
        //     }
        //     return string;
        // }

        // Use the loop method to remove every other letter in the string
        // Loop iterates over every item and can remove them
        // var str = 'Hello World';

        // function rmvEvryOthr(string){
        //     var finalString = '';

        //     for(var i = 0; i < string.length; i++){
        //         var currentLetter = string[i];

        //         if(i % 2 === 0){
        //             finalString = finalString + currentLetter;
        //         }

        //     }

        //     return finalString;
        // }

        // console.log(rmvEvryOthr(str))

// Q3:

    // Given a number minus 5 from it and divide it by 10

        // assign variables x and y 
        // 5 could be x and 10 could be y 
        // var x = 5;
        // var y = 10;
        
        // function basicMath(n){
        //     return (n - x) / y
        // }

        // console.log(basicMath(25))
        // console.log(basicMath(35))
        // console.log(basicMath(20))

        // assign parameters n, x and y 
        // 5 could be x and 10 could be y 
        
        // function basicMath(n, x, y){
        //     return (n - x) / y
        // }

        // console.log(basicMath(25, 5, 10));
        // console.log(basicMath(35, 5, 10));
        // console.log(basicMath(20, 5, 10));

        // set a variable and minus 5 from it and divide it by 10

        // function basicMath(n){
        //     return (n - 5) / 10;
        // }

        // console.log(basicMath(25))
        // console.log(basicMath(35))
        // console.log(basicMath(20))