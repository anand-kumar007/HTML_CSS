var number = 5; //this is an inline-comment

/*
this is a multiline comment
f
f
ff
ddf
df
*/

// Data types : 7 different datatpe

/* 
undefined, null, boolean, string, symbol, number, and 
object  
*/
/*

(undefined)-------> hasn't been defined yet
(null)------------> null
(symbol)----------> symbol is immutable value 
(object)----------> object are key value pair 

*/

var myName = "Sam" //this is global
console.log(myName)

let MYName = "Siya" //local varivble
console.log(MYName)

const N = "Clark" // shouldn't get change 


// undefined variables (variables are caseSensitive in JS)

var a ;
var b;
console.log(a+b)

// add,subtract,multiply,divide etc. is trivial

//incrementing and decrementing are allowed in JS

a = 10;
console.log(a++);

// also the shorthand notation is also allowed in JS

a += 19;
console.log("new a = ",a);


// strings in JS either the '' or ""

var MyFirstName = `"hey" there ! how are 'you'`

// use the backslash "..\"yourContent\"   ...";

var myLastName = "Bye \"!\" "
console.log(MyFirstName)
console.log(myLastName);


/*
\' ---> single quote
\" ---> double quote
\\ ---> backslash
\n ---> newline
\r ---> carriage return
\t ---> tab
\b ---> backspace
\f ---> form feed

*/

var para1 = "This is firstLine\nthis is second line\nthis is third line";

console.log(para1);


// string concatenation

var ourStr = "I am first string";

ourStr +=  " Ok enjoy your position";

console.log(ourStr);


var ourName = "freeCodeCamp";

var str2 = "Hello, our Name is " + ourName + " How are you?";

console.log(str2,"and length of this str is : ",str2.length);


// indexing in the string

console.log("firstIndex is : ",str2[1]);



//  strings are Immutable in JS like the Python etc.

// means their individual literals can't be changed though you can reassign them to some other values.

var greet = "jello World";
greet[0] = "H";  // no effect
console.log(greet);

greet = "Hello World";
console.log(greet);


console.log("Last index of greet is : ", greet.length -1 );