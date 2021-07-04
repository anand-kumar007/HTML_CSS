/*
Class Declarations
One way to define a class is using a class declaration. To declare a class, we use the class keyword and follow it with the class' name. Ideally, we always write class names in TitleCase.

*/

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

let p = new Polygon(1, 2);
console.log('Polygon p:', p);
// run

/*
An important difference between function declarations and class declarations is that function declarations are hoisted (i.e., can be referenced before they're declared) but class declarations are not. This means we must first declare our class before attempting to access (or reference) it; if we fail to do so, our code throws a ReferenceError.
*/

try {
    let p = new Polygon(1, 2);
    console.log('Polygon p:', p);
}
catch (exception) {
    console.log(exception.name + ': ' + exception.message);
}
class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

p = new Polygon(1, 2);
console.log('Polygon p:', p);

// run

// 2. class expression

/*
Class Expressions
Class expressions are another way to define a class, and they can be either named or unnamed. The name given to a named class expression is local to the class' body.
*/

// unnamed class expression

let Polygon = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

console.log('Polygon:', Polygon);
let p = new Polygon(1, 2);
console.log('p:', p);
// run

//named class expression
let Polygon = class Polygon {
    2
    constructor(height, width) {
        3
        this.height = height;
        4
        this.width = width;
        5
    }
    6
};
7

8
console.log('Polygon:', Polygon);
9
let p = new Polygon(1, 2);
10
console.log('p:', p);

// run


// 3. constuctor method
/*
The constructor method is a special method we use to create and initialize objects of a class.

A class can only have one special method with the name constructor, and attempting to write a class containing more than one constructor method will throw a SyntaxError.

To implement inheritance, we can use the super keyword in a constructor to call a parent class constructor.
*/

// Prototype method

'use strict';

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}

const square = new Polygon(10, 10);

console.log(square.getArea());

// run


// static methods
/*
Static Methods
Static methods are methods relevant to all instances of a class — not just any one instance. These methods receive information from their arguments and not a class instance, which allows us to invoke a class' static methods without creating an instance of the class. In fact, we actually can't call a static method on an instantiated class object (attempting to do so throws a TypeError).

We define a class' static methods using the static keyword. We typically use these methods to create utility functions for applications, as they can't be called on class objects.
*/

'use strict';

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

// The correct way to call a static method
console.log(Point.distance(p1, p2));

// Attempt to call a static method on an instance of the class
try {
    console.log(p1.distance(p1, p2));
}
catch (exception) {
    console.log(exception.name + ': ' + exception.message);
}

// run


// Inheritance 
/*
Inheritance
In essence, this construct allows us to create an object prototype or class that's an extension of another object prototype or class. A class inheriting from some other class (referred to as a superclass or parent class) is called a subclass (or child class). The subclass inherits the superclass' methods and behaviors, but it can also declare new ones or even override existing ones

*/

//We use the extends keyword in class declarations or class expressions to create a child class (i.e., subclass).

'use strict';

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name, 'speaks.');
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name, 'barks.');
    }
}

let spot = new Dog('Spot');
spot.speak();

spot = new Animal('Spot');
spot.speak();

// run

// we can extend functional classes as well

'use strict';

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(this.name, 'speaks.');
}

class Dog extends Animal {
    speak() {
        console.log(this.name, 'barks.');
    }
}

let spot = new Dog('Spot');
spot.speak();

spot = new Animal('Spot');
spot.speak();

//run

//We use the super keyword to call functions on an object's parent.

'use strict';

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name, 'speaks.');
    }
}

class Dog extends Animal {
    speak() {
        super.speak();
        console.log(this.name, 'barks.');
    }
}

let spot = new Dog('Spot');
spot.speak();

// run

