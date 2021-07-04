// function in JS for reuseable codes

function add(a,b)
{
    return (a+b)*10;
}

console.log(add(3,4));


// Global Scope(visiblity of variables is defined using scope of variable) and Functions


// note that variables defined without any datatypes are actually gloabl

var myGlobal = 10;

function fun1()
{
    //this would be global variable now
    // if you use var let etc here that would not be global
    oopsGlobal = 5;
}

function fun2()
{
    var output = "";
    
    if(typeof myGlobal != "undefined")
    {
        output += "myGlobal : "+ myGlobal;
    }

    if(typeof oopsGlobal != "undefined")
    {
        output += " oopsGlobal : "+ oopsGlobal;
    }

    console.log(output);
}

fun1();
fun2();


// if a variable is defined within a funciton then it has a local scope

function myLocalScope()
{
    var myVar = 10;

    console.log(myVar);
}

myLocalScope();

// console.log(myVar);  //error



// can have local and global variable with same name

// local variable surpasses global variable

var outerWear = "T-Shirt";

function myOutFit()
{
    var outerWear = "Jeans";
    // took precedence over global variable
    return outerWear;
}

console.log(myOutFit());

console.log(outerWear);



// if you don't define a return value for a function it has an undefined return value.

var sum = 0;

function addThree()
{
    sum += 3;
}

function addFive()
{
    sum += 5;

}

console.log(addFive()); //would be 



//  1 hour 6 mins over till here.

// Queue using the function 

function nextInLine(arr,item)
{
    //add the item to the last of queue.
    arr.push(item);

    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before : "+ JSON.stringify(testArr));

console.log(nextInLine(testArr,10));

console.log("After : "+ JSON.stringify(testArr));