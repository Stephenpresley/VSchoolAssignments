const userInput = require('readline-sync');
let isAlive = true;
let hasWon = false;
let gotAway = false;
let inventory = ['Health Potion', 'Attack Potion']
let eInventory = ['Silver', 'Gold', 'Iron Dagger']

function Enemy (name, hp, att) {
    this.name = name
    this.hp = hp
    this.att = att
}

const enemy1 = new Enemy('Alucard', 500, 15)
const enemy2 = new Enemy('Richter Belmont', 200, 14)
const enemy3 = new Enemy('Simon Belmont', 800, 45)
const enemies = [enemy1, enemy2, enemy3]

function Hero (name, hp, att) {
    this.name = name
    this.hp = hp
    this.att = att
}

const hero = new Hero('Dracula', 800, 85)

console.log('Welcome to your death')
const name = userInput.question(
    `    ______________________________
    | @@@@@@@@@@@@@@@@@@@@@@@@@@ |
    | @          ____          @ |  
    | @         {    }         @ |
    | @          |  |          @ |
    | @          |  |          @ |
    | @   ^ -----|  |----- ^   @ |
    | @ < _______|  |______  > @ |
    | @          |  |          @ |
    | @          |  |          @ |
    | @          |  |          @ |
    | @          |  |          @ |
    | @          |  |          @ |
    | @         {    }         @ |
    | @          |__|          @ |
     | @                      @ /
       | @                  @ /    
        | @                @ /
          | @            @ /
           | @@@@@@@@@@@@ /
            ---------------
    What is your name, adventurer?
    `)

console.log(`Well met ${name}, I used to be an adventurer like you. Until I took an arrow to the knee.`)

while(isAlive && enemies.length > 0){
    let choice = userInput.keyIn('Would you like to (w) walk, (i) check inventory, (d) check hero details, or (q) Leave Game', {limit: 'widq'})
    if (choice === 'i') {
        printInventory()
    }else if(choice === 'w'){
        walk()
    }else if(choice === 'd'){
        console.log(`${name}, HP: ${hero.hp}, Att: ${hero.att}, Inventory: ${inventory}`)
    }else {
        isAlive = false
        console.log('You quit? You are a sad, sad little man. And you have my pity.')
    }
}

if(enemies.length === 0){
    hasWon === true
    console.log(
        `
        ▓██  ██▓ ▒█████   █    ██     ██░ ██  ▄▄▄    ██▒   █▒▓█████     █     █░ ▒█████   ███▄    █ 
        ▒██  ██▒▒██▒  ██▒ ██  ▓██▒   ▓██░ ██▒▒████▄ ▓██░   █▒▓█   ▀    ▓█░ █ ░█░▒██▒  ██▒ ██ ▀█   █ 
         ▒██ ██░▒██░  ██▒▓██  ▒██░   ▒██▀▀██░▒██  ▀█▄▓██  █▒░▒███      ▒█░ █ ░█ ▒██░  ██▒▓██  ▀█ ██▒
         ░ ▐██▓░▒██   ██░▓▓█  ░██░   ░▓█ ░██ ░██▄▄▄▄██▒██ █░░▒▓█  ▄    ░█░ █ ░█ ▒██   ██░▓██▒  ▐▌██▒
         ░ ██▒▓░░ ████▓▒░▒▒█████▓    ░▓█▒░██▓ ▓█   ▓██▒▒▀█░  ░▒████▒   ░░██▒██▓ ░ ████▓▒░▒██░   ▓██░
          ██▒▒▒ ░ ▒░▒░▒░ ░▒▓▒ ▒ ▒     ▒ ░░▒░▒ ▒▒   ▓▒█░░ ▐░  ░░ ▒░ ░   ░ ▓░▒ ▒  ░ ▒░▒░▒░ ░ ▒░   ▒ ▒ 
        ▓██ ░▒░   ░ ▒ ▒░ ░░▒░ ░ ░     ▒ ░▒░ ░  ▒   ▒▒ ░░ ░░   ░ ░  ░     ▒ ░ ░    ░ ▒ ▒░ ░ ░░   ░ ▒░
        ▒ ▒ ░░  ░ ░ ░ ▒   ░░░ ░ ░     ░  ░░ ░  ░   ▒     ░░     ░        ░   ░  ░ ░ ░ ▒     ░   ░ ░ 
        ░ ░         ░ ░     ░         ░  ░  ░      ░  ░   ░     ░  ░       ░        ░ ░           ░ 
        ░ ░   
        
        Congratulations, ${name}! You have defeated all of the enemies. This is what you picked up along the way: ${inventory.join(', ')}`)
}

function printInventory() {
    console.log(inventory)
}
let item

function itemDrop() {
    let item = eInventory[Math.floor(Math.random() * eInventory.length)]
    inventory.push(item)
}

