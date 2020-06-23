// HOMEWORK:

    // Reduce: Use reduce for the following questions
// level 0:
    // Given an array of numbers, add all of them together
    let nums = [20, 40, 60, 80, -65];
    let addNums = nums.reduce((num, total) => num + total );
    // console.log(addNums);
// level 1: 
    // Given an array of numbers, subtract them all from 100
    let nums2 = [12, 23, 33, 44, 55, 66];
    let sub100 = nums2.reduce((num, total) => num + total, -100);
    // console.log(sub100);
// level 2:
    // Given an array of numbers, add all the even ones
    let nums3 = [1,2,3,4,5,6,7,8];
    // let addEven = nums3.filter(num => (num % 2 === 0)).reduce((n, total) => n + total);
    let addEven = nums3.reduce((total, n) => { 
        if(n % 2 === 0){ 
            return total + n;
        } else {
            return total;
        }
    }, 0);
    // console.log(addEven);
// level 3:
    // Given an array of strings, reduce all elements to one string
    let strArr = ["Hello", "my", "name"];
    let oneString = strArr.reduce((ele, string) => ele + ' ' + string);
    // console.log(oneString);
// level 4:
    // Given an array of test scores(numbers) use reduce to get the average score 
    let scores = [88, 55, 98, 44, 77, 60, 70];
    let totalScore = scores.reduce((num, total) => total + num)/scores.length
    // console.log(totalScore);
// level 5: 
    // Given an array of arrays all only containing strings (given below), reduce all elements to one string
    let arrOfArrOfStr = [[['Peter','Piper']],['Picked','A'],[[[['Pickled', 'Pepper']]]]]
    // let eleString = arrOfArrOfStr.reduce((finalArr, ele) => finalArr.concat(ele))
    let count = 0
    let flatArr = (param) => {
        count++;
        console.log(count)
        for (let i = 0; i < param.length; i++) {
            let ele = param[i];

            if ( Array.isArray(ele) ){ 
                param = param.reduce((finalArr, ele) => finalArr.concat(ele));

                return flatArr(param);
            }
        }
        
        param = param.reduce((finalArr, ele) => finalArr.concat(ele));
        return param;
    }

    // console.log(flatArr(arrOfArrOfStr));

    // Filter: Use filter for the following questions
// level 0:
    // Given an array of strings remove any that are longer than 4 letters
    let four = ['smoke', 'drink', 'chill', 'drink', 'kill', 'bill'];
    let removeFour = four.filter(ele => ele.length <= 4)
    // console.log(removeFour);
// level 1: 
    // Given an array of numbers, remove any that are even
    let nums4 = [1,2,3,4,5,6,7.7];
    let oddNums = nums4.filter(ele => ele % 2 === 1 );
    // console.log(oddNums);
// level 2:
    // Given an array of numbers, add all the odd ones
    let nums5 = [1,2,3,4,5,6,7];
    let oddNums2 = nums5.filter(num => (num % 2 === 1)).reduce((num, total) => num + total); 

    // console.log(oddNums2);

// // level 3:
//     // Given an array of people (array given below), add all heights together
    let people = [
        {name: 'Sharmania', height: '130cm' },
        {name: 'Jessica', height: '160cm' },
        {name: 'Ali', height: '180cm' },
        {name: 'Hara', height: '170cm' },
    ]

    let totalHeight = (param) => {
        let heights = [];

        for (let i = 0; i < param.length; i++) {
            let element = param[i];
            heights.push(parseInt(element['height']));
        }

        return heights.reduce((height, total) => height + total);
    }
    console.log(totalHeight(people));

// // level 4:
//     // Given an array of students with test scores filter out any outliers, any scores that are more or less than 20 points from 75.
//     let people1 = [
//         { name: 'Paul', score: 40 }, 
//         { name: 'Darrel', score: 61 }, 
//         { name: 'Jay', score: 66 }, 
//         { name: 'Alexi', score: 70 }, 
//         { name: 'Niko', score: 81 }, 
//         { name: 'Benjamin', score: 92 }, 
//         { name: 'Xavier', score: 110 }, 
//     ]
//     // Output: [61, 66, 70, 81, 92]