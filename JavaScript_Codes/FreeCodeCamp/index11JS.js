//object within a function

const bicycle = {
    gear : 2,
 
    //trivial way
    // setGear : function(newGear) {
    //     "use strict";
    //     this.gear = newGear;
    // }

    //concise way 
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(10);
console.log(bicycle.gear);


// use class syntax to define a constructor function

var spaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
};

var zeus = new spaceShuttle('jupiter');

console.log(zeus.targetPlanet);

//that was older way to create an object using the new keyword

//using constructor

class spaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}

var zeus = new spaceShuttle('jupiter');
console.log(zeus.targetPlanet);


//one more use case

function makeClass() {

    class vegetable {
        constructor(name){
            this.name = name;
        }
    }

    return vegetable;
}

const vegetable = makeClass();
const carrot = new vegetable('carrot'); 

console.log(carrot.name);



// use getter and setter for obj values


class Book {
    constructor(author){
        this._author = author;
    }

    //getter(for returning private variables)
    get writer()
    {
        return this._author;
    }

    //setter
    set writer(updatedAuthor)
    {
        this._author = updatedAuthor;
    }
}

