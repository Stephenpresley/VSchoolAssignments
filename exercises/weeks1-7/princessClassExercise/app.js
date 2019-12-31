gameActive = true
class Player {
    constructor(name, totalCoins, status, hasStar = false){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }
   
    gotHit() {
        if(this.status === 'Powered Up') {
            this.status = 'Big'
        }else if(this.status === 'Big') {
            this.status = 'Small'
        }else if(this.status === 'Small'){
            this.status = 'Dead'
            gameActive = false
        }
    }
    gotPowerup() {
        if(this.status === 'Small') {
            this.status = 'Big'
        }else if(this.status === 'Big') {
            this.status = 'Powered Up'
        }else if(this.status === 'Powered Up') {
            this.hasStar = true
            console.log('Congratulations! You got a star!')
        }
    }
    addCoin() {
        this.totalCoins++
    }
    print() {
        console.log(
            `
            Name: ${this.name}
            Status: ${this.status}
            Total Coins: ${this.totalCoins}
            Has Star: ${this.hasStar}
            `
        )
    }
}

const mario = new Player('Mario', 0, 'Small')
const myInt = setInterval(()=>{
    if(gameActive === true){
        function range(){
            const num = Math.floor(Math.random() * 3)
            if(num === 0){
                mario.gotHit()
            }else if(num === 1){
                mario.gotPowerup()
            }else {
                mario.addCoin()
            }
        }
        mario.print()
        range()
    }else if(gameActive === false){
        clearInterval(myInt)
    }
}, 1000)
