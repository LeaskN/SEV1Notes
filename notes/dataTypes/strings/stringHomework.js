//Homework:
    // Write code to convert the following into something for the computer and something for the human;

    var fullText2 = "MAN67584758;Manchester Piccadilly"    // -> Expected Solution: Computer: MAN67584758, Human: Manchester Piccadilly
    var fullText1 = "GNF5767465;Greenfield"                // -> Expected Solution: Computer: GNF5767465, Human: Greenfield
    var fullText3 = "LIV5hg65hd7374;Liverpool Lime Street" // -> Expected Solution: Computer: LIV5hg65hd7374, Human: Liverpool Lime Street
    var fullText4 = "SYB4f;Stalybridge"                    // -> Expected Solution: Computer: SYB4f, Human: Stalybridge
    var fullText5 = "HUD5767ghtyfyr45;Huddersfield"        // -> Expected Solution: Computer: HUD5767ghtyfyr45, Human: Huddersfield

    //Figure out where divider is
    var divider = fullText1.indexOf(';');
    //Slice it on the semicolon to get the first half
    var computerText = fullText1.slice(0, divider);
    //Slice on the semicolon to get the second half
    var humanText = fullText1.slice(divider + 1, fullText1.length);
    //Create a string of everything.
    var finalText = `Text for computer: ${computerText}. Text for human: ${humanText}.`;
    //Show on CLI
    console.log(finalText)


























// let str = 'MAN675847583748sjt567654;Manchester Piccadilly'
// let splitNum = str.indexOf(';');
// let computer = str.slice(0, splitNum)
// let human = str.slice(splitNum + 1, str.length)
// console.log("Computer: " + computer + ', ' + "Human: " + human)

