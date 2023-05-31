var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var messages = [];

app.use(express.static("."));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000);
grassArr = [];
grassEaterArr = [];
fairArr = [];
flowerArr = [];
WaterArr = [];
animalArr = [];
matrix = [];
 
 


Grass = require("./grass");
GrassEater = require("./grassEater");
fair = require("./fair");
flower = require("./flower");
Water = require("./Water");
Animal = require("./Animal");
let random = require("./random");

function genMatrix() {
   for (var y = 0; y < 90; y++) {
      matrix[y] = [];
      for (var x = 0; x < 90; x++) {
         let arr = [0, 1, 2, 3, 4, 5, 6];
         let r = random(arr)
         matrix[y][x] = r;
      }
   }
   return matrix
}

matrix = genMatrix();

for (var y = 0; y < matrix.length; ++y) {
   for (var x = 0; x < matrix[y].length; ++x) {
     if (matrix[y][x] == 1) {
       var gr = new Grass(x, y, 1);
       grassArr.push(gr);
     } else if (matrix[y][x] == 2) {
       var eater = new GrassEater(x, y, 2);
       grassEaterArr.push(eater);
     }
     else if (matrix[y][x] == 3) {
       var fair1 = new fair(x, y, 3);
       fairArr.push(fair1);
     }
     else if (matrix[y][x] == 4) {
      var flower1 = new flower(x, y, 4);
      flowerArr.push(flower1);
    }
    else if (matrix[y][x] == 5) {
      var Water1 = new Water(x, y, 5);
      WaterArr.push(Water1);
    }
    else if (matrix[y][x] == 6) {
      var animal1 = new Animal(x, y, 6);
      animalArr.push(animal1);
    }

}
}



function drawserverayin() {
   for (var i in grassArr) {
      grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
      grassEaterArr[i].move();
      grassEaterArr[i].eat();
      grassEaterArr[i].mul();
      grassEaterArr[i].die();
  
    }
  
    for (var i in fairArr) {
      fairArr[i].eat();
      fairArr[i].move();
      fairArr[i].mul();
      fairArr[i].die();
      
    }

    for (var i in flowerArr) {
      flowerArr[i].mul();
    }
    for (var i in WaterArr) {
      WaterArr[i].extinguish();
      WaterArr[i].move();
      WaterArr[i].mul();
      WaterArr[i].die();
      
    }
    for (var i in animalArr) {
      animalArr[i].eat();
      animalArr[i].move();
      animalArr[i].mul();
      animalArr[i].die();
      
    }
  
  let sendData = {
     matrix: matrix
  }  
io.sockets.emit("matrix", sendData)
}
setInterval(drawserverayin,1000)
