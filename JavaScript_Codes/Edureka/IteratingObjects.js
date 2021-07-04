//  some of the ways of iterating over an array's elements in JavaScript.

// 1. basic for loop
const arr = ['a', 'b', 'c', 'd'];

// 'i' is the index
for (let i = 0; i < arr.length; i++) {
    console.log('arr[' + i + ']: ' + arr[i]);
}

// ===> run it

// 2. for in statement
/*
The for...in statement iterates over the enumerable properties of an object in an arbitrary order, which allows us to execute statements for each distinct property. In the case of an array, the property would be its elements. In the case of an object, that would be its properties.


*/
// Iterating Over an Object's Properties
// When we use this loop to iterate over an object, 
//we can perform operations on the array's property names and their corresponding values.

const o = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

console.log('property: value');
// 'p' is the property
for (p in o) {
    console.log(p + ': ' + o[p]);
}
// run it


// ===========================================
const o = ['first', 'second', false];

// 'p' is the index
for (let p in o) {
    console.log(p + ' ' + o[p]);
}
// ===> run it
// ====================================


// 3. forEach method

// The forEach method iterates through an array and, for each element, it executes a function once.

const arr = ['a', 'b', 'c', 'd'];

arr.forEach((value, index, array) => {
    console.log('index', index, 'has a value of', value,
        'which correlates to array[' + index + ']:', array[index]);
});

arr.forEach((value, index) => {
    console.log('index', index, 'has a value of', value);
});

arr.forEach((value) => {
    console.log('value:', value);
});

// run it

    