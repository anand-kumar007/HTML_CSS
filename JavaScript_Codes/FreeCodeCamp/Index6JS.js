// Loops in JS 

var myArr = [];

var i = 0;

while(i<5)
{
    myArr.push(i);
    i++;
}

console.log(myArr);


// for loop


for(var i=myArr.length-1; i>=0;i--)
{
    console.log(myArr[i]);
}



// nested for loop

function multiplyAll(arr)
{
    var product = 1;

    for(var i=0; i<arr.length;i++)
    {
        for(var j=0; j<arr[i].length;j++)
        {
            product *= arr[i][j];
        }
    }


    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
 

console.log(product);



// do while loop

var arr1 =[];

var i=0;

do {
    arr1.push(i);
    i++;
}while(i<5);

console.log(arr1);



// generating the random number 0-1 1 is excluded.(Math.random())

function randomFraction()
{
    return Math.random();
}

console.log(randomFraction());


// for random whole number

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);  //rounding to nearest integer using floor

console.log(randomNumberBetween0and19);

//random whole number within a range

function ourRandomRange(min,max)
{
    return (Math.floor(Math.random() * (max-min+1)) + min);
}

console.log(ourRandomRange(7,20)); //will give 7-20 both inclusive.



// parseInt function

// takes a string and returns an integer


function convertToInteger(str)
{
//  return parseInt(str);
//   can be used with a redix 
    return parseInt(str,2);
}


//if str can't be conveted to int it returns NaN
// console.log(convertToInteger("893"));
console.log(convertToInteger("101"));




// ternary operator


// condition ? statement if true : statement if false;


var a = 10;
var b = 12;

var result = a==b ? "a is : "+JSON.stringify(a) : "b is : " + JSON.stringify(b);

console.log(result);


//nested conditional operator

function checkSign(num)
{
    return num>0 ? "positive" : num<0 ? "negative" : "zero";

}

console.log(checkSign(0));





// 2:37 hour over