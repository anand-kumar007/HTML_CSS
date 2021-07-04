//there are various ways of creating the objects in javascript

// 1. using object initilizer

var a = 3;
var b = 'Rome';
var c = false;

var o = { a, b, c };

console.log('Object \'o\':', o);

var p = {
    a: 3,
    b: 'Rome',
    c: false
};

console.log('Object \'p\':', p);

var q = {};
console.log('Object \'q\' (Initial):', q);
q.a = a;
q.b = b;
q.c = c;
console.log('Object \'q\' (Updated):', q);

// ===> run it 


// 2. using new object

var o = new Object();

o.a = 4;
o.b = 'Rome';
o.c = true;

console.log('Object \'o\':', o);

// ===>run it

// 3. using object create

var x = {
    a: 5,
    foo: function () {
        return this.a * this.a;
    }
};

var o = Object.create(x);

console.log('\'x\':', x);
console.log('Object \'o\':', o);
console.log('Property \'o.a\':', o.a);
console.log('Method \'o.foo()\':', o.foo());

o.a = 7;

console.log('Property \'o.a\':', o.a);
console.log('Method \'o.foo()\':', o.foo());


// ===> run it

// 4. using constructor function

function Actor(firstName, lastName, Age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.Age = Age;
}

var a1 = new Actor('Julia', 'Roberts', 48);
var a2 = new Actor('Kate', 'Winslet', 40);

console.log('Object \'a1\':', a1);
console.log('Object \'a2\':', a2);

// ===> rn it