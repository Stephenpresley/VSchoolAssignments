function noDupes (str) {
    const newArr = []
    const arr = str.toLowerCase().split(' ');
    for(let i = 0; i < arr.length; i++) {
        let total = 0
        for(let j = 0; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                total++
                if (total > 1 && !newArr.includes(arr[i])){
                    newArr.push(arr[i])
                }
            }
        }
    } return newArr 
}

console.log(noDupes("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."))