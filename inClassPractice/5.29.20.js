// Given an array of integers your solution should find the smallest integer.
// For example:
    // Given [34, 15, 88, 2] your solution will return 2
    // Given [34, -345, -1, 100] your solution will return -345
    // You can assume, for the purpose of this kata, that the supplied array will not be empty.

function smallestInt(param){
    let smallest = param[0];

    for(let i = 0; i < param.length; i++){
        let element = param[i];
        
        if( element < smallest){
            smallest = element;
        }
    }

    return smallest;
}

// console.log(smallestInt([34, 15, 88, 2]));
// console.log(smallestInt([34, -345, -1, 100]));


function smallestNumAcc(param){
    let smallest = param[0];

    for (let i = 0; i < param.length; i++) {
        let element = param[i];

        if(element < smallest){
            smallest = element; // replace smallest and only hold on to one number
        }
        
    }

    return smallest;
}

// console.log(smallestNumAcc([34, -345, -1, 100]));

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

// console.log(oneStringAcc(['Hi','','Test','World']));

// gathers any words that are capitalized
function arrayAcc(param){
    let fullyCapWords = [];
    
    for (let i = 0; i < param.length; i++) {
        let element = param[i];

        
        if(element === upperEle){
            fullyCapWords.push(element);
        }

    }

    return allArrs;
}

console.log(arrayAcc(['HI','jello','tEst','world', 'GOODMORNING']));

function manyStringsAcc(param){
    
    for (let i = 0; i < param.length; i++) {
        let element = param[i];
        
    }
}

function objAcc(param){

    for (let i = 0; i < param.length; i++) {
        let element = param[i];
        
    }
}

function insideBoth(param1, param2){

}

function arrayAcc(param){
    let fullyCapWords = [];
    let wordsWithACap = [];
    let allArrs = {}
    
    for (let i = 0; i < param.length; i++) {
        let element = param[i];
        let upperEle = element.toUpperCase();
        let lowerEle = element.toLowerCase();
        
        if(element === upperEle){
            fullyCapWords.push(element);
            wordsWithACap.push(element);
        } else if (element !== lowerEle) {
            wordsWithACap.push(element);
        }

    }

    allArrs.fullyCapWords = fullyCapWords;
    allArrs.wordsWithACap = wordsWithACap;

    return allArrs;
}