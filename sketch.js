var bg;
var bg1
var play,playButton;
var commentbox,cb1

function preload() {
 bg1 = loadImage("pics/bg.png")
  playButton = loadImage("pics/button2.png")
 cb1 = loadImage("pics/commentbox2.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight-140);
 
  bg = createSprite(600,300,displayWidth,displayHeight)
  bg.addImage("bg",bg1)
  play = createSprite(displayWidth-160,displayHeight/2 -20,10,10)
  play.scale = 0.5;
  play.addImage("play",playButton)
  commentbox = createSprite(500,displayHeight-200,displayWidth+700,10)
  commentbox.scale = 0.6;
  commentbox.addImage("cb",cb1)
  commentbox.visible = false;
}

function draw() {
 background("black")
  
 if(mousePressedOver(play)){
bg.visible = false
play.visible = false
commentbox.visible = true;

if(mousePressedOver (commentbox)){
  fill ("red")
textSize(10)
text("*BELL RINGS*",600,displayHeight-100)
}
 }
  drawSprites()
}