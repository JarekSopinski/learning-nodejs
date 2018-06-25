const http = require('http');

const port = 3000;
const hostname = '192.168.0.24';

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello World')
});

server.listen(port, hostname);
console.log('Yo dawgs, now listening to port 3000')