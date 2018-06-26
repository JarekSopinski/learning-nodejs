const http = require('http');
const fs = require('fs');

const port = 3000;
const hostname = '192.168.0.24';

const server = http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/plain'});

    const myReadStream = fs.createReadStream(__dirname + '/someText.txt', 'utf8');
    myReadStream.pipe(res)
    
});

server.listen(port, hostname);
console.log('Yo dawgs, now listening to port 3000')