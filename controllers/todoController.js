const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connect to the database:

mongoose.connect('mongodb://test:test123@ds263660.mlab.com:63660/todo');

// Create a schema - this is like a blueprint:

const todoSchema = new mongoose.Schema({
    item: String
});

const Todo = mongoose.model('Todo', todoSchema);
const itemOne = Todo({item: 'get flowers'}).save(err => {
    if (err) throw err;
    console.log('item saved')
})

let data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];

const urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app){

    app.get('/todo', (req, res) => {
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlencodedParser, (req, res) => {
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item', (req, res) => {
        data = data.filter(todo => {
            return todo.item.replace(/ /g, '-') !== req.params.item
        });
        res.json(data)
    });

}