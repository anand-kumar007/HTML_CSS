
//destructring assignment to assign variables from objects.


var voxel = {x:3.6,y:7.4,z:6.54};

//trivial way

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

//using destructring 

const {x:a, y:b,z:c} = voxel;  //a=3.6,b=7.4,c=6.54


//use case 

const AVG_TEMPERATURE = {

    today : 77.5,
    tomorrow : 79
};

function getTempOfTomorrow(AVG_TEMPERATURE){

    "use strict";

    const {tomorrow : tempOfTom} = AVG_TEMPERATURE;

    return tempOfTom;
}

console.log("tomorrows temp is : ");
console.log(getTempOfTomorrow(AVG_TEMPERATURE));



// destructing for swapping

let a = 8, b=6;

(() => {
    "use strict";

    [a,b] = [b,a];
})();

console.log(a,b);

//destructing with rest operator


const source = [1,2,3,4,5,6,7,8,9];

function removeFirstTwo(list) {

    const [ , , ...arr] = list; //escape first and second;

    return arr ;
}

console.log(removeFirstTwo(source));


//for passing an obj as an arg to function use destructring assignment.

const stats = {
    max :59.78,
    standard_deviation : 4.32,
    median : 34.54,
    mode : 23.87,
    min : -0.75,
    average :35.85
};

const half = (function() {

    //instead passing whole stats obj destructe it.

    // return function half(stats){
    //     return (stats.max + stats.min) / 2.0 ;
    // }


    //passing the things that we need 
    //used for api call and all.
    
    return function half({max,min}) {
        return (max + min) / 2.0;
    }
})();

console.log(half(stats));