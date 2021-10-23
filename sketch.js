var boy1, school, god, zombie, skelton ;
var boyImg, schoolImg, godImg, skeltonImg,zombieImg;
var cardborad4
var cardborad22
var cardborad5
var cardborad1
var song
var memories
var old
var dancin 
var bg,bgImg
var ground,groundImg
var dong1
var dong2
var dong3
var dong4
var dong5
var dong6
var dong7
var dong8
var dong9
var dong10
var dong11
var dong12
var dong13
var dong14








function preload(){
boyImg=loadImage("boy1.png");
song=loadSound ("Tones-and-I-Dance-Monkey.mp3");
  memories=loadSound("Maroon 5 -Memories Full Mp3 Song(RemixZilla.Com).mp3");
old=loadSound("Old Town Road Mp3 By Billy Ray Cyrus and Lil Nas X.mp3");
dancin=loadSound("Aaron Smith - Dancin (KRONO Remix).mp3");
godImg=loadImage("saver1.png");
bgImg=loadImage("bg1.png")
groundImg=loadImage("ground.png")
zombieImg=loadImage("obi1.png")
skeltonImg=loadImage("obi2.png")



}



function setup() {
  createCanvas(1000,800);
  



  
  textSize(50);
  textAlign(CENTER);
 

dong1 = createSprite(100, 130,10,10);
  dong1.shapeColor = "yellow";
 dong2 = createSprite(215, 130,10,10);
  dong2.shapeColor = "blue";
 dong3 = createSprite(165, 250,10,10);
  dong3.shapeColor = "green";
   dong4 = createSprite(270, 250,10,10);
  dong4.shapeColor = "red";

  dong5 = createSprite(100, 130,10,10);
  dong5.shapeColor = "yellow";
 dong6 = createSprite(215, 130,10,10);
  dong6.shapeColor = "blue";
 dong7 = createSprite(165, 250,10,10);
  dong7.shapeColor = "green";
   dong8 = createSprite(270, 250,10,10);
  dong8.shapeColor = "red";

  dong9 = createSprite(100, 130,10,10);
  dong9.shapeColor = "yellow";


  
  
  dong1.velocityY = 8;
  dong2.velocityX = 8;
  dong3.velocityX = -8;
  dong4.velocityX = -8;
  dong5.velocityX = 7;
  dong6.velocityX = 6;
  dong7.velocityX = 8;
  dong8.velocityX = 9;
  dong9.velocityX = -9;




   cardborad1 = createSprite(500,3, 1000, 15);
  cardborad1.shapeColor = "red";
   cardborad4 = createSprite(995, 500,15, 1000);
cardborad4.shapeColor = "green";
 cardborad22 = createSprite(500, 800,1000,20);
cardborad22.shapeColor = "yellow";
 cardborad5 = createSprite(3, 500,15, 1000);
cardborad5.shapeColor = "pink";
  
  boy1=createSprite(90,700,50,50)
  boy1.addImage(boyImg);
  boy1.scale=0.3;

 
    

}

function draw() {
  background("black")
  

  
  text('PRESS "<-" TO CHANGE THE SONG', 500, 200);
  text('PRESS "->" TO CHANGE THE SONG', 500, 600);
  text('PRESS "^" TO CHANGE THE SONG', 500, 80);
  text('PRESS "DOWN" TO CHANGE THE SONG', 500, 500);


 
  
  if (keyDown(LEFT_ARROW)) {
    boy1.velocityX = -2;
    boy1.velocityY = 0;
    song.play();
    memories.stop();
    old.stop();
    dancin.stop();
 }
 if (keyDown(RIGHT_ARROW)) {
  boy1.velocityX = 2;
  boy1.velocityY = 0;
  song.stop();
  memories.play();
  old.stop()
  dancin.stop();
}
if (keyDown(UP_ARROW)) {
  boy1.velocityX = 0;
  boy1.velocityY = -2;
  old.play();
  memories.stop();
  song.stop();
  dancin.stop();
}
if (keyDown(DOWN_ARROW)) {
  boy1.velocityX = 0;
  boy1.velocityY = 2;
  dancin.play();
  memories.stop();
  song.stop();
  old.stop()
}
if(keyDown(83)){
  memories.stop();
  song.stop();
  old.stop()
  dancin.stop();
}
boy1.bounceOff(cardborad1);
boy1.bounceOff(cardborad22);
boy1.bounceOff(cardborad5);
boy1.bounceOff(cardborad4);


dong1.bounceOff(cardborad1);
dong2.bounceOff(cardborad1);
dong3.bounceOff(cardborad1);
dong4.bounceOff(cardborad1);
dong1.bounceOff(cardborad22);
dong2.bounceOff(cardborad22);
dong3.bounceOff(cardborad22);
dong4.bounceOff(cardborad22);
dong1.bounceOff(cardborad5);
dong2.bounceOff(cardborad5);
dong3.bounceOff(cardborad5);
dong4.bounceOff(cardborad5);
dong1.bounceOff(cardborad4);
dong2.bounceOff(cardborad4);
dong3.bounceOff(cardborad4);
dong4.bounceOff(cardborad4);


dong5.bounceOff(cardborad1);
dong6.bounceOff(cardborad1);
dong7.bounceOff(cardborad1);
dong8.bounceOff(cardborad1);
dong5.bounceOff(cardborad22);
dong6.bounceOff(cardborad22);
dong7.bounceOff(cardborad22);
dong8.bounceOff(cardborad22);
dong5.bounceOff(cardborad5);
dong6.bounceOff(cardborad5);
dong7.bounceOff(cardborad5);
dong8.bounceOff(cardborad5);
dong5.bounceOff(cardborad4);
dong6.bounceOff(cardborad4);
dong7.bounceOff(cardborad4);
dong8.bounceOff(cardborad4);

dong8.bounceOff(cardborad1);
dong8.bounceOff(cardborad22);
dong8.bounceOff(cardborad5);
dong8.bounceOff(cardborad4);



  drawSprites();
}

function mousePressed(){

  
}




