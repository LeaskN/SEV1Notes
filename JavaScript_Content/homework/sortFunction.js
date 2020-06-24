console.time()
function sorter(param){
    let rejoin = false

    if (typeof param === 'string'){
        param = param.split('');
        rejoin = true;
    }

    for(let i = 0; i < param.length - 1; i++){
        for (let j = 0; j < param.length; j++) {
            let ele = param[j];
            let eleNext = param[j+1];

            if (ele > eleNext){
                param[j] = eleNext;
                param[j+1] = ele;
            }
        }
    }

    if(rejoin){
        return param.join('');
    } else {
        return param;
    }
}
// console.log(sorter([4, -1, 6, 1, 8, 2, 3, -1]));
// console.log(sorter('alphabet'));
// console.log(sorter(['One','Thing','Pass','Love','Learn','Soccer','Run','Bike']));
console.timeEnd()


// console.log([4, -1, 6, 1, 8, 2, 3, -1].sort(function(a, b){return a - b})); // ES5
// console.log([4, -1, 6, 1, 8, 2, 3, -1].sort((a, b) => a - b)); // ES6

// console.log(Math.min(...[4, -10, 6, 1, 8, 2, 3, -1]))

