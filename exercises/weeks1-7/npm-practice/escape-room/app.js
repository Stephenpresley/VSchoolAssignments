const readlineSync = require('readline-sync');

const actions = ['Put your hand in the hole', 'Find the key', 'Open the door'];
let isPlaying = true;
let hasKey = false;
const opt1 = 'You have died of dysentery';
const opt2 = 'You have found a key!';
const opt3 = 'The door is locked.';
const win = 'You have escaped! Or did you? *dramatic music plays* To be continued...';


while(isPlaying === true){
    action = readlineSync.keyInSelect(actions, 'You awaken in a dark room with no memory of how you got there. After surveying your surroundings, you decide you have to get out of there. What will you do?', {cancel: false})
    if(actions[action] === actions[0]){
        console.log(opt1)
        isPlaying = false
    }
    else if(actions[action] === actions[1]){
        console.log(opt2)
        hasKey = true
        isPlaying = true
    } 
    else {
        actions[action] === actions[2]
        if(hasKey === true){
            console.log(win)
            isPlaying = false
        } 
        else {
            hasKey === false
            console.log(opt3)
            isPlaying = true
        }
    }

}


