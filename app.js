const http = require('http');
const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/someText.txt', 'utf8');
const myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')

myReadStream.on('data', function(chunk) {
   console.log('new chunk recived');
    //console.log(chunk);
    myWriteStream.write(chunk)
})

/*
const port = 3000;
const hostname = '192.168.0.24';

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello World')
});

server.listen(port, hostname);
console.log('Yo dawgs, now listening to port 3000')
*/