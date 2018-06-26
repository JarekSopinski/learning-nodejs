const http = require('http');
const fs = require('fs');

const port = 3000;
const hostname = '192.168.0.24';

const server = http.createServer(function(req, res) {

    console.log('Request was made: ' + req.url);

    res.writeHead(200, {'Content-Type': 'application/json'});

    const myObj = {
        name: 'Ryu',
        job: 'Ninja',
        age: 29
    };

    res.end(JSON.stringify(myObj));

    // const myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    // myReadStream.pipe(res)
    
});

server.listen(port, hostname);
console.log('Yo dawgs, now listening to port 3000')