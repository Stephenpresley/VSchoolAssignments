const intArr = [1, 3, 5, 7, 2, 4]
const newArr = []

function twoSum (intArr, num) {
    for(let i = 0; i < intArr.length; i++) {
        for(let j = 0; j < intArr.length; j++) {
            if(intArr[i] + intArr[j] === num && newArr.length === 0) {
                newArr.push([i, j])
            }
        }
    }
    return newArr
}

console.log(twoSum(intArr, 4))