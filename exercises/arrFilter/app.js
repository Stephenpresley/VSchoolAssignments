// const numbers = [2, 44, 6, 33, 3]

// const greaterThanFive = numbers.filter((number)=>{
//     return number > 5
// })
// console.log(greaterThanFive)

// const even = numbers.filter((number)=>{
//     return number % 2 ===0
// })
// console.log(even)

// const strings = ["dog", "wolf", "by", "family", "eaten", "camping"]

// const less = strings.filter((string)=>{
//     return string.length < 5
// })
// console.log(less)

// const people = [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]

// const illuminati = people.filter((person)=>{
//     return person.member === true
// })
// console.log(illuminati)

const people = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

const oldEnough = people.filter((person)=>{
    return person.age >= 18
})
console.log(oldEnough)