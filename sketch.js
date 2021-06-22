var tileCount;
var H1;
var H2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  tileCount = height/30;
  frameRate(8);
}

function draw() {
  background(random(30), 50);
  H1 = map(mouseX, 0, width, 100, 200);
  H2 = map(mouseX, 0, width, 200, 360);
  grid();
  
  fill(random(0,60), 100, 100);
  beginShape();
  curveVertex(width*.1, height*.1);
  curveVertex(mouseX+random(100), mouseY+random(100));
  curveVertex(mouseX+random(-100,100), mouseY+random(200));
  curveVertex(mouseX+random(-100,100), mouseY+random(-100,100));
  endShape(CLOSE);
}

function grid() {
  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
      let posX = (width / tileCount) * gridX;
      let posY = (height / tileCount) * gridY;

      //introduce random choice between three
      let toggle = int(random(0, 2));

      if (toggle == 0) {
        stroke(H1, random(100), random(100));
      
        line(posX, posY, posX + width/tileCount, posY + height
        );
      }
      
      if (toggle == 1) {
        fill(H2, random(100), random(100));
        square(
          random(posX, posX + width / tileCount),
          random(posY, posY + height / tileCount),
          random(tileCount)
        );
      }
    }
  }
}
