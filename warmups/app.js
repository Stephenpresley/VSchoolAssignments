Array.prototype.filterV2 = function (callback) {
    const newArr = []

    for(let i = 0; i < this.length; i++) {
        if(callback(this[i])) {
            newArr.push(this[i])
        }
    }
    return newArr
}

const nums = [-4, 6, -32, 65, -21, 8, 9, 100]

const positives = nums.filterV2(num => {
    return num > 0
})

console.log(positives)