function selectEnemy() {
    const random = Math.floor(Math.random() * enemies.length)
    const enemy = enemies.splice(random, 1)[0]
    return enemy 
}

function enemyEncounter() {
    let enemy = selectEnemy();
    let choice = userInput.keyIn(`A wild ${enemy.name} appeared! Would you like to (r) run away, (f) fight, or (q) Quit?`, {limit: 'rfq'})
    if(choice === 'r') {
        run()
    }else if(choice === 'f') {
        fight(enemy)
    }else {
        isAlive = false
        console.log('You quit? You are a sad, sad little man. And you have my pity.')
    }
}

function walk() {
    let random = Math.floor(Math.random() * 4)
    if(random === 3) {
        enemyEncounter()
    }else {
        console.log('You continue, for now...')
    }
}

function run(enemy) {
    gotAway = false;
    let runAway = Math.round(Math.random() * 2)
    if (runAway === 1){
        console.log('You got away safely')
        gotAway = true;
        return gotAway
    }else {
        fight(enemy)
        console.log('You were unable to escape your enemy.')
    }
}

function heroAtt(enemy) {
    let attack = Math.floor(Math.random() * hero.att)
    enemy.hp = enemy.hp - attack; 
    console.log(`You have struck a blow causing ${attack} dmg.`)
}

function enemyAtt(enemy) {
    let eAtt = Math.round(Math.random() * enemy.att)
    hero.hp = hero.hp - eAtt
    console.log(`Your enemy has attacked you for ${eAtt} dmg.`)
}
// let healthPotion
function useItem(){
    let choice = userInput.keyIn(`What item do you want to use? (h) Health Potion, (a) Attack Potion, (c) Cancel`, {limit: 'hac'})
    if(choice === 'h'){
        hero.hp = hero.hp += 100
        console.log(`You have healed yourself. Your HP is now ${hero.hp}`)
    }
    else if(choice === 'a'){
        hero.att = hero.att += 25
        console.log(`You feel invigorated! Your attack has gone up by 25.`)
    }else if(choice === 'c'){
        fight()
    }
}

function fight(enemy) {
    while(hero.hp > 0 && enemy.hp > 0) {
        let choice = userInput.keyIn(`What will you do next? (a) attack, (r) run away, or (u) use an item?`, {limit: 'aru'})
            if(choice === 'u'){
                useItem()
                enemyAtt(hero);
            }else if (choice === 'a'){
                heroAtt(enemy);
                enemyAtt(hero);
            }else if (choice === 'r'){
                let gotAway = run(enemy)
                if(gotAway) {
                    break
                }
            }
        if(hero.hp <= 0) {
            isAlive = false
            console.log(
                `                .o oOOOOOOOo                                            OOOo
                Ob.OOOOOOOo  OOOo.      oOOo.                      .adOOOOOOO
                OboO"""""""""""".OOo. .oOOOOOo.    OOOo.oOOOOOo.."""""""""'OO
                OOP.oOOOOOOOOOOO "POOOOOOOOOOOo.    "OOOOOOOOOP,OOOOOOOOOOOB'
                 O'OOOO'      OOOOo"OOOOOOOOOOO  .adOOOOOOOOO"oOOO'     OOOOo
                .OOOO'             OOOOOOOOOOOOOOOOOOOOOOOOOO'             OO
                OOOOO                 '"OOOOOOOOOOOOOOOO"                 oOO
               oOOOOOba.                .adOOOOOOOOOOba               .adOOOOo.
              oOOOOOOOOOOOOOba.    .adOOOOOOOOOO@^OOOOOOOba.     .adOOOOOOOOOOOO
             OOOOOOOOOOOOOOOOO.OOOOOOOOOOOOOO"   '"OOOOOOOOOOOOO.OOOOOOOOOOOOOO
             "OOOO"       "YOoOOOOMOIONODOO"   .   '"OOROAOPOEOOOoOY"     "OOO"
                Y           'OOOOOOOOOOOOOO: .oOOo. :OOOOOOOOOOO?'         : 
                :            .oO%OOOOOOOOOOo.OOOOOO.oOOOOOOOOOOOO?         .
                .            oOOP"%OOOOOOOOoOOOOOOO?oOOOOO?OOOO"OOo
                             '%o  OOOO"%OOOO%"%OOOOO"OOOOOO"OOO':
                                   $"   OOOO'  O"Y '  OOOO'  o             .
                .                  .     OP"          : o     .
                                          :
                                          .
            YOU DIED!
            `)
        }else if(enemy.hp <= 0) {
            isAlive = true
            hero.hp += 300
            itemDrop()
            console.log(`You have defeated ${enemy.name} your HP is now ${hero.hp}.`)
        }
    }

}