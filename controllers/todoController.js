const bodyParser = require('body-parser');

const data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];

const urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app){

    app.get('/todo', (req, res) => {
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlencodedParser, (req, res) => {
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo', (req, res) => {

    });

}