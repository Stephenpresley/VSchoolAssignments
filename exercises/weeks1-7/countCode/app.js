// const arr = ["code", "code", "cool"]
// const arr = ["code", "code", "cool", "code"]
// const arr = ["coe", "ode", "cool", "pool"]
// const str = "aaacodebbb"
// const str = "codexxcode"
// const str = "cozexxcope"

// const countCode = (arr) => arr.filter(str => str === "code").length 

// const countCode = str => str.match(/co.e/gi).length

const countCode = str => str.match(/.o.e/gi).filter(word => word[0].charCodeAt(0) < 91).length

console.log(countCode("aaacodebbb"))
console.log(countCode("codexxcode"))
console.log(countCode("Cozexxcope"))
// console.log(countCode(str))