var pen = {
    color: "black",
    price: 2,
    isGelPen: false,
    write: function () {
        console.log("I'm a " + this.color + " pen that costs $" + this.price);
    }
}
var bag = {
    color: "green",
    pockets: 3,
    size: "small",
    write: function () {
        console.log("Here we have a " + this.color + " bag that has " + this.pockets + " pockets")
    }
}
var homosapien = {
    hairColor: "dark brown",
    name: "Crystal"
    
}

pen.write();
bag.write();