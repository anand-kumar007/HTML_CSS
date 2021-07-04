// Build JavaScript Objects

/* 
objects are similar to arrays except that insted to using the indexes we use property to access. 
*/


var ourDog = 
{
    "name dog":"Camper",
    "legs":4,
    "tails":1,
    "friends":["everyone!"]
};

// bracket notation or . notation but if property have space then [] notation is must.

console.log(ourDog.legs);
console.log(ourDog["name dog"]);


var testObj = {
    12 : "Namath",
    16 : "Montana",
    19 : "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];


console.log(player);


//adding new property

testObj[11] = "sam";

console.log(testObj);


// delete the property

delete testObj[12];

console.log(testObj);


// testing for a property  in Obj


var myObj = 
{
    gift : "penny",
    pet : "kitten",
    bed : "sleigh"
};

function check(property)
{
    if( myObj.hasOwnProperty(property) )
    return myObj[property];

    else
    return "not found";
}

console.log(check("bed44"));



// a javaScript obj is a way to store flexible data.

var myMusic = [
    {
        "artist":           "billy Joel",
        "title":            "Piano Man",
        "release Year" :     2010,
        "formats" :         ["CD","8T","LP"],
        "gold" :            true
    },

// add second record here.

   {
       "artist": "Beau Carnes",
       "title": "Cereal Man",
       "release Year": 2014,
       "formats": ["YouTube"],
       
   }

];


// this was very similar to JSON

// nested Objects.


var myStorage = 

{
    "car" : 
    { "inside" : {"glove box" : "maps",
                  "passenger seat": "crumbs"},
                
       "outside" : {"trunk":"jack"}        
    }
};


var gloveBoxContent = myStorage.car.inside["glove box"];

console.log(gloveBoxContent);



// keep a copy of the object

// orr 

var copiedItem2 = JSON.parse(JSON.stringify(myStorage));

// var copiedItem = myStorage;

console.log(copiedItem2);