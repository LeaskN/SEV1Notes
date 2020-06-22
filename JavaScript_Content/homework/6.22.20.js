// HOMEWORK:

    // Reduce: Use reduce for the following questions
// level 0:
    // Given an array of numbers, add all of them together
// level 1: 
    // Given an array of numbers, subtract them all from 100
// level 2:
    // Given an array of numbers, add all the even ones
// level 3:
    // Given an array of strings, reduce all elements to one string
// level 4:
    // Given an array of test scores(numbers) use reduce to get the average score 
// level 5: 
    // Given an array of arrays all only containing strings (given below), reduce all elements to one string
    let arrOfArrOfStr = [[['Peter'],['Piper']],[['Picked'],['A']],[['Pickled'], ['Pepper']]]

    // Filter: Use filter for the following questions
// level 0:
    // Given an array of strings remove any that are longer than 4 letters
// level 1: 
    // Given an array of numbers, remove any that are even
// level 2:
    // Given an array of numbers, add all the odd ones
// level 3:
    // Given an array of people (object given below), add all heights together
    let people = {
        name: 'Sharmania', height: '130cm', 
        name: 'Jessica', height: '160cm', 
        name: 'Ali', height: '180cm', 
        name: 'Hara', height: '170cm', 
    }
// level 4:
    // Given an array of students with test scores filter out any outliers, any scores that are more or less than 20 points from 75.
    let people = {
        name: 'Paul', score: 40, 
        name: 'Darrel', score: 61, 
        name: 'Jay', score: 66, 
        name: 'Alexi', score: 70, 
        name: 'Niko', score: 81, 
        name: 'Benjamin', score: 92, 
        name: 'Xavier', score: 110, 
    }
    // Output: [61, 66, 70, 81, 92]