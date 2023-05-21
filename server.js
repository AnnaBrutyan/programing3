var express = require("express");
const GrassEater = require("./grasseater");
var app = express();

app.use(express.static("../programing3"));

app.get("/", function (req, res) {
   res.redirect("index.html");
});

server.listen(3000, function () {
   console.log("Example is running on port 3000");
});

grassArr = [];
grassEaterArr = [];
fairArr = [];
matrix = [];


Grass = require("./modules/grass");
GrassEater = require("./modules/grassEater");
fair = require("./modules/fair");
let random = require("./random");

function genMatrix() {
   for (var y = 0; y < 90; y++) {
      matrix[y] = [];
      for (var x = 0; x < 90; x++) {
         let arr = [0, 1, 2, 3];
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
  
  let sendData = {
     matrix: matrix
  }  
io.sockets.emit("matrix", sendData)
}