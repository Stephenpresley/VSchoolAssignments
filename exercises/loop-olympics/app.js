// var fruit = ["banana", "orange", "apple", "kiwi"]

// for(let i = 0; i < fruit.length ; i++){
//     console.log(fruit[i])
// }

// const numbers = []
// for(let i = 0; i < 10; i++){
//     numbers.push(i)
    
// }
// console.log(numbers)

// for(let i = 0; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// const someFruit = []
// for(i = 0; i < fruit.length; i++){
//     if(i % 2 === 0){
//         someFruit.push(fruit[i])
        
//     }

// }
// console.log(someFruit)

// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]
//   for(i = 0; i < peopleArray.length; i++){
//       console.log(peopleArray[i].name)
//   }

// const names = []
// const occupations = []

// for(i = 0; i < peopleArray.length; i++){
//     if(i % 2 === 0){
//         names.push(peopleArray[i].name)
//     }else if(i % 2 !== 0){
//         occupations.push(peopleArray[i].occupation)
//     } 
// }
// console.log(names, occupations)
// [[0, 0, 0], [1, ]


const matrix = []
for(let i = 0; i < 3; i++){
    matrix.push([])
    for(let j = 0; j < 3; j++){
        matrix[i].push(j)
    }    
}
const i = "x";
console.log(matrix)