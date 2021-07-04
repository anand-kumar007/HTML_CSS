// let cars = ["BMW", "Volvo", "Mini"];
var cars = 'Bently';
let text = "";

for (let x of cars) {
    text += x + " ";
}

console.log(text);



let actress = new Map([
    ["firstName", "Julia"],
    ["lastName", "Roberts"],
    ["dateOfBirth", "October 28, 1967"],
    ["nationality", "American"],
    ["firstMovie", "Satisfaction"]
]);

// Print each Key-Value pair in the map
for (let info of actress) {
    console.log(info);
}
