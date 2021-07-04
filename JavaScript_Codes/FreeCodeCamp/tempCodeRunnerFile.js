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