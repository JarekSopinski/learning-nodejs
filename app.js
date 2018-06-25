const events = require('events');
const util = require('util');

// const Person = function(name){this.name = name};

// util.inherits(Person, events.EventEmitter);

class Person extends events.EventEmitter{
    constructor(name){
        super();
        this.name = name
    }
};

const james = new Person('james');
const mary = new Person('mary');
const ryu = new Person('ryu');

const people = [james, mary, ryu];

people.forEach(person => {
    person.on('speak', (msg) => {
        console.log(`${person.name} said ${msg}`)
    })
});

james.emit('speak', 'hey dudes');
ryu.emit('speak', 'I wanna curry');