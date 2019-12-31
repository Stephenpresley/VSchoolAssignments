// give me a for loop that prints to the console all numbers between 0-100
//if the number is divisible by 3, print fizz to the console, instead of the number
//if the number is divisible by 5, print buzz to the console, instaed of the number
//if the number is divisible by 3 and 5, print fizzbuzz to the console

for(i = 0; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
    }else if(i % 5 === 0){
        console.log('buzz')
    }else if(i % 3 === 0) {
        console.log('fizz')
    }else {
        console.log(i)
    }
    
}