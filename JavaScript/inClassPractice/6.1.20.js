// Object referece practice:

let cars = {
    "Porche": {
        "steeringWheel": true,
        "AWD": true,
        "numberOfSeats": 2
    },
    "BMW": {
        "steeringWheel": true,
        "AWD": false,
        "numberOfSeats": 4
    },
    "Ford": {
        "steeringWheel": true,
        "AWD": true,
        "numberOfSeats": 7
    },
}

// Dot Notation

    // using dot-notation get a value

    cars.BMW.numberOfSeats; // 4

    cars.Ford.numberOfSeats // 7

    // using dot-notation to set a value

    cars.Ford.numberOfSeats = 6;

    // using dot-notation to create a value

    cars.Ford.color = 'red';


// Bracket Notation

    // using bracket-notation get a value

    cars['Ford']['numberOfSeats'];

    // using bracket-notation to set a value

    cars['Ford']['numberOfSeats'] = 8;

    // using bracket-notation to create a value

    cars['Porche']['color'] = 'red';

    // console.log(cars);

    // if you have questions refer to the following documentation. 
    // https://medium.com/dailyjs/dot-notation-vs-bracket-notation-eedea5fa8572