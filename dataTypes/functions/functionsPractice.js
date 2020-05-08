// create a function that adds two numbers together

    // Solution 1:
        // console.logging inside the function
        // function addNumbers(x, y){
        //     console.log(x + y);
        // }

        // addNumbers(3, 4);
    
    // Solution 2:

        // function addNumbers(x, y){
        //     return (x + y);
        // }

        // console.log(addNumbers(3,4));

// create a function which takes in 3 numbers and returns the product of all three
    // Solution 1:
        function products(num1, num2, num3){
            var solution = num1 * num2 * num3;
            return solution;
        }

        console.log(products(2, 3, 4))

// create a function that takes in an array of names and says hello to each
    // Solution 1:
        var people1 = ['Nat', 'Geo', 'Solomon', 'Patrick' ];
        var people2 = ['Debbie', 'Mitsie', 'Kaya', 'Desmond' ];
        var people3 = ['Ronald', 'Spencer' ]

        function sayHello(arr){
            
            for(var i = 0; i < arr.length; i++){
                var person = arr[i];
                console.log("Hello " + person + "!");
            }
            
        }

        sayHello(people1);
        sayHello(people2);
        sayHello(people3);