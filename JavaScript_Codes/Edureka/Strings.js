//strings comparison , objects in javascript can not be compared
// they always return the value false.
var x = "John";
var y = new String("John");
console.log(typeof x, " ",typeof y);
// typeof x will return string
// typeof y will return object

var x = "John";
var y = new String("John");
console.log(x==y);
// (x == y) is true because x and y have equal values

var x = "John";
var y = new String("John");
console.log(x===y);
// (x === y) is false because x and y have different types (string and object)


//Objects in javascript cannot be compared they always return false;
//think of them as objects in c++
var x = new String("John");
var y = new String("John");
console.log(x==y);
// (x == y) is false because x and y are objects

var x = new String("John");
var y = new String("John");
console.log(x===y);
// (x === y) is false because x and y are objects


/* 
==============================================================================
                        String Methods
==============================================================================
*/

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
console.log(sln);

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
console.log(pos);

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
console.log(pos);

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("John");
console.log(pos);

// Both methods accept a second parameter as the starting position for the search:

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate", 15);
console.log(pos);


var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate", 15);
console.log(pos);

// The lastIndexOf() methods searches backwards(from the end to the beginning), 
// meaning: if the second parameter is 15, the search starts at position 15, 
// and searches to the beginning of the string.


var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
console.log(pos);

/* 
==============================================================================
though indexOf() and search() functions performs the same operation but there
are differences between them.

The two methods are NOT equal. These are the differences:

The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).
================================================================================
*/


// we have functions for extracting part of string namely substring(),substr(),slice(),replace()

//toUpperCase(), toLowerCase(), concat(str1,str2), trim() {for white space removal from start and end}






/* 
======================================================================
                Extracting String Characters
        charAt(position)
        charCodeAt(position)
        property[]
=======================================================================
*/

var str = "HELLO WORLD";
var temp = str.charAt(0);            // returns H
console.log(temp);


// The charCodeAt() method returns the unicode of the character at a specified index in a string:
// The method returns a UTF - 16 code(an integer between 0 and 65535).

var str = "HELLO WORLD";
var temp = str.charCodeAt(0);         // returns 72
console.log(temp);

var str = "HELLO WORLD";
var temp = str[0];
console.log(temp);


/* =======================================================================================
    Property access might be a little unpredictable:

    It does not work in Internet Explorer 7 or earlier
    It makes strings look like arrays (but they are not)
    If no character is found, [ ] returns undefined, while charAt() returns an empty string.
    It is read only. str[0] = "A" gives no error (but does not work!)

===========================================================================================
*/
var str = "HELLO WORLD";
str[0] = "A";             // Gives no error, but does not work
str[0];                   // returns H



// A string can be converted to an array with the split() method:

var txt = "anand,boss,chunks|dolfie emmet";   // String
var arr1 = txt.split(",");          // Split on commas
var arr2 = txt.split(" ");          // Split on spaces
var arr3 = txt.split("|");          // Split on pipe

console.log(arr1);
console.log(arr2);
console.log(arr3);


var str = "Hello";
var arr = str.split("");
console.log(arr);  //will consist of characters
