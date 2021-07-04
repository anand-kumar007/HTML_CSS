// conditional statements and loops

function fun1(num)
{

    if(num == 12)
    {
        return "Yes equal to 12";
    }

    return "No Not equal to 12";
}

console.log(fun1('12'));  //not the strict equlaity opretor means will convert them to same data type while checking.


// while the strict equality won't do so. 

function fun2(num)
{
    if(num == 12 )
    {
        if(num === 12)
        return "Yes strictly 12";
        else
        return "though its 12 but not strictly.";
    }
    return "Not the 12";
}
console.log(fun2('12'));


// same is true for inequality operator(!=).
// that also performs type conversion

// so better to use strict inequality operator.
// (!==)


// similarly >,<,<=,>= etc.

// &&,||

function fun3(val)
{
    if(val < 10 || val >20)
    {
        return "either less than 10 or greater than 20";
    }

    return "Nooooooooooooooo";
}

console.log(fun3(23));


// similary if else, ladder also there in JS.

//while using if else ladder order is important.

function fun4(val)
{
    if(val < 10) console.log("Less than 10");
    else if (val < 5) console.log("Less than 5");
    else
    console.log("Greater than or equal to 10");
}

fun4(3);  // see here.

// once the first condition is met it doesn't check for other.


// Golf code

var names = ["Hole-in-one!","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home!"];

function golfScore(par, strokes)
{
    if(strokes == 1)
    {
        return names[0];
    }
    else if (strokes <= par - 2 )
    {
        return names[1]
    }
    else if (strokes == par - 1)
    {
        return names[2];
    }
    else if (strokes == par)
    {
        return names[3];
    }
    else if (strokes == par +1)
    {
        return names[4];
    }
    else if( strokes == par +2)
    {
        return names[5];
    }
    else if(strokes >= par +3)
    return names[6];
}

console.log(golfScore(5,4));

/* 
Strokes         Return
1               "Hole-in-one!"
<= par -2       "Eagle"
par-1           "Birdie"
par             "Par"
par + 1         "Bogey"
par + 2         "Double Bogey"
>= par + 3      "Go Home!"
*/



// switch case insted of else if ladder.

//case matching uses strict equality operator.

function fun5(val)
{
    var answer = "";
    switch(val)
    { 
        case 1 : answer = "alpha"; break;
        case 2 : answer = "beta"; break;
        case 3 : answer = "gamma"; break;
        case 4 : answer ="delta"; break;

        case 5 :
        case 6 :
        case 7 : answer = "5,6,7"; break;        

        default : answer ="Invalid ";
    }

    return answer;
}


console.log(fun5(6));


// remenber that ifelse chain is more versatile than if-else statement.

