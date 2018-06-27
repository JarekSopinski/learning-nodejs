const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connect to the database:

mongoose.connect('mongodb://test:test123@ds263660.mlab.com:63660/todo');

// Create a schema - this is like a blueprint:

const todoSchema = new mongoose.Schema({
    item: String
});

const Todo = mongoose.model('Todo', todoSchema);

// const itemOne = Todo({item: 'get flowers'}).save(err => {
//     if (err) throw err;
//     console.log('item saved')
// })

//let data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];

const urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app){

    app.get('/todo', (req, res) => {
        // get data from mongo db and pass it to the view
        Todo.find({}, (err, data) => {
            if (err) throw err;
            res.render('todo', {todos: data});
        });
    }); // find () retrieves all items in a collection; Todo.find({item: 'name'}) would return specific item

    app.post('/todo', urlencodedParser, (req, res) => {
        // get data from the view and add it to mongo db
        const newTodo = Todo(req.body).save((err, data) => {
            if (err) throw err;
            res.json(data)
        })
    });

    app.delete('/todo/:item', (req, res) => {
        // delete the requested item from mongo db
        Todo.find({item: req.params.item
            .replace(/\-/g, " ")})
            .remove((err, data) => {
                if (err) throw err;
                res.json(data)
            })
    });

}