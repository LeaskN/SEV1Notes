// Write a one-liner function that reverses a given string
let str1 = 'Hello World!';

function reverseStr(strParam){
    return strParam.split('').reverse().join('')
}

console.log(reverseStr(str1));