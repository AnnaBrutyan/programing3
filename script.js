var side = 10;
socket = io();



function setup() {
  frameRate(5)
  createCanvas(90 * side, 90 * side);
  background('#acacac');

}

  


function drawmatrix(data) {
  matrix = data.matrix;

  if(frameCount % 60 == 0)
  socket.emit('send data', generateStatistics())
days++
frameSec++;


if(days <= 25){
weather = "winter";
document.body.style.background = '#f7f7f7';
document.getElementById('weather').innerText = "Winter";
}
else if(days > 25 && days <= 50){
weather = "spring";
document.body.style.background = 'lightgreen';
document.getElementById('weather').innerText = "Spring";
document.body.style.transition = 'all .7s ease-in';
document.getElementById('weather').style.transition = 'all .7s ease-in';
}
else if(days > 50 && days <= 75){
weather = "summer";
document.body.style.background = 'lightblue';
document.getElementById('weather').innerText = "Summer";
document.body.style.transition = 'all .7s ease-in';
document.getElementById('weather').style.transition = 'all .7s ease-in';
}
else if(days > 75 && days <= 100){
weather = "autumn";
document.body.style.background = 'orange';
document.getElementById('weather').innerText = "Autumn";
document.body.style.transition = 'all .7s ease-in';
document.getElementById('weather').style.transition = 'all .7s ease-in';
}
else if (days == 101){
days = 0;
}

  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        if (weather == 'winter') { fill('white'); } 
        else if (weather == 'autumn') { fill('#e0bb28') } 
        else { fill("green"); } 
        rect(x * side, y * side, side, side);
    }
       else if (matrix[y][x] == 0) {
        fill("#acacac");
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 2) {
        fill("yellow");
        rect(x * side, y * side, side, side);


      }
      else if (matrix[y][x] == 3) {
        fill("red");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 4) {
        fill("#CC0066");
        rect(x * side, y * side, side, side);
      }
     
      else if (matrix[y][x] == 5) {
        fill("blue");
        rect(x * side, y * side, side, side);
      }

      else if (matrix[y][x] == 6) {
        fill("black");
        rect(x * side, y * side, side, side);
      }

    }
  }
}

socket.on("matrix", drawmatrix);


function generateStatistics() {
  var statistics={
      'grassSpawn' : grassArr.length,
      'grassEaterSpawn' : grassEaterArr.length,
      'animalSpawn' : animalArr.length,
      'fireSpawn' : fireArr.length,
      'fireGeneratorSpawn' : flowerArr.length,
      'waterSpawn' : WaterArr.length,
      'weather' : weather,
  }
  
  return statistics
} 

setInterval(generateStatistics,1000)
