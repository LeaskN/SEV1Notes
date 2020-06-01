// Given an array of integers your solution should find the smallest integer.
// For example:
    // Given [34, 15, 88, 2] your solution will return 2
    // Given [34, -345, -1, 100] your solution will return -345
    // You can assume, for the purpose of this kata, that the supplied array will not be empty.

function smallestNumAcc(param){
    let smallest = param[0];

    for(let i = 0; i < param.length; i++){
        let element = param[i];
        
        if( element < smallest){
            smallest = element;
        }
    }

    return smallest;
}

// console.log(smallestNumAcc([34, 15, 88, 2]));
// console.log(smallestNumAcc([34, -345, -1, 100]));

// if an element has a length greater than 0 add to the count
function countAcc(param){
    let count = 0;

    for (let i = 0; i < param.length; i++) {
        let element = param[i];

        if( element.length > 0 ){
            count++;
        }
    }

    return count;
}

// console.log(countAcc(['Hello','','Test','World']));

//get the longest string in an array
function oneStringAcc(param){
    let longestStr = '';
    
    for (let i = 0; i < param.length; i++) {
        let element = param[i];
        
        //compare the length of the current element to the length of the current longest string
        if(element.length > longestStr.length){
            longestStr = element;
        }
    }

    return longestStr;
}

// console.log(oneStringAcc(['Hi','','Test', 'World', 'A']));

// gathers any words that are fully capitalized
function arrayAcc(param){
    let fullyCapWords = [];
    
    for (let i = 0; i < param.length; i++) {
        let element = param[i];
        let upperEle = element.toUpperCase();
        
        if(element === upperEle){
            fullyCapWords.push(element);
        }

    }

    return fullyCapWords;
}

// console.log(arrayAcc(['HI','jello','tEst','world', 'GOODMORNING']));

// given an array of strings gather all the strings which contain the letter j
let names = ['Peter', 'Mike', 'Julie', 'Benjamin']

function manyStringsAcc(param){
    let allStrings = [];

    for (let i = 0; i < param.length; i++) {
        let element = param[i];

        if( element.indexOf('j') > -1 || element.indexOf('J') > -1 ){
            allStrings.push(element);
        }   
    }

    return allStrings;
}

// console.log(manyStringsAcc(names));

// given an array of strings containg a first and last name, return an array of objects containing first & last names as seperate key-value pairs

let fullNames1 = ['Ronald Vilorio', 'Spencer Cannon', 'Deboraht Neal', 'Nat Martinez']; // declare our array of names

function objAcc(param){
    let allPeople = [];

    for (let i = 0; i < param.length; i++) {
        let element = param[i];
        let names = element.split(' ');
        let obj = {
            first: names[0],
            last: names[1],
        };

        allPeople.push(obj);
    }

    return allPeople;
}

// console.log(objAcc(fullNames1));


// create a function which returns a value if it exists inside both given values
// let str1 = "World";
// let str2 = "Hello World";

// function insideBoth(param1, param2){
//     if( param2.indexOf(param1) > -1 ){
//         return param1;
//     } else {
//         return "SubString doesn't exist";
//     }
// }

// console.log(insideBoth(str1, str2));

// function hasCapital(param){
//     let fullyCapWords = [];
//     let wordsWithACap = [];
//     let allArrs = {}
    
//     for (let i = 0; i < param.length; i++) {
//         let element = param[i];
//         let upperEle = element.toUpperCase();
//         let lowerEle = element.toLowerCase();
        
//         if(element === upperEle){
//             fullyCapWords.push(element);
//             wordsWithACap.push(element);
//         } else if (element !== lowerEle) {
//             wordsWithACap.push(element);
//         }

//     }

//     allArrs.fullyCapWords = fullyCapWords;
//     allArrs.wordsWithACap = wordsWithACap;

//     return allArrs;
// }