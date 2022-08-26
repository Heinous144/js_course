console.log("Hello world!");
//alert("This is an alert");
let name = "Heinous"
let Name = "Quan"
console.log("name: " + name+ " ,Name: " + Name);
let x = 10
let z
console.log("Gia tri cua x la:",x)
console.log("Gia tri cua y la: " + x)
console.log("Gia tri cua z la:" ,x**3)
console.log("Gia tri cua z2 la:" ,x*3)
console.log(10 == '10')
console.log(10 === '10')

let marks = 6.2
if (marks > 0 && marks <= 4) {
    console.log ('Bad')
} else if (marks >4 && marks <=6) {
    console.log ('Normal')
} else if (marks >6 && marks <8) {
    console.log ('Good')
} else if (marks >=8 && marks <=10) {
    console.log ('Excellent')
} else {
    console.log ('Marks is Undefined')
}

for(let i = 0; i < 10; i++) {
    if(i==3){
        break
    }
    console.log(`i = ${i}`)
}

/* chạy trực tiếp trên vscode
1. mở terminal
2. node + tên_file.js

*/

let cars = [
    'Mecedes',
    'Honda',
    'Toyota',
    'Mazda'
]
// console.log ('using foreach')
cars.forEach(function(car){
    console.log(car)
})

// console.log('using foreach with arrow function')
cars.forEach((car) => {
    console.log (car)
})

for(let i = 0; i <= cars.length-1; i++) {
    console.log (cars[2])
}

for(let i = 0; i <= cars.length-1; i++) {
    console.log (`cars = ${i}`)
}
for(let name of cars){
console.log (`CarName = ${name}`)
}

for(let car in cars){
    console.log (`cars = ${car}`)
}

let test1 =() => {
    console.log ('function test')
}

let test2 = () => {
    console.log ('function test2')
}

test1 ();
test2 ()

for (let car of cars){
    console.log (`name = ${car}`)
}

for (let carx in cars){
    console.log (`name = ${carx}`)
}

cars.forEach ((car, index, array) => {
console.log (`${index+1}.${car}`)
})

cars.push("Honda X")
// console.log (cars)
let filteredcars = cars.filter(function(car){
    return car.includes ("Honda")
    })
    console.log (`name filter = ${filteredcars}`)