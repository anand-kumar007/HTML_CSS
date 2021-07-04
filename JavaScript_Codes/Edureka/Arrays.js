var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length;   // the length of fruits is 4


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");    // adds a new element (Lemon) to fruits

// remaining values would become undefined in this case

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[6] = "Lemon";    // adds a new element (Lemon) to fruits


/* 
    In JavaScript, arrays use numbered indexes.  

    In JavaScript, objects use named indexes.

    Arrays are a special kind of objects, with numbered indexes.
*/


/* =================================================================
            Array Methods 
  ==================================================================
*/            

// Converting Arrays to Strings

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

// The join() method also joins all array elements into a string.

// It behaves just like toString(), but in addition you can specify the separator:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join("&"));


// pop() -->returns the last element and delete it
// push() --> adds the new element to last and return the new length of the array

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.pop();      // the value of x is "Mango"
console.log(x);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.push("Kiwi");   //  the value of x is 5
console.log(fruits);
console.log(x);


// shift() --> like pop() only but removes and returns the firstElement instead of last
// unshift() --> adds the element to beginning of array and returns the newlength of array

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.shift();    // the value of x is "Banana"
console.log(fruits);
console.log(x);


var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.unshift("Lemon");    // Returns 5
console.log(fruits);
console.log(x);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);  // 4
fruits[fruits.length] = "Kiwi";          // Appends "Kiwi" to fruits
console.log(fruits.length); //5
console.log(fruits);

//splice() for adding and removing can also be used.

// delete a[0] -- may lead to array holes use pop() and shift() insted.

//Mergining the arrays

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);
console.log(myChildren);


// The concat() method can take any number of array arguments:

var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3

console.log(myChildren);

// can be used with the strings

var arr1 = ["Emil", "Tobias", "Linus"];
var myChildren = arr1.concat("Peter");
console.log(myChildren);


// slicing an array
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);
console.log(citrus); // [ 'Orange', 'Lemon', 'Apple', 'Mango' ]

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
console.log(citrus);  //from 1 , 3 is not included


// All JavaScript objects have a toString() method.

/* ==========================================================
    Sorting Arrays

   ========================================================== 
*/

// The sort() method sorts an array alphabetically:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // Sorts the elements of fruits
console.log(fruits);

// The reverse() method reverses the elements in an array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // First sort the elements of fruits
fruits.reverse();     // Then reverse the order of the elements
console.log(fruits);


// Numeric sort()

// By default, the sort() function sorts values as strings.

// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce incorrect result when sorting numbers.

// You can fix this by providing a compare function:

var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b });
//this would sort in ascendigng order
console.log(points);  // [ 1, 5, 10, 25, 40, 100 ]

var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return b - a });
// in descending order 
console.log(points);  // [ 100, 40, 25, 10, 5, 1 ]


/*
The Compare Function

The purpose of the compare function is to define an alternative sort order.

The compare function should return a negative, zero, or positive value, depending on the arguments:

function(a, b){return a - b}

When the sort() function compares two values, it sends the values to the compare function, 
and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative a is sorted before b.

If the result is positive b is sorted before a.

If the result is 0 no changes are done with the sort order of the two values.
*/

/*
    The compare function compares all the values in the array, two values at a time (a, b).

    When comparing 40 and 100, the sort() method calls the compare function(40, 100).

    The function calculates 40 - 100 (a - b), and since the result is negative (-60),  
    the sort function will sort 40 as a value lower than 100.

*/


// sorting in any random order ()

var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return 0.5 - Math.random() });
console.log(points);


// find min and max element in an array


// if it is asecinding order 
var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b });
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value

// Sorting a whole array is a very inefficient method 
//if you only want to find the highest (or lowest) value.

// use user defined approach


// find max

function myArrayMax(arr) {
    var len = arr.length;
    var max = -Infinity;  //see -infinity is used
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}

//find min 

function myArrayMin(arr) {
    var len = arr.length;
    var min = Infinity;  // see +infinity is used
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}



/* ===================================
    Array Iteration methods

   ====================================
*/

// The forEach()method calls a function (a callback function) once for each array element.

var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

console.log(txt);  // 45,4,9,16,25,

function myFunction(value, index, array) {
    txt = txt + value + ",";
}



// map()

var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

console.log(numbers2);  // [ 90, 8, 18, 32, 50 ]

function myFunction(value, index, array) {
    return value * 2;
}


// filter()

var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

console.log(over18);  // [ 45, 25 ]

function myFunction(value, index, array) {
    return value > 18;
}



//reduce 

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

console.log(sum);  // 99

function myFunction(total, value, index, array) {
    return total + value;
}

/*
function myFunction(total, value) {
  return total + value;
}
 */

//reduce method can accept an initial value

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction, 100);

console.log(sum);   //199
console.log(numbers1);

function myFunction(total, value) {
    return total + value;
}


// reduceRight() function 

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction);

console.log(sum);
console.log(numbers1);

function myFunction(total, value, index, array) {
    return total + value;
}

//every() checks if all the elements passes a particular test or not

var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);
console.log(allOver18); //false

function myFunction(value, index, array) {
    return value > 18;
}


var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);

console.log(someOver18); //true

function myFunction(value, index, array) {
    return value > 18;
}


// indexOf()

var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
console.log(a); //first occurance index is returned

//lastIndexOf()

var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");
console.log(a);   //index of last occurance is given



//find()
// returns first array element that passes the condition


var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

console.log(first); //25 

function myFunction(value, index, array) {
    return value > 18;
}


//findIndex() -same 

var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);

console.log(first);  //3

function myFunction(value, index, array) {
    return value > 18;
}