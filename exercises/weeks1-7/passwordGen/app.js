function randomPasswordGenerator(passwordLength) {
    let  password = [];
    let randPass;
    for (let i = 0; i < passwordLength; i++){
        randPass = String.fromCharCode(Math.round(Math.random() * 94) + 32)
        password.push(randPass)
    }
    return password.join('')
}

console.log(randomPasswordGenerator(18))
