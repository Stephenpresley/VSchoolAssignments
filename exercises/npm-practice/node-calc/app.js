const readlineSync = require("readline-sync")

const firstNum = readlineSync.question('What is your first number?')
const secondNum = readlineSync.question('What is your second number?')
const operations = ['add', 'subtract', 'multiply', 'divide']
const operation = readlineSync.keyInSelect(operations, 'What operation do you want to perform')

if(operations[operation] === 'add'){
    let total = +firstNum + +secondNum
    console.log(total)
}else if(operations[operation] === 'subtract'){
    let total = +firstNum - +secondNum
    console.log(total)
}else if(operations[operation] === 'multiply'){
    let total = +firstNum * +secondNum
    console.log(total)
}else if(operations[operation] === 'divide'){
    let total = +firstNum / +secondNum
    console.log(total)
}