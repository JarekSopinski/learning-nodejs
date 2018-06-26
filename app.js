const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('This is a homepage')
})

app.get('/contact', function(req, res){
    res.send('This is a contact page')
})

app.listen(3000);