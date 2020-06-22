//OBJECTS
    // Objects are comprised of Key-Value pairs.
        // key on the left of the colon 
        // value on the right of the colon
    // Declaring an object
        // Example:
            // obj = {
            //      name: 'Nic',
            //      interests: [ 'Ali', 'Soccer', 'Coding', 'Noah' ],
            //      age: 68,
            //}
    // Accessing information 
        // Dot Notation
            // Example: Get the name
                // obj.name === 'Nic'
            // Example: Get the interests
                // obj.interests === 'Nic'
            // Example: Get the age
                // obj.age === 'Nic'
        // Bracket Notation
            // Example: Get the name
                // obj[name] === 'Nic'
            // Example: Get the interests
                // obj[interests] === 'Nic'
            // Example: Get the age
                // obj[age] === 'Nic'

    // Important Note
        // Two Primary Coding Paradimes for JavaScript
            // Object-Oriented Programming
                // Most common one right now
                // Object-oriented programming (OOP) is a programming paradigm based upon objects
            // Functional Programming
                // In computer science, functional programming is a programming paradigm where programs are constructed by applying and composing functions.
        
    // var personObj = {
    //     name: 'Nic',
    //     interests: [ 'Ali', 'Soccer', 'Coding', 'Noah' ],
    //     age: 68,
    // };

    // Accessing information in an object
    // console.log(personObj.name);
    // console.log(personObj.interests);
    // console.log(personObj.age);

    // console.log(personObj.interests);

//     var personObj = {
//         name: 'Nic',
//         interests: [ 'Ali', 'Soccer', 'Coding', 'Noah' ],
//     };
//     //Adding a new key-value pair
//         //obj     key   value
//         personObj.age = 68;

//     // console.log([ 'Ali', 'Soccer', 'Coding', 'Noah' ]);
//     // Editing a key-value pair
//         // personObj.interests.unshift('Skiing');

//         // console.log(personObj.interests);
        
//         // change Nic to Nicholas
//             // personObj.name = 'Nicholas';

//     // Adding a new key-value pair
//         personObj.email = 'nic@lauriecarey.com';
//         // console.log(personObj.email);

//         //access info
//             // console.log(personObj.email);
//             // console.log(personObj['email']);

//     // Complex situations 
//         // changing information dynamically
//         // console.log(personObj.email);
//         // firstCut = personObj.email.indexOf('@');
//         // personObj.email = personObj.email.slice(0, firstCut) + '@nebulaacademy.com'
        
//         // console.log(personObj.email);

// // Example
//     // Objective is to change all employee emails
    
//     //declare an object for nic which includes his name, email, and interests
//     var NicWorkInfo = {
//         name: 'Nic',
//         email: "Nic@lauriecarey.com",
//         interests: [ 'Ali', 'Soccer', 'Coding', 'Noah' ],
//     };
//     //declare an object for Anam which includes her name, email, and interests
//     var AnamWorkInfo = {
//         name: 'Anam',
//         email: "Anam@lauriecarey.com",
//         interests: [ 'Flowers', 'Netflix'],
//     };
//     //declare an object for Laurie which includes her name, email, and interests
//     var LaurieWorkInfo = {
//         name: 'Laurie',
//         email: "Laurie@lauriecarey.com",
//         interests: [ 'Work', 'Running', 'Sunshine', 'Family' ],
//     };

//     // add the three employees to an array of employees
//     var employees = [LaurieWorkInfo, AnamWorkInfo, NicWorkInfo];

//     // loop over all objects included in the employees array
//     for (var i = 0; i < employees.length; i++) {
//         // set a variable to our current object (in this case a specific employee)
//         var employee = employees[i];
        
//         // find the @ sign in the current employees email address
//         // grab the everything before that index 
//         var firstCut = employee.email.indexOf('@');
        
//         // access the email key-value pair for our current employee
//         // change the end of the email by using the variable 'firstCut' index
//         employee.email = employee.email.slice(0, firstCut) + '@nebulaacademy.com';
//     }
//     // log the updated objects to the browser using the employees array
//     // console.log(employees);

// // Bracket Notation

// let obj = {
//     one: 'Ronald Vilorio',
//     two: 'Spencer Cannon',
//     three: 'Deboraht Neal',
//     four: 'Nat Martinez',
// };

// obj['one'];
// // obj['person1'] = 'Ronald Vilorio';
// // obj['person2'] = 'Spencer Cannon';
// // obj['person3'] = 'Deboraht Neal';
// // obj['person4'] = 'Nat Martinez';

// // console.log(obj);

// console.log('1234'.padStart(9, "*"));

// Object.assign():

// let car = {
//     wheels: 4,
//     seats: 6, 
//     premiumGas: false,
    
// }

// car.sunRoof = true;

// let trueCopy = Object.assign({
//     hair: 'brown', 
//     eyes: {
//         large: true,
//         color: 'blue',
//     },
// }, car);

// console.log(car);
// console.log(trueCopy);



// function onlyEvens (){
//     let arr = [1,2,3,4,5,6,7.7];
//     evenArr = [2,4,6]
// }

// evenArr;

