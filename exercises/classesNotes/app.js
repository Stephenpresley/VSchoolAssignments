//constructor func (ES5)

// function Person (name, age){
//     this.nm = name;
//     this.a = age;
// }

// Person.prototype.speak = function(){
//     console.log('I speak')
// }

// const stephen = new Person('Stephen', 32)
// const bob = new Person('Bob', 56)

// stephen.speak()

//Classes (ES6)

// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     speak(){
//         console.log('Hello')
//     }
// }

// const stephen = new Person('Stephen', 32)
// console.log(stephen)
// stephen.speak()

// class Vehicle {
//     constructor(make, model){
//         this.make = make
//         this.model = model
//     }
//     start(){
//         console.log('VROOM')
//     }
// }

// class Motorcycle extends Vehicle {
//     constructor(make, model, hasSideCar){
//         super(make, model)
//         this.hasSideCar = hasSideCar;
//     }
//     popWheely(){
//         console.log('driving on one wheel')
//     }
// }

// const sportster = new Motorcycle('Harley', 'Iron 883', false)
// console.log(sportster)
// sportster.start()
// sportster.popWheely()

let total = 0
const myInt = setInterval(()=>{
    console.log("Hello")
    total++
    if(total === 10){
        clearInterval(myInt)
    }
}, 1000)
