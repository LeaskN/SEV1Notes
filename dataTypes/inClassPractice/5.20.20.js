// level 0
    // Q0.1 create a function that always greets us ( Hello World Function )
        // example:
            // no input
            // output: "Hello!"
    function greet(param){
        return 'Hello!';
    }
    // console.log(greet());

// level 1:
    // Q1.1 
        // Create a function that takes in a string and returns the second character
        let message = "Hey, I'm on my way home.";

        function secondChar(str){
            let secondLetter = str.slice(1,2);
            return secondLetter;
        }

        // console.log(secondChar(message));

    // Q1.2
        // Create a function that takes in an array and returns the second element
        var arr = ['Spencer', 'Geo', 'Kaya', 'Patrick'];

        function secondElement(param){
            var scndEle = arr.slice(1,2);
            return scndEle;
        }

        // console.log(secondElement(arr));
    // Q1.3
        // Create a function that takes in an array of birds and adds three birds
            // the birds get added one to the front, one to the back, and one at the second index

            // let initialBirds = ['Bald Eagle', 'Robin', 'Blue Jay'];
            // let bird1 = 'Quaker';
            // let bird2 = 'Cockatoo';
            // let bird3 = 'Kingfisher';

            var firstBirds = ['Bald Eagle', 'Robin', 'Blue Jay'];

            function birds(allBirds){
                allBirds.push('Cockatoo');
                allBirds.unshift();
                allBirds.splice(2,0,'Kingfisher');
                return allBirds;
            }
            // console.log(birds(firstBirds))

    // Q1.4
        // Create a function that takes in a string and gives us the first three letters

        function firstLetters(str){
            let first3 = str.slice(0, 3);
            return first3;
        }

        // console.log(firstLetters('Hello World'));

    // Q1.5
        // Create a function that takes in an array and combines the elements into a string

        function arrToStr(array){
            return array.join('-');
        }

        // console.log(arrToStr(['Bald Eagle', 'Robin', 'Blue Jay']))

// level 2:
    // Q2.1
        // Create a function that takes in a string and returns the last character

        function lastChar(str){
            let strLength = str.length
            return str.slice(strLength - 1, strLength);
        }

        // console.log(lastChar('Hello World'))
    // Q2.2
        // Create a function that takes in an array and returns the last element

        function lastChar(arr){
            return arr.slice(arr.length - 1, arr.length);
        }

        // console.log(lastChar(['Hello', 'World']));

// level 3:
    // Q3.1
        // Create a function that takes in a string and returns the central character

        function centralChar(str){
            let strLength = str.length
            return str.slice(strLength/2, (strLength/2) + 1);
        }

        // console.log(centralChar('Hello-World'));

    // Q3.1
        // Create a function that takes in an array and returns the central element
        function centralEle(arr){
            let arrLength = arr.length
            return arr.slice(arrLength/2, (arrLength/2) + 1);
        }

        // console.log(centralEle(['Hello','-','World']));

// level 4:
    // Create a function that searches for all numbers inside strings in a given array and removes them 
        // input = ['B12', 'RTX3000', 'Hello World', 'H3110 W041D'];
        // output = ['B', 'RTX', 'Hello World', 'HWD'];

    let givenArr = ['B12', 'RTX3000', 'Hello World', 'H3110 W041D'];

    // created a function that takes an arg
    function numberFilter(arr){
        // created a string 
        let arrToStr = arr.join('-');
        // created empty string (our accumilator)
        let noNums = '';

        // for loop
        for (let i = 0; i < arrToStr.length; i++) {
            let element = arrToStr[i];
            // if firstElementOfString * 1 === Number || firstElementOfString === 0 
            if (element * 1 || element === '0') {
                null
            } else {
                noNums += element;
            }
        }

        return noNums;
    }

    console.log(numberFilter(givenArr));

    
