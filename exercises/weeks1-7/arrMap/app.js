// const numbers = [1, 2, 5, 88]

// const doubleNums = numbers.map((number)=>{
//     return number * 2
// })
// console.log(doubleNums)

// const strNums = numbers.map((number)=>{
//     return number.toString()
// })
// console.log(strNums)

// const names = ['stephen', 'wayne', 'presley', 'richard', 'benicio', 'del toro']

// const capNames = names.map((name)=>{
//     return name[0].toUpperCase() + name.substr(1)
// })
// console.log(capNames)

const people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
// const names = people.map((person)=>{
//     return person.name
// })
// console.log(names)

const canGo = people.map(function(person){
    if(person.age >= 18){
        return person.name + ' can go see the movie'
    }else {
        return person.name + " can't go see the movie"
    }
})
// console.log(canGo)

// const h1H2 = people.map((person)=>{
//     return `<h1>${person.name}</h1><h2>${person.age}</h2>`
// })
// console.log(h1H2)