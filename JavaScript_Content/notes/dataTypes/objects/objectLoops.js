// We have previously utilized the "for loop", object utilize the "for in loop"
    // Arrays & strings syntax:
        // for(let i = 0; i < thing.length; i++){}
    // Object syntax:
        // for(let item in object){}
        // Example:
            let beach = {
                item: "wrong syntax",
                location: 'NE US',
                sand: true,
                name: "Jones Beach",
                area: '100,000 sqft',
            }
            
            for(let item in beach){
                console.log(beach[item]);
            }