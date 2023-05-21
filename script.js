var side = 10;
socket = io();



function setup() {
  frameRate(5)
  createCanvas(90 * side, 90 * side);
  background('#acacac');

}

  
}

function drawmatrix(data) {
  matrix = data.matrix;
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

    }
  }
}

socket.on("matrix", drawmatrix);