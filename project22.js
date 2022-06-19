

// Step 1. Read the file - Done!
// Step 2. Store the file data into an array of names
// Step 3. Sort the names

// Step. Create an array?
// Step. Assign value to each alphabet?
// Step. Loop through the thing and add? Possibly with a while loop? Shove into new array?
// Step. Remove quotation marks
// Step. Find the sum of each name? With a loop?


const fs = require('fs')
const ALPHA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const nameScore = function(filename) {
const fileData = fs.readFileSync(filename, 'utf-8')
const nameArray = fileData.replace(/\"/g, '').split(',').sort();
console.log(fileData)
console.log(nameArray)

return 5

}


const score = nameScore('names.txt')

console.log("Score is", score)