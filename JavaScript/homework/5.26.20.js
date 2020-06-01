// level 0
    // Q0.1
        // Create a function which takes in a number. 
        // If the number is greater than 0 return 'Bigger than zero'. 
        // Else return, 'smaller than or equal to zero'.

// level 1
    // Q 1.1    
        // Create a function which takes any data. 
        // The function returns 'true' if the given parameter is a truthy.
        // If it is falsy, return 'false'. 
        // (This function can be invoked with almost anything. Start by trying strings and empty strings. Don't invoke with something undeclared.)
            // Input: '',           output: 'false'
            // Input: 'a',          output: 'true'
            // Input: undefined,    output: 'false'

// level 2
    // Q 2.1
        // Create a function which returns 'big' if the given number is greater than or equal to 10.
        // If it is smaller, return 'small'. 

    // Q 2.2
        // Create a function which takes in an object 
        // If the object doesn't have a specific key return 'No such value'.
        // If it does, return that key's value. 

        let dirtBike1 = {
            brand: 'yamaha', 
            stroke: 2, 
            breaks: ['foot', 'hand'], 
            gas: 'unleaded'
        }
            
        let dirtBike2 = {
            brand: 'honda', 
            stroke: 2, 
            breaks: ['foot', 'hand'], 
            gas: 'unleaded',
            cylinder: '1.0'
        }
            
        let dirtBike3 = {
            brand: 'kawasaki', 
            stroke: 2, 
            breaks: ['foot', 'hand'], 
            gas: 'unleaded',
        }
            
        function checkCylinder(param){
            if(param.cylinder === undefined){
                return 'no such value'; 
            } else {
                return param.cylinder; 
            }
        }
            
        // console.log(checkCylinder(dirtBike1)); 
        // console.log(checkCylinder(dirtBike2)); 
        // console.log(checkCylinder(dirtBike3));

// level 3
    // Q 3.1
        // Create a function which takes in two numbers and compares them. 
        // If the first number is bigger return the first number.
        // If the second number is bigger return the second number.

    function name(param1, param2){
        if(param1 > param2){
            return param1;
        } else if (param1 < param2){
            return param2;
        } else {
            return 'The numbers are equal';
        }
    }

    console.log(name(3, 6));
    console.log(name(2, 2));
    console.log(name(1, -5));