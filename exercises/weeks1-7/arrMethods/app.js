const fruit = ["banana", "apple", "orange", "watermelon"];
const vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
fruit.shift()
const newFruit = fruit.indexOf('orange')
fruit.push(1)
const vLength = vegetables.length
vegetables.push(3)
const food = fruit.concat(vegetables)
const lessFood = food.splice(4, 2)
const rev = food.reverse()
const str = rev.join()
console.log(str)
