// whenever you have an anonymous function make it a arrow function it will make it quicker to Write . 

var magic = function() {
    return new Date();
};


console.log(magic());

//same thing just quicker to write.

var magic =  () => {
    return new Date();
};

console.log(magic());

//more compact form
var magic = () =>  new Date();
console.log(magic());



//arrow function with arguments

var myConcat = function(arr1,arr2) {
    return arr1.concat(arr2);
}

console.log(myConcat([10,21],[1,2,3,4]));


var myConcat = (arr1, arr2)=> arr1.concat(arr2);
console.log(myConcat([10, 21], [1, 2, 3, 4]));



// arrow functions works well with higher order functios.
// map, filter, reduce
// these functions take other functions as their arguments.


//filter out the positive and integers numbers only

const realNumberArray = [4,5.6,9.8,-11.2,10,19,22];

const squareList = (arr) => {

    const requiredValues = arr.filter(num => Number.isInteger(num) && num >0).map(x => x*x);

    return requiredValues;
}


const reqValues = squareList(realNumberArray);
console.log(reqValues); 



// rest operator ...args(will convert everything to the array called args)


const sum = (function() {
    return function sum(x,y,z){
        const arr =[x,y,z];

        return arr.reduce((a,b)=> a+b, 0);
    };
})();

console.log(sum(1,2,3));

//using the rest operator also any-numbers of arguments

const sum = (function () {
    return function sum(...args) {
        // const arr = [x, y, z];

        return args.reduce((a, b) => a + b, 0);
    };
})();

console.log(sum(1, 2, 3,10,20));



//spread operator

const arr1 = ['JAN','FEB','MARCH','APRIL','MAY'];

let arr2 ;

(function(){

    arr2 = arr1; //this is not simply the copying, if we change arr1 items then arr2's items also gets changed.

    arr1[0]='potato';
})();

console.log(arr2);


//using the spread operator [...arrarName];

const arr1 = ['JAN', 'FEB', 'MARCH', 'APRIL', 'MAY'];

var arr2;

(function () {

    arr2 = [...arr1]; //this is not simply the copying, if we change arr1 items then arr2's items also gets changed.

    arr1[0] = 'potato';
})();

console.log(arr2);
