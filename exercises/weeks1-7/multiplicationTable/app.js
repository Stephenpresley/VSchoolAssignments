function multTable(n){
    const numArr2 = []
    for(i = 0; i <= n; i++){
        let numArr = []
        for(j = 0; j <= n; j++) {
            numArr.push(i*j)
        }numArr2.push(numArr)
    }return numArr2
}
console.log(multTable(12))