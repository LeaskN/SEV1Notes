// Practice 1:
    // Task 1: Creating an object
        // Create an object called car
            // Give it 5 key value pairs including; color, numberOfWheels, and brand. 

    // Task 2: Changing Stuff
        // Using dot notation 
            // 2a: Change the color

    // Task 3: Adding Stuff
        // Add numberOfSeats
        // Add licensePlate
// End of practice one
//______________________________________________________________________________________________________________

//Practice 2

    // Task 1:
        // Create 3 car objects with 3 properties; color, numberOfWheels, and brand. 
    // Task 2:
        // Iterate through the cars and do the following tasks
            // Change the color
            // Add numberOfSeats
            // Add licensePlate
        // (Difficult) Make each one unique

//______________________________________________________________________________________________________________

// Object Loop practice
// Practice 3
// level 0:
    // create an object (minimum 3 key-value pairs) & create a function which iterates over the object and logs all values to the console.

// level 1: 
    // create an object (minimum 3 key-value pairs) & create a function which iterates over the object and logs all the key & the value pairs to the console.

    // let obj = {
    //     thing1: 'thingy',
    //     thing2: 'thingyy',
    //     thing3: 'thingyyy',
    // }

    // for(let item in obj){
    //     console.log(`${item}: ${obj[item]}`)
    // }
// level 2: 
    // create an object & create a function which logs all string key-value pairs to the console 

    // create an object & create a function which logs all boolean key-value pairs to the console 

    // let house = {
    //     appliances: 'refrigerator',
    //     furniture: 'couches',
    //     bedding: 'blankets',
    //     backyard: ['pool', 'rocks'],
    //     location: true,
    // }
    
    // function newHouse(param){
    //     for(let item in param){
    //         if(param[item] === true || param[item] === false){
    //             console.log(`${item}: ${param[item]}`);
    //         }
    //     }
    // }

    // create an object & create a function which logs all array key-value pairs to the console 

    // let house = {
    //     appliances: 'refrigerator',
    //     furniture: 'couches',
    //     bedding: 'blankets',
    //     backyard: ['pool', 'rocks'],
    //     location: true,
    // }

    // function newHouse(param){
    //     for(let item in param){
    //         if(Array.isArray(param[item])){
    //             console.log(param[item]);
    //         }
    //     }
    // }

    // newHouse(house);

// level 3: 
    // given the following object create a function which logs the username length & password length.
        // let account = {
        //     username: "Snowman",
        //     password: "caRR0t"
        // }

        // function combo(param){
            
        //     for(let key in param){
        //         console.log(key, param[key].length);
        //     }
        // }
        
        // combo(account);
    // given the following object create a function which logs the house address & passcode as stars.
        // input: ring. Output: "Address: 1600 Pennsylvania Ave NW, Washington, DC 20500. Passcode: ****.""
        let ring = {
            homeAddress: "1600 Pennsylvania Ave NW, Washington, DC 20500",
            passcode: "12312312312222",
        }

        // function addressPass(param){
        //     let address = param['homeAddress'];
        //     let coveredPasscode = param['passcode'];
        //     let stars = '';
        
        //     for(let i = param['passcode'].length; i > param['passcode'].length - 4; i--){
        //         coveredPasscode = coveredPasscode.slice(0, -1);
        //         stars += '*';
        //     }

        //     coveredPasscode = coveredPasscode + stars;

        //     return address + '. Passcode: ' + coveredPasscode;
        // }

        // console.log(addressPass(ring));

// level 4: 
    // create an object & create a function which increases the factor of any number by 10 (even if the number is a string, or is concatinated with strings)

let numbers = {
    num1: 3, // 30
    num2: "4", // "40" || 40
    num3: "4text", // "40" + "text" || "40text"
    num4: "20passWord_30", // 200passWord_300
    // num5: "200,000", // 2000000
    // bool: true,
};

function factorOf10(param){
    let newNumbers = {};

    for(let key in param){
        let value = param[key];
        if(value == parseInt(value)){
            newNumbers[key] = value * 10;
        } else {
            for (let i = 0; i < value.length; i++) {
                let finalVal = value;
                let element = value[i];
                let nextEle = value[i+1];

                if (!isNaN(element) && isNaN(nextEle)){
                    eFact10 = element * 10;
                    finalVal = eFact10 + finalVal.slice(1, finalVal.length)
                    newNumbers[key] = finalVal;
                }
            }            
        }
    }
    
    return newNumbers;
}

console.log(factorOf10(numbers));