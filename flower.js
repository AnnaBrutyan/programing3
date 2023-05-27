const LivingCreature = require("./LivingCreature");
let random = require("./random");

module.exports = class flower extends LivingCreature {
    constructor(x, y, index) {
        super(x,y,index)
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
        ]
    }

    chooseCell(ch) {
   return super.chooseCell(ch);

    }


    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));


        if (this.multiply >= 10 && newCell) {
            var newflower = new flower(newCell[0], newCell[1]);
            flowerArr.push(newflower);
            matrix[newCell[1]][newCell[0]] = 4;
            this.multiply = 0;
        }
    }
}

