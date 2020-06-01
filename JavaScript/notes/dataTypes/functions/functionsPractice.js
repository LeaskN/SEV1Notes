// create a function that adds two numbers together

    // Solution 1:
        // console.logging inside the function
        // function addNumbers(x, y){
        //     console.log(x + y);
        // }

        // addNumbers(3, 4);
    
    // Solution 2:

        // function addNumbers(x, y){
        //     return (x + y);
        // }

        // console.log(addNumbers(3,4));

// create a function which takes in 3 numbers and returns the product of all three
    // Solution 1:
        // function products(num1, num2, num3){
        //     var solution = num1 * num2 * num3;
        //     return solution;
        // }

        // console.log(products(2, 3, 4))

// create a function that takes in an array of names and says hello to each
    // Solution 1:
        // var people1 = ['Nat', 'Geo', 'Solomon', 'Patrick' ];
        // var people2 = ['Debbie', 'Mitsie', 'Kaya', 'Desmond' ];
        // var people3 = ['Ronald', 'Spencer' ]

        // function sayHello(arr){
            
        //     for(var i = 0; i < arr.length; i++){
        //         var person = arr[i];
        //         console.log("Hello " + person + "!");
        //     }
            
        // }

        // sayHello(people1);
        // sayHello(people2);
        // sayHello(people3);

    // CodeWars 5.11.20
        // Even or Odd       
        // solution 1

            // function even_or_odd(number) {
            //     if( number % 2 === 0 || number % 2 === -0 ){
            //         return 'Even';
            //     } else if( number % 2 === 1 || number % 2 === -1 ){
            //         return 'Odd';
            //     }
            //     return number;
            // }

        // solution 2
        //     function even_or_odd(number) {
        //         if( number % 2 == 0 ){
        //             return 'Even';
        //         } else {
        //             return 'Odd';
        //         }
        //     }


        // console.log(even_or_odd(-3));
        // console.log(even_or_odd(4));
        // console.log(even_or_odd(5));
        // console.log(even_or_odd(6));
        // console.log(even_or_odd(7));
//remove first and last char
// function removeChar(str){
//     var strLength = str.length;
//     return str.slice(1,strLength-1);
// };
           
// console.log(removeChar('eloquent'));
// console.log(removeChar('country'));
// console.log(removeChar('person'));
// console.log(removeChar('place'));

// function opposite(number) {
//     return -number;
// }

// console.log(opposite(-1));
// console.log(opposite(3));
// console.log(opposite(20));
// console.log(opposite(0));

// function makeNegative(num) {
//     if(num > 0){
//         return -num;
//     } else {
//         return num;
//     }
// }

// console.log(makeNegative(-1));
// console.log(makeNegative(3));
// console.log(makeNegative(20));
// console.log(makeNegative(0));
// console.log(makeNegative(-9));

// +
// -
// *
// /
// %
// Math.max(0,1,2,3,4,5,6);// 6
// Math.min(0,1,2,3,4); // 0
// Math.floor(9.99999999); //9
// Math.ceil(9.000000000001); //10
// Math.pow(2, 3); // 8
// Math.abs(-11);
// Math.sqrt(144);//12
// Math.random(); // gives a random decible between 0 and 1
// Math.ceil(Math.random() * 10); // gives a random whole number between 0 and 10


// function boolToWord( bool ){
//     if( bool ){
//         return 'Yes';
//     } else {
//         return 'No';
//     }
// }

// console.log(boolToWord(true));
// console.log(boolToWord(false));