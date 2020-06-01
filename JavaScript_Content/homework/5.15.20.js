// 5.15.20

// Example:

    // ONLY using comments write a function that turns an array into a string

    // Example Solution:

        // Declare a function that takes in an array

        // The function will join the array into one long string using spaces

// Q1:
    // Write a function that takes in a string and turns it into an array based on where it has dashes
        // Input: var string = "Pizza-Pizza-Give-Me-All-The-Pizza!"
        // Output: ["Pizza", "Pizza", "Give", "Me", "All", "The", "Pizza!"]

        // Solution 1:
            // var pizzaStr = "Pizza-Pizza-Give-Me-All-The-Pizza!";
            // // Declare a function that takes in a string and converts it to an array
            // function stringToArray(str){
            //     // converts a string into an array
            //     var pizzaArr = str.split('-');
            //     return pizzaArr;
            // }
            // console.log(stringToArray(pizzaStr));

        // Alternate solution

            // declare a function that takes in a string
                // loop over the string 
                    // if the character is a dash 
                        // remove the character and set a final string value
                        // var finalString = "Pizza-Pizza-Give-Me-All-The-Pizza!"

//Q2:
    // Write a function that takes in an array of strings and joins it all together without spaces
        // Input: var arr = ["I","Can","Not","Wait","For", "Warm", "Weather!"]
        // Output: "ICanNotWaitForWarmWeather!"
        
        // var weather = ["I","Can","Not","Wait","For", "Warm", "Weather!"];
        // // declare a function that takes in an array 
        // function noSpaces(arr){
        //     // the function will join an array into a long string without any spaces
        //     var finalStr = arr.join('');
        //     return finalStr;
        // }

        // console.log(noSpaces(weather));

// Q3:
    // Write a function that takes in a string and removes all of its dashes
        // Input: var str = "I-Love-To-Code!"
        // Output: "ILoveToCode!"
        // Hint: this is the previous two questions combined
            // Take in a string and turn it into an array based on the location of the dashes 
            // We can then combine it back into a string without any dashes
        var codingStr = "I-Love-To-Code!"
        var pizzaString = "Pizza-Pizza-Give-Me-All-The-Pizza!"
        // declare a function that takes in a string
        function dashRemover(str){
            // convert the string into an array based on its dashes
            var noDashesArr = str.split('-');
            // convert the new array into a string 
            var noDashesStr = noDashesArr.join(' ');

            return noDashesStr;
        }

        console.log(dashRemover(codingStr));
        console.log(dashRemover(pizzaString));
            
