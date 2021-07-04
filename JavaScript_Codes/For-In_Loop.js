var actress = {
    firstName: "Julia",
    lastName: "Roberts",
    dateOfBirth: "October 28, 1967",
    nationality: "American",
    firstMovie: "Satisfaction"
};

for (var x in actress) {
    console.log("actress." + x + " = " + actress[x]);
}

// x points to each property of actress object here 

/*
In the code below, we create an object (referenced by the  variable) 
and iterate over its enumerable properties:
*/

// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// like (Array, Map, Set, String, TypedArray, arguments object, etc.)


var person = { fname: "John", lname: "Doe", age: 25 };

var text = "";
var x;
for (x in person) {
    text += person[x];
}

console.log(text);  // for/in doesn't traverse in order so not recommended to used in arrays
                    // for arrays for/of or Array.forEach() and traditional for() are preferred.