//Loops: 
//      - Loops are handy in scripting languages such as JavaScript 
//      - A loop iterates, or counts through, items and executes code for each item.
//  - Syntax:
//      for(starting point; max value; increase value){
//          do something repative here
//      }
//      Example:
//          for(index = 0; index < 10; index++){
//              console.log(index) //This will happen 10 times because of the 10 on the previous line.
//          }
//  - Break keyword:
//      - Break can be used to exit the loop
//      Example
//         var x = 5;
//         var y = 0;
//         for (var index = 0; index < 10; index++){
//            y = y + 1
//            if(y === x){
//                console.log('breaking the loop!');
//                //break ends a loop
//                break;
//            }
//        }
//  - Nested Loops:
//      - Are loops that contain other loops
//          - DANGEROUS because it can decrease your code efficiency by magnitudes

// In-class examples & practice:

// Section 1:
    // Iterating through an array

// var nameArr = ['Cathy-Montacella', 'Deboraht-Neal', 'Desmond-HB', 'Solomon-West', 'Spencer-Cannon', 'Nat-Martinez' ];
// var fixedNames = [];
// // Iterate through the nameArr and remove the dash
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
//     if( letter === 'l' && lCount < 2){
//         lCount = lCount+1;
//         newStr = newStr + letter.toUpperCase();
//     } else {
//         newStr = newStr + letter;
//     }
// }
// console.log(newStr);
// console.log(lCount);

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