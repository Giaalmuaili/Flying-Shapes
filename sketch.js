// draw an ellipsoid
// with radius 30, 40 and 40.
function setup() {
    createCanvas(300, 300, WEBGL);
    
  }
  
  function draw() {
    background(430,220);
    
    rotateX(frameCount * 0.03);
    rotateY(frameCount * 0.01);
    ellipsoid(60,60,60);
    if (mouseIsPressed) {
          fill(30);
        } else {
          fill(330);
        }
        ellipse(mouseX, mouseY, 49, 40);
        
     square(mouseY, mouseX, 45, 60);
  }