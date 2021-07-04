//fill in the blank game using str 

function fillBlank(Noun,Adj,Verb,Adverb)
{
    //make a sentence from data provided

    var result = "";
    result += "The "+ Adj + " " + Noun + " " + Verb + " " + " to the store "+ Adverb;

    return result;
}

console.log(fillBlank("dog",
"big","ran",
"quicklly"));

console.log(fillBlank("Bike",
    "slow", "flew",
    "slowly"));

/*
Array in JavaScript
*/

var arr = ["John",12,[10,23,24]];

console.log(arr);
console.log("length of array is : ", arr.length);


// nested arrays(say multi dimensional arrays)

var arr2 = [["OOPs",40],["DBMS",30]];

console.log(arr2);


// indexing for the arrays 

console.log(arr2[0][1]);


// changing the arrays in JS
arr2[0][1]=100;

console.log("new arr2 is : ",arr2);


// append data to end of array in JS using push function

arr2.push(['OS',80]);
console.log("new arr2 now is : ",arr2);

// popping the elements in JS (removes last element)

var deletedElement = arr2.pop();
 
console.log(deletedElement);

// shift Funciton for removing the first element 

deletedElement = arr.shift();

console.log(deletedElement);


// add element to beginning of element using unshift

console.log("arr now is : ",arr);
arr.unshift("John");

console.log("again arr is : ",arr);


/*
Shopping list using the nested array
*/

var myList = [['cereal',3],['milk',2],['bananas',3],['juice',2],['eggs',12]];

