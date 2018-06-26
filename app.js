const http = require('http');
const fs = require('fs');

const port = 3000;
const hostname = '192.168.0.24';

const server = http.createServer(function(req, res) {

    console.log('Request was made: ' + req.url);

    if(req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res)
    } else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res)
    } else if (req.url === '/api/ninjas') {
        const ninjas = [{name: 'Ryu', age: '29'}, {name: 'Yoshi', age: 32}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas))
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res)
    }
    
});

server.listen(port, hostname);
console.log('Yo dawgs, now listening to port 3000')