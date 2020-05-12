// Q1: 
    // Task 1: Creating an object
        // Create an object with the name of a sport
            // Give it 3 key-value pairs including the number of players, required items and one other thing.
    // var waterPolo = {
    //     numberOfPlayers: 13,
    //     requiredItems: ['Ball', 'Cap', 'Swimsuit'],
    //     pool: true,
    // }

    // Task 2: Changing Values
        // Using dot notation 
            // 2a: Add a required item to the current list of required items
                // Note:
                    // Your required items likely should be an array
                    // Don't just re-write your items, add the new one to the existing list
                    // waterPolo.requiredItems.push('Goals');
                    
            // 2b: Write code that increases the number of players by one
                    // waterPolo.numberOfPlayers = waterPolo.numberOfPlayers + 1;
                    
    // Task 3: Adding Stuff
        // Add country of origin
        // Add a boolean for if shoes are required or not

            // waterPolo.origin = 'Great Britain';
            // waterPolo.reqShoes = false;
            // console.log(waterPolo);
            
// Q2:
    // Task 1: Creating an object
        // Create an object called house
            // Give it 3 key-value pairs including; size, county, and floors. 

    var house = {
        roof: 1,
        windows: 6,
        doors: 3,
        county: 'Nassau',
        floors: 1,
        size: '1000sqft',
    }
    

    // Task 2: Changing Values
        // Using dot notation 
            // 2a: Change the size of the house
                // big issue here is our size is NOT a number so we can't do math on it.
                
                // Find the index of where we can split the house.size string into a 'number' and a measurement.     
                var measurementStart = house.size.indexOf('sqft');
                // Assign our string of numbers to a variable
                var numberString = house.size.slice(0,4);
                // convert the numberString into an actual number and double it
                var newSize = Number(numberString) * 2; 
                // concatenate with sqft
                house.size = (newSize) + 'sqft';
            
        
            // 2b: Write code that dynamically increases the number of floors by one no matter the current number of floors
                // AKA 1 floor would give 2. 
                // 2 would give 3. 
                // 4 would give 5 etc...
                house.floors++;

    // Task 3: Adding Stuff
        // Add numberOfAdults
        // Add numberOfKids
        house.numberOfAdults = 16;
        house.numberOfKids = 10;
        

    // Task 4: Calculate (fake) cost!
        // each person costs 10 
        // and your totalCost is size multiplied by the cost of all people
        // calculate the totalCost
        // add cost to your original house object
    
        var costOfAllPeople = (house.numberOfAdults + house.numberOfKids) * 10; 
        var totalCost = costOfAllPeople * newSize;
        house.cost = totalCost;

        console.log(house);
        



