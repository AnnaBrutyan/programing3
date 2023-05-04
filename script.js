var side = 10;
var grassArr = [];
var matrix = [];
var grassEaterArr = [];
var fairArr = []
var krakArr = []


function setup() {
    frameRate(5)
    createCanvas(90 * side, 90 * side);
    background('#acacac');

  for (var y = 0; y < 90; y++) {
    matrix[y] = [];
    for (var x = 0; x < 90; x++) {
        let arr = [0, 1, 2, 3];
        let r = random(arr)
        matrix[y][x]=r;
        
    }
  }
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

  
}

function draw() {
    console.log(frameCount)
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        fill("green");
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 0) {
        fill("#acacac");
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 2) {
        fill("yellow");
        rect(x * side, y * side, side, side);

        
      }
      else if (matrix[y][x] == 3) {
        fill("blue");
        rect(x * side, y * side, side, side);
    }

  }}

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

  


}
