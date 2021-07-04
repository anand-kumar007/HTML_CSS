/*
"McDonalds".split("").reverse().join();
---------------------------------------------------------
What exactly am I doing ?
Am I splitting each character(M c D o n a l d s), 
then reversing it(s d l a n o D c M) 
then joining to get(sdlanoDcM) ?
---------------------------------------------------------
Make sure you specify an empty string to .join, otherwise 
you'll get commas between each character:

"McDonalds".split("").reverse().join(""); // "sdlanoDcM"
*/

function reverseString(s) {
    try {
        s = s.split("").reverse().join("");
    }
    catch (err) {
        // console.log(err.name);
        console.log(err.message);
    }
    finally {
        console.log(s);
    }

    // here error contains msg,and name of the error so you need to decide which one
    //to choose from
}

//this performs a check if the input give is not a string it throws an exception
//and output would be same as input provided else if it is string output would be
//reverse of the that string.

// reverseString("1234")
reverseString(Number("1234"));