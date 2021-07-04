//create string using template literals

const person = {
    name : "Lina Paul",
    age : 27
};


//template literal with multiline and string interpolation
// ${JavaScript-code}

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);  


// ----------

const createPerson = (name,age,gender) => {

    return {
        name : name,
        age : age,
        gender : gender
    };
};

console.log(createPerson("Adam",56,"male"));


//easire way

const createPerson = (name, age, gender) => ({name,age,gender});

console.log(createPerson("Alex", 56, "male"));
