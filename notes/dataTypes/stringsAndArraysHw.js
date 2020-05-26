//Homework

// Example:
    // Write some code that will split up a string into a clear string names. 
    // For example 'Kaya,Solomon' gets converted into 'Kaya, Solomon'.
    // For example 'Nic,Laurie' gets converted into 'Nic, Laurie'.
    // Solution: console.log('Kaya,Solomon'.split(',').join(', '));

//Strings:
    //Q1: 
        // Write some code that gives us the length of a given string.
        // For example 'Peter Parker' gives us 12.
        // For example 'Michelle Obama' gives us 14.
        // var str = 'Peter Parker';
        // var n = str.length;
        // console.log(n);       

    //Q2: 
        // a: Write some code that converts a string into all capitals
        //      For example: 'Peter Parker' changes to 'PETER PARKER'.
        // b: Write some code that converts a string into all lowercase.
        //      For example: 'Michelle Obama' converts 'michelle obama'.
        // var str = 'Peter Parker';
        // var caps = str.toUpperCase();
        // // console.log(caps);
        // var lower = str.toLowerCase();
        // // console.log(lower);

    //Q3: 
        // a: Write some code that extrapolates the second word from the string: "My home town.".
        //      The result should be: 'home'
        // b: Write some code that extrapolates the second word from the string: "Lets eat, Grandpa!".
        //      The result should be: 'eat'
        // var miPueblo = "Longer worlds town.";
        // var casa = miPueblo.indexOf('t');
        // var soloCasa = miPueblo.slice(3, casa);
        // console.log(soloCasa);

        // var str = "Longer worlds town";
        // var strArr = str.split(' ')[1];
        // console.log(strArr);

    //Q4: 
        // Write some code that capitalizes a portion of a given string.
        // For example: "I'm very happy!" becomes, "I'm VERY happy!".

        // var allegre = "I'm very happy";
        // var jo = allegre.replace('happy', 'HAPPY');
        // // console.log(jo);

        // var str = "I'm very happy";
        // var arr = str.split(' ');
        // var capitalized = arr[1].toUpperCase();
        // arr[1] = capitalized;
        // console.log(arr.join(' '));
        

        
        

//Arrays:
        //Q1: Write some code that retrieves the 3rd item from the array ['Red', 'Green', 'Yellow', 'Purple']
        // var fruits = ['Red', 'Green', 'Yellow', 'Purple'];
        // var banana = fruits[2];
        // console.log(banana);
        
        //Q2: Write some code that converts the array ['Red', 'Green', 'Yellow', 'Purple'] to ['Green', 'Yellow', 'Blue', 'Purple', 'Pink']
        // Remove first item from array
        // Add item to middle of array
        // var items = ['one', 'two', 'three', 'four'];
        // items.splice(2, 0, 'hello');
        // console.log(items);

        // var fruits = ['Red', 'Green', 'Yellow', 'Purple'];
        // var newFruits = fruits.slice(1,4);
        // console.log(newFruits);
        
        
        // Add item to end of array

        // var fruits = ['Red', 'Green', 'Yellow', 'Purple'];

        // fruits.unshift('Green');
        // fruits.splice(1, 4, 'Yellow', 'Blue');
        // fruits.push('Purple', 'Pink');
        // console.log(fruits);

        // var arr = ['Red', 'Green', 'Yellow', 'Purple'];

        // arr.shift();
        // //these next two steps can be in either order
        // arr.splice(2, 0, 'Blue');
        // arr.push('Pink')
        // console.log(arr);

        
