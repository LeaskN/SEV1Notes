// Functions
    // A function is a block of code designed for a specific task
    // Functions are usually used more than once 
        // Note:
            // The proper way of saying 'used' is 'invoked'
        
    // Why even use functions?
       // You can reuse code by defining the code once, and using it many times.
       // This reduces potential errors 
       // Simplifies our programs

    //Syntax
        // function myFunction(){
        //     console.log('Hello World!')
        // };
            // Important Notes: 
                // '()' invokes a function
                    // It makes the function execute
                // return ends the function and the function evaluates to what is being returned
                    // example:
                        // return 3
                        // means the function evaluates to 3


    // Scope is:
        // What is accessible within a specific function

    // A function can be invoked many times with different arguments and produce results based on those arguments
        // Example a: 
            // We create the following function that adds two numbers, a and b, together
            // a and b are our parameters
            function addTwoNumbers(a, b){
                return(a + b);
            }
            // We are invoking the function with the arguments 1 & 2 where a = 1 and b = 2
            // this results in 3 being logged to the console
                // console.log(addTwoNumbers(1, 2)); 
            // We are invoking the function with the arguments 3 & 4 where a = 3 and b = 4
            // this results in 7 being logged to the console
                // console.log(addTwoNumbers(3, 4)); 
            // We are invoking the function with the arguments 5 & 6 where a = 5 and b = 6
            // this results in 11 being logged to the console
                // console.log(addTwoNumbers(5, 6));
        // Example b:
            function squareOneNumber(a){
                return (a * a);
            }
            // console.log(squareOneNumber(2)); // returns 4
            // console.log(squareOneNumber(12)); // returns 144
        // Example c:
            var arr1 = ['This', 'is', 'a', 'sentence'];
            var arr2 = ['I', "can't", 'wait', 'for', 'the', 'weekend'];
            
            function makeSentence(array){
                return (array.join(' '));
            }

            // console.log(makeSentence(arr1));
            // console.log(makeSentence(arr2));

        // Example d:
            // this is a function that gives us the date
            function createDate(){
                return new Date();
            }
            // Show the result of createDate on the CLI
            // console.log(createDate());

        // Example e: (Scope)
            function showName(string){
                var name = string;
                console.log(name);
            }
            // We have access to the variable because we are invoking the function
            // showName("Nic")
            // the following line doesnt work
            // we dont have access to name as it is inside the showName function
            // console.log(name);
        // Example f: (Scope)
            function showAnimal(){
                var animal = '🐶';
                console.log(animal);
            }
            // We invoke the function which returns the value of the variable 'animal'
            showAnimal();
            // the following line doesnt work
            // we dont have access to animal as it is inside the showAnimal function
            console.log(animal);