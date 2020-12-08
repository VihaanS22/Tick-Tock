var hr, min, sec
var button1, button2, button3, button4, button5
var cover1, cover2
var alarmSound, tickSound

function preload() {
  alarmSound = loadSound("sounds/alarm.mp3")
  tickSound = loadSound("sounds/tick.mp3")
}
function setup() {
 
  createCanvas(800,400);
  angleMode(DEGREES)

  button1 = createSprite(300, 110, 20, 30)
button1.shapeColor = "yellow"  

button2 = createSprite(395, 200, 30, 20)
button2.shapeColor = "lightgreen" 

button3 = createSprite(360, 135, 30, 30)
button3.shapeColor = "blue"  

button4 = createSprite(240, 135, 30, 30)
button4.shapeColor = "red"  

button5 = createSprite(205, 200, 30, 20)
button5.shapeColor = "lightblue" 

cover1 = createSprite(650, 260, 160, 100)
cover1.shapeColor = "black"
}

function draw() {
  background(0);
 
  if(mousePressedOver(button5)){
    alarmSound.play()
   background("red")
   fill("white")
    text("YOU HAVE BEEN CAUGHT, YOU COULD NOT ESCAPE...", 320, 100)
    text("QUICK, PRESS F5...", 320, 110)
    button1.destroy()
    button2.destroy()
    button3.destroy()
    button4.destroy()
    
  }
  
   if(mouseIsOver(button1)){
  background("orange")
  }
  if(mousePressedOver(button2)){
    tickSound.play(true)
    cover1.velocityY = -3
  }
  else{
    cover1.velocityY =0
  }
  
  if(mouseIsOver(button3)){
    background("white")
    fill("black")
    text("YOU HAVE UNLOCKED THE DOOR...GOOD JOB. NOW ESCAPE!", 320, 100)
    text("TAKE THIS WATCH WITH YOU. IT WILL BE HELPFUL!", 360, 120)
    button5.x = -20
  }
  if(mouseIsOver(button4)){
   fill("white")
    text("BOO!!!!", 90, 280)
  }


hr = hour()
  min = minute()  
  sec = second()

  fill("white")
 textSize(25) 
 if(hr){
text(""+hr%12 , 600, 300)
 }
 if(min){
text(":"+ min%60, 635, 300)
 }

 if(sec){
 
text(":"+ sec%60, 680, 300)
 }
 textSize(15)
 fill("yellow")
 text("YOU HAVE BEEN LOCKED UP IN A PRISON WITH YOUR FRIENDS.", 10, 15)
 text("BUT YOU HAVE A WATCH WITH 5 BUTTONS AND A LAPTOP", 10, 30)
 text("LUCKILY YOU ARE A CODER AND CAN HACK INTO THE WATCH.", 10, 45)
 text("HOVER YOUR MOUSE INTO THE BUTTONS TO SEE WHAT HAPPENS, AND CLICK SOME.", 10, 60)
 text("HERE IS A HINT.ONE BUTTON SHOWS ORANGE LIGHT.", 10, 75)
 
 button1.display()
 button2.display()
 button3.display()
 button4.display()
 button5.display()
 cover1.display()
 
 fill("green")
  circle(300, 200, 180); 

  translate(300,200);
  rotate(-90);

  secAngle = map(sec, 0, 60, 0, 360)
  minAngle = map(min, 0, 60, 0, 360)
  hrAngle = map(hr%12, 0, 12, 0, 360) 

  push();
  rotate(secAngle);
  stroke("orange");
  strokeWeight(7);
  line(0,0,60,0);
  pop();

  push();
  rotate(minAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,20,0);
  pop();

  stroke("orange");
  strokeWeight(7);
  noFill();
  arc(0,0,160,160,0,secAngle);

  stroke("blue");
  strokeWeight(7);
  noFill();
  arc(0,0,145,145,0,minAngle);

  stroke("red");
  strokeWeight(7);
  noFill();
  arc(0,0,130,130,0,hrAngle);

  
}

