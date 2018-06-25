const fs = require('fs');

//fs.unlink('writeMe.txt');
// delete file, but watch out - using it again will ofc cause an error

//fs.mkdirSync('stuff'); // create directory (sync way)
//fs.rmdirSync('stuff'); // remove directory (sync way)
// notice than rm won't work is dir isn't empty! First use unlink do delete files.

// CREATING AND FILLING DIRECTORY (ASYNC WAY):

fs.mkdir('stuff', () => { 
    // async version takes callback as 2nd param fired upon finishing
    fs.readFile('readMe.txt', 'utf8', (error, data) => {
        fs.writeFile('./stuff/writeMe.txt', data)
    })
});
// first creates directory 'stuff', than reads data,
//than writes this data in a new file in 'stuff' directory