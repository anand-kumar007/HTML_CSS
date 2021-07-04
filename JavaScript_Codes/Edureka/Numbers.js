//JavaScript Numbers are Always 64-bit Floating Point
// international IEEE 754 standard.
// This format stores numbers in 64 bits, where the number (the fraction) 
//is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:

// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

var x = 999999999999999;   // x will be 999 999 999 999 999
var y = 9999999999999999;  // y will be 100 000 000 000 000 00
console.log(x);
console.log(y);


//The maximum number of decimals is 17, but floating point arithmetic is not always 100 % accurate:


var x = 0.2 + 0.1;         // x will be 0.30000000000000004
console.log(x);


// To solve the problem above, it helps to multiply and divide:
var y = (0.2 * 10 + 0.1 * 10) / 10;
console.log(y);


/* 
===================================================================================
NaN is a JavaScript reserved word indicating that a number is not a legal number.

Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

====================================================================================
*/

var x = 100 / "Apple";  // x will be NaN (Not a Number)
console.log(x);

// if string contains the number then 

var x = 100 / "10";     // x will be 10
console.log(x);

// You can use the global JavaScript function isNaN() to find out if a value is a number:

var x = 100 / "Apple";  
console.log(isNaN(x));  // true

//NaN used in + etc will make NaN whole exprsns.

console.log(typeof NaN);            // returns "number"


var myNumber = 2;
while (myNumber != Infinity) {   // Execute until Infinity
    myNumber = myNumber * myNumber;
    console.log(myNumber);
}


var x = 2 / 0;       // x will be Infinity
var y = -2 / 0;       // y will be -Infinity

console.log(x,y);
//Infinity is a number: typeof Infinity returns number.

//By default, JavaScript displays numbers as base 10 decimals

// But you can use the toString() method to output numbers from base 2 to base 36.

var myNumber = 32;
console.log(myNumber.toString(10));  // returns 32
console.log(myNumber.toString(32));  // returns 10
console.log(myNumber.toString(16));  // returns 20
console.log(myNumber.toString(8));   // returns 40
console.log(myNumber.toString(2));   // returns 100000




/*==================================================================================
            Number Methods

 ====================================================================================
*/

// The toString() method returns a number as a string

var x = 123;
console.log(x.toString());            // returns 123 from variable x
console.log((123).toString());        // returns 123 from literal 123
console.log((100 + 23).toString());   // returns 123 from expression 100 + 23

//toExponential() returns a string, with a number rounded and written using exponential notation.

var x = 9.656;
console.log(x.toExponential(2));     // returns 9.66e+0
console.log(x.toExponential(4));     // returns 9.6560e+0
console.log(x.toExponential(6));     // returns 9.656000e+0

// The parameter is optional. If you don't specify it, JavaScript will not round the number.


// toFixed() returns a string, with the number written with a specified number of decimals:

var x = 9.656;
console.log(x.toFixed(0));           // returns 10
console.log(x.toFixed(2));           // returns 9.66
console.log(x.toFixed(4));           // returns 9.6560
console.log(x.toFixed(6));           // returns 9.656000


// toPrecision() returns a string, with a number written with a specified length:
var x = 9.656;
console.log(x.toPrecision());        // returns 9.656
console.log(x.toPrecision(2));       // returns 9.7
console.log(x.toPrecision(4));       // returns 9.656
console.log(x.toPrecision(6));       // returns 9.65600


// valueOf() returns a number as a number.

var x = 123;
console.log(x.valueOf());            // returns 123 from variable x
console.log((123).valueOf());        // returns 123 from literal 123
console.log((100 + 23).valueOf());   // returns 123 from expression 100 + 23

/*================================================================
 In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).

The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.

There is no reason to use it in your code.

All JavaScript data types have a valueOf() and a toString() method.

===============================================================
*/    


// GLOBAL JAVASCRIPT METHODS 
// converting variables to numbers 
/* 
        The Number() method    -->  Returns a number, converted from its argument.
        The parseInt() method  --> 	Parses its argument and returns an integer
        The parseFloat() method --> Parses its argument and returns a floating point number.
*/


Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN
// If the number cannot be converted, NaN (Not a Number) is returned.
Number(new Date("2017-09-30"));    // returns 1506729600000
// The Number() method above returns the number of milliseconds since 1.1.1970.


// parseInt() parses a string and returns a whole number. 
// Spaces are allowed. Only the first number is returned:

parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 



//same for parseFloat() 

parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN


/* ==================================================
        Number Properties

        MAX_VALUE,MIN_VALUE,POSITIVE_INFINITY,NEGATIVE_INFINITY,NaN
   ============================================== 
*/

var x = Number.MAX_VALUE; console.log(x);  // 1.7976931348623157e+308
var x = Number.MIN_VALUE;

var x = Number.POSITIVE_INFINITY;
var x = 1/0 ;

var x = Number.NEGATIVE_INFINITY;
var x = -1/0;


//  Number properties belongs to the JavaScript's number object wrapper called Number.

// These properties can only be accessed as Number.MAX_VALUE.

// Using myNumber.MAX_VALUE, where myNumber is a variable, expression, or value, will return undefined:

var x = 6;
var y = x.MAX_VALUE;    // y becomes undefined

