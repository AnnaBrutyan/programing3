const LivingCreature = require("./LivingCreature");
let random = require("./random");

module.exports = class fair extends LivingCreature{
    constructor(x, y, index) {
       super(x,y,index)
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
        this.energy-= 4;
        var newCell = random(this.chooseCell(2));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 1;
            matrix[newY][newX] = 3
            this.y = newY;
            this.x = newX;
           
        }
    }




    eat() {
        var newCell = random(this.chooseCell(2));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
           

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 3;
           
            for (var i in fairArr) {
                if (newX == fairArr[i].x && newY == fairArr[i].y) {
                    fairArr.splice(i, 2);
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
        var newCell = random(this.chooseCell(2));
        if (newCell && this.multiply >= 7) {
          var newfair = new fair(newCell[0], newCell[1],);
          fairArr.push(newfair);
          matrix[newCell[1]][newCell[2]] = 3;
          this.multiply = 0;
        }
      }
   




    die() {
       
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;


            for (var i in fairArr) {
                if (this.x == fairArr[i].x && this.y == fairArr[i].y) {
                    fairArr.splice(i, 1);
                   
                    break;
                }
            }

        }

    }

}

