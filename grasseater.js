const LivingCreature = require("./LivingCreature");
let random = require("./random");

module.exports = class GrassEater extends LivingCreature {

    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 10;
        this.directions = [];
    }


    chooseCell(ch) {
        this.getNewCoordinates();
        return super.chooseCell(ch);

    }



    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }




    move() {
        this.energy -= 5;
        var newCell = random(this.chooseCell(0));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 2
            this.y = newY;
            this.x = newX;

        }
    }




    eat() {
        var newCell = random(this.chooseCell(1));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 2

            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;

                }
            }

            this.y = newY;
            this.x = newX;
            this.energy += 5;
        }
    }


    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(1));


        if (newCell && this.multiply >= 15) {
            var newGrassEater = new GrassEater(newCell[0], newCell[1],);
            grassEaterArr.push(newGrassEater);
            matrix[newCell[1]][newCell[0]] = 2;
            this.multiply = 0;
        }
    }





    die() {

        if (this.energy <= 5) {
            matrix[this.y][this.x] = 0;


            for (var i in grassEaterArr) {
                if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }

        }

    }

}


