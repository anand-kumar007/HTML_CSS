//let Vs var Vs const

// with let you can't declare variable twice

// var is function scoped and let is block scoped.
var name1 = "Sam";

var name1 =  "saie";

console.log(name1);


let name2 = "Samual";

let name2 = "sadi";

console.log(name2);

// that's the reason to use let and const to avoid redeclaration of variable by most programmers.


// const variables are readonly means we cannot reassign them later.


function printManyTimes(str)
{
    "use strict";

    // var senetence = str + " is cool!";
    const SENTENCE = str + " is cool!";

    senetence = str + " is amazing!";

    for(let i=0; i<str.length; i+=2)
    {
        console.log(SENTENCE);
    }
} 

printManyTimes("freeCodeCamp");


// so if you are sure that you'll never reassign a variable then make use of const. always.


// though you can mutate an array declared as const.

const arr = [5,72,22];

function editInPlace()
{
    "use strict";

   // arr = [20,332,121];  //error
   arr[0] = 20;
   arr[1] = 232;
   arr[2] = 121;
   arr[3] = 220;

   console.log(arr);
}

editInPlace();



// so solely const declaration can't prevent your data from mutation so what you can do is make use of Object.freeze(ObjectToFreeze)



function freezeObj()
{
    "use strict";

    // an object
    const MATHS_CONSTANT = {
        PI : 3.14 
    };


    Object.freeze(MATHS_CONSTANT);

    //try catch block

    try {
        MATHS_CONSTANT.PI = 100;
    }
    catch(ex)
    {
        console.log(ex);
    }

    //returning 
    return MATHS_CONSTANT.PI;
}

const PI = freezeObj();

console.log(PI); //will mutate the PI

