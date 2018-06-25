const fs = require('fs');

/*
SYNC METHODS

const readMe = fs.readFileSync('readMe.txt', 'utf8');
console.log(readMe); // logs the content of file

fs.writeFileSync('writeMe.txt', readMe); 
// writes the content of readMe file (2nd param) to writeMe file (1st param)
*/

// ASYNC METHODS

fs.readFile('readMe.txt', 'utf8', (error, data) => {
    console.log(data);
    fs.writeFile('writeMeAsync.txt', data)
});
// because its async, it requires 3rd param - a callback to fire upon finishing
// this callback than takes two params: error and retrieved data