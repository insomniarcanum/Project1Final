let gap = 10;
let cirNum = 40;
let cirSize = 20;
let angle;

var pictureList; 

function preload() {
  pictureList = [];
  var imgCount = 5; 
  for (var i = 0; i < imgCount; i++) {
    pictureList[i] = loadImage("images/"+(i + 1) + ".png");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(degrees);
}

function draw() {
  background(0);
  
  for (var g = 0; g < width; g += width / 10) {
  for (var h = 0; h < height; h += height / 5) {
			stroke(225,225,255,10);
			strokeWeight(1);
			line(g, 0, g, height);
			line(0, h, width, h);
}}
  
  push();
  translate(width/2, height/2);
  rotate(PI/3 + mouseY/20 + mouseX/20)
  stroke(225);
  strokeWeight(1);
  noFill();
  
  for(let o = 0; o < cirNum; o++){
    arc(0, 0, cirSize + gap * o, cirSize + gap * o, 45, 360 - o);
  }
  pop();
  
  var n = 20;

  for (var i = 0; i < n; i++) {
    
    var r = int(random(0, 5)); 
    var randomImage = pictureList[r]
    var x = int(random(-300, 200));
    var y = int(random(-150, 200));
    var a = int(random(400, 900));
    var b = int(random(-150, 200));
    var c = int(random(-300, 300));
    var d = int(random(300, 900));
    var e = int(random(500, 1000));
    var f = int(random(300, 900));
    
    image(randomImage, x, y, randomImage.width, randomImage.height);
    image(randomImage, a, b, randomImage.width, randomImage.height);
     image(randomImage, c, d, randomImage.width, randomImage.height);
    image(randomImage, e, f, randomImage.width, randomImage.height);
}
  
  if (mouseIsPressed) {
      
      frameRate(0.1);
      
    } else {
      
      frameRate(15);
      
    }
    
  if (keyIsPressed) {
    noLoop();
    redraw();
  }
}