// In this section, we'll discuss some of the ways we can use functions to simulate the behavior of classes.

/*
1. Using Functions
Define a normal JavaScript function.
Create an object by using the new keyword.
Define properties and methods for a created object using the this keyword.
*/

'use strict';

function Fruit(type) {
    this.type = type;
    this.color = 'unknown';
    this.getInformation = getFruitInformation;
}

function getFruitInformation() {
    return 'This ' + this.type + ' is ' + this.color + '.';
}

let lime = new Fruit('Mexican lime');
console.log(lime.getInformation());

lime.color = 'green';
console.log(lime.getInformation());

// run

// Or define the function internally

'use strict';

function Fruit(type) {
    this.type = type;
    this.color = 'unknown';
    this.getInformation = function () {
        return 'This ' + this.type + ' is ' + this.color + '.';
    }
}

let lime = new Fruit('Mexican lime');
console.log(lime.getInformation());

lime.color = 'green';
console.log(lime.getInformation());



/*
The Prototype Property
The drawback of internally defining the getInformation function is that it recreates that function every time we create a new Fruit object. Fortunately, every function in JavaScript has something called a prototype property, which is empty by default. We can think of a function's prototype as an object blueprint or paradigm; when we add methods and properties to the prototype, they are accessible to all instances of that function. This is especially useful for inheritance (discussed below).

We can add a function to our constructor function's prototype like so:
*/

'use strict';

function Fruit(type) {
    this.type = type;
    this.color = 'unknown';
}

Fruit.prototype.getInformation = function () {
    return 'This ' + this.type + ' is ' + this.color + '.';
}

let lime = new Fruit('Mexican lime');
console.log(lime.getInformation());

lime.color = 'green';
console.log(lime.getInformation());


// run

// 3. Using Object literals

/*
Using Object Literals
We can use object literals to define an object's properties and functions by initializing a variable with a comma-separated list of property-value pairs enclosed in curly braces.
*/
'use strict';

let lime = {
    type: 'Mexican lime',
    color: 'green',
    getInformation: function () {
        return 'This ' + this.type + ' is ' + this.color + '.';
    }
}

console.log(lime.getInformation());

lime.color = 'yellow';
console.log(lime.getInformation());


// run

// 4. singelton class using a function

/*
A singleton class is a design pattern that restricts a class to a single instance.When we assign the value of new function () {... } to a variable, the following happens:

We define an anonymous constructor function.
We invoke the anonymous constructor function with the new keyword.
*/

'use strict';

let lime = new function () {
    this.type = 'Mexican lime';
    this.color = 'green';
    this.getInformation = function () {
        return 'This ' + this.type + ' is ' + this.color + '.';
    };
}

console.log(lime.getInformation());

lime.color = 'yellow';
console.log(lime.getInformation());

// run

