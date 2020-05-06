// String Summary
//      A set of characters surrounded by quotes " ", ' ', ` `
//      String are immutable, which means they cannot be changed.
//      Use variables to create new strings 
//      Backticks (template literals) vs Single or Double Quotes:
//          - You can include JavaScript within backticks by using ${}, which is called interpolation
//          - Backticks are very literal, until you close them out everything (included new lines will be included)
//          - Backticks are very literal, they inlucde new line characters
//              var string = `
//               `
//              //Single or double quoutes will see a new line as a statement finisher
//              var string2 = '
//              '

//      Concatenation
//          - Joining together of multiple strings 
//              - Examples: 
//                  - str1 + str2
//                  - 'Hello' + 'World' = 'Hello World'
//                  - "Hello" + "World" = "Hello World"

//      Indicies
//          - Each character in a string has an index
//          - Index starts at 0 and counts upwards until the end of the string
//          - Note: .indexOf() is a method, see methods below

//      Getting Specific Characters
//          - We can get specific characters by using square brackets
//          - Example
//              - 'Hello World'[0] = 'H'
//              - 'Hello World'[3] = 'l'
//              - 'Hello World'[5] = ' '
//          - Note: Empty quotes and quots with a space are completely different
//              - '' ≠ ' '
//          - A common thing is to look for the last character the code for that looks like this:
//              - var str = 'Hello World'
//              - str[str.length - 1] will equal 'd'
//          - We can search for a substring and we will get where it starts as a value
//              - Example: 'Hello World'.indexOf('llo') = 2

//      Methods
//          - Length
//              - All strings have a length 
//              - We can find the length with the length method.
//                  - Example: 
//                      - 'Hello World'.length = 11
//              - Length is usually 1 more than the highest index (because index starts at 0 and length starts at 1)
//                  - Think, what is the length of "h"?
//              - Case
//                  - We have two methods for changing case
//                      - 'Hello World'.toUpperCase() equals 'HELLO WORLD'
//                      - 'Hello World'.toLowerCase() equals 'hello world'
//          - Slice
//              - We can grab a substring starting from index #1 (inclusive) to index #2 (exclusive)
//                  - Example:
//                      - 'Hello World'.slice(6, 11) = World
//          - Split
//              - We can split strings to create Arrays
//              - Example:
//                  - 'Leisser,Mitsie,Nat'.split(',') equals [Leisser, Mitsie, Nat]
//          - Replace
//              - We can replace a substring by using .replace()
//                  - Example:
//                      - 'Hello World'.replace('H', 'J') = 'Jello World'
//                      - 🔥IMPORTANT🔥 the string 'Hello World' has not been changed, it is immutable
//          - IndexOf
//              - We can find this index using the method .indexOf()
//                  - For example: 'Hello World'.indexOf('e') will be equal to 1
//              - If we search for a character that doesn't exist we will get -1
//                  - For example: 'Hello World'.indexOf('x') will be equal to -1
//              - If we search for a character that appears multiple times we'll get the first instance
//                  - For example: 'llama'.indexOf('l') will be equal to 0, which is the first instance of the l
//              - Capitals and lowercase letters are not the same
//                  - For example: 
//                      - 'Bobby'.indexOf('B') will be equal to 0
//                      - 'Bobby'.indexOf('b') will be equal to 2