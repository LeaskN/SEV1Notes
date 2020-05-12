// These exercises are for you to practice
    // The file is sperated into strings, arrays, objects, and booleans.
    // HOWEVER there will sometimes be overlap (for example turning a string into an array and back)
    // 💥🥳 Have fun! 🥳🔥

// Strings
    // log a string to the console
    console.log('string');

    // Turn the string "I love to eat lots of pizza." into an array of words aka: ['I', 'love', 'to', 'eat', 'lots', 'of', 'pizza!'].
    var love = "I love to eat lots of pizza.";
    var arr = love.split(' ');
    console.log(arr);
    // Extract the first 4 letters from a string
    var str1 = "I love to eat lots of pizza.";
    var arr1 = love.slice(0, 5);
    console.log(arr1);

    // Extract the last 4 letters from a string
    var str2 = "I had fun this weekend.";
    var str2length = str2.length;
    var arr2 = str2.slice(str2length - 5, str2length);
    console.log(arr2);

    // Extract all letters before ':' in the string 'Address: 1600 Pennsylvania Ave NW, Washington, DC 20500'
    var address = 'Address: 1600 Pennsylvania Ave NW, Washington, DC 20500';
    var colonIndex = address.split(':');
    console.log(colonIndex[0]);


    
    // Extract all letters after ':' in the string 'Address: 1600 Pennsylvania Ave NW, Washington, DC 20500'

    var colonIndex = address.split(':');
    console.log(colonIndex[1]);

    // Convert your name into an abbreviation
        // Input: "Nic Leask"
        // Output: "Nic L"
            // Try and make it dynamic, swap out your name with other names and see what you get

        // Non-Dynamic solution (only works for 3-letter first names)
            var name = "Deboraht Neil";
            var abbrev = name.slice(0, 5);
            console.log(abbrev);

        // Dynamic solution
            var nameArr = name.split(' ');
            var first = nameArr[0]; 
            var natFirstShort = first.slice(0, 3);  
            // The following two lines do the same thing;
            // var lastInitial = nameArr[1][0];
            var lastInitial = nameArr[1].slice(0, 1)
            console.log(natFirstShort + ' ' + lastInitial);

    // Convert your full name into your initials
        // Input: "Nicholas Paul Norman Leask"
        // Output: "NPNL"
            // Try and make it dynamic, swap out your full name with other names and see what you get

    // Protect an email address
        // input: nicholas@nebulaacademy.com
        // output: nic...@n...y.com // first three, first after @ sign, last letter before.com

    // Protect a phone number
        // input: 555-444-1234
        // output: 5##-###-##34

        var fullNum = '555-444-1234';
        var numArr = fullNum.split('');
        numArr[1] = '#';
        numArr[2] = '#';
        numArr[4] = '#';
        numArr[5] = '#';
        numArr[6] = '#';
        numArr[8] = '#';
        numArr[9] = '#';
        console.log(numArr.join(''));
        


    
//________________________________________________________________________________________________________________

// Arrays
    // log an array to the console
        console.log(['An', 'Array']);

    // get the length of an array
        var arr = ['zero', 'one', 'two', 'three', 'four', 'last item']
        console.log(arr.length);
        
    // get the first item in an array
        console.log(arr[0]);
        
    // get the last item in an array
        console.log(arr[arr.length - 1]);

    // get the first n elements (values) of an array 
        var letters = ['a','b','c','d','e','f','g']
        var n = 1;
        // output = ['a', 'b', 'c']
        var firstNElements = letters.slice(0, n);
        console.log(firstNElements);

    // get the last m elements of an array
        m = 4;
        // output  = ['e','f','g']
        var lastMElements = letters.slice(letters.length - m, letters.length);
        console.log(lastMElements);
        
    // Concatinate all elements in an array into one long string

    // Swap uppercase for lowercase 
        // Input: "Hi Neil!"
        // Output: "hI nEIL!"

    // Multiply all the numbers of an array together
        // input: arr = [ 0, 1, 2, 3, 4, 5]  
        // output: 0

        // input: arr = [2, 4, 6, 8]
        // output: 384
//________________________________________________________________________________________________________________

// Objects

    // crate an object with 3 key-value pairs and log the full object to the console
    var car = {
        sunroof: true,
        numberOfWheels: 3,
        colorOfCar: 'red', 
    };
    console.log(car);
    
    // console.log(car.sunroof);
    // console.log(car.numberOfWheels);
    // console.log(car.colorOfCar);
    
    // log one key-value pair to the console
        console.log(car.colorOfCar);

    // create a car object which has a key-value pair of moving:true or moving:false
        // write an if statement that checks the key value pair and if it is true then log "the car is in motion" and if false "sitting still"
        car.moving = true;

        if(car.moving == true){
            console.log("the car is in motion")
        } else if (car.moving == false) {
            console.log("sitting still");
        }
        
    // 
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
//________________________________________________________________________________________________________________
