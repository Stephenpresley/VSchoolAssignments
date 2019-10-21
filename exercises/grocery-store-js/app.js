const shopper = {
    name: "Harold",
    age: 102,
    isZombie: false,
    allTheThings: function() {
        return this.name + " " + this.age + " " + this.isZombie + " " + this.groceryCart
    },
    groceryCart: ["beans", " steak", " whiskey"]
};

console.log(shopper.allTheThings())