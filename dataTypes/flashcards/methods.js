// push
        // Adds a new element to the end of an array
        // Data type it works on: array
        // Syntax arr.push(newElement)

// indexOf
        // We can find the index of a character or element
        // Data type it works on: Strings and Arrays
        // Syntax: arr.indexOf(element) or str.indexOf(character)

  // slice
        // Returns the selected elements in an array or in a string
        // Data type it works on: Strings and Arrays
        // Syntax: array.slice(start, end)
        // Syntax: string.slice(start, end)

 // length
        // All strings have a length
        // All arrays also have a length
        // Data type it works on: Strings and Arrays
        // Syntax: array.length
        // Syntax: string.length

// replace
        // Replaces the first instance of a substring within a string
        // Data type it works on: Strings
        // Syntax: string.replace('oldSubStr', 'newSubStr')

// unshift
        // Adds new items to the beginning of an array
        // Data type it works on: Arrays
        // Syntax: array.unshift(newElement)

// shift
        // Removes the first item of an array
        // Data type it works on: Arrays
        // Syntax: array.shift()

    // pop
        // Removes the last item of an array.
        // Data type it works on: Arrays
        // Syntax: array.pop()

    // join
        // Used to join the elements of the array together into a string.
        // Data type it works on: Arrays
        // Syntax: array.join('-')

    // splice
        // Adds and Removes items to an array and returns the removed items.
            // example: 
            let arr = ['One','Two','Three','Four']
                // arr.splice(0,1,'negativeOne') // returns 'One'
            console.log(arr.splice(0,1,'negativeOne'))
                // BUT the array has been mutated into ['negativeOne','Two','Three','Four']
                console.log(arr)
        // Data type it works on: Array
        // Syntax: array.splice(index, numberOfEleToDelete, newElements)

    // toUpperCase
        // Converts a string to uppercase letters.
        // Data type it works on: Strings
        // Syntax: string.toUpperCase()

    // toLowerCase()
        // Converts a string to lowercase letters.
        // Data type it works on: Strings 
        // Syntax: string.toLowerCase()