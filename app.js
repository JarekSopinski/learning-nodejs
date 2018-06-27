const express = require('express');
const todoController = require('./controllers/todoController');

const app = express();

// set up template engine
app.set('view engine', 'ejs');

// requesting static files
app.use(express.static('./public'));

// fire controllers
todoController(app);

// listen to a port
app.listen(3000);
console.log('You are listening to port 3000');