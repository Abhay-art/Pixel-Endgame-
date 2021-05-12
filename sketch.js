var thanos=createSprite(30,350);
thanos.addImage("thanos.png");
thanos.scale=0.15;
thanos.visible=false;

var trophy=createSprite(200,200);
trophy.addImage("gaunlet.png");
trophy.scale=0.5;
trophy.visible=false;

var life1=createSprite(10,10);
var life2=createSprite(27,10);
var life3=createSprite(43,10);

life1.addImage("heart");
life2.addImage("heart");
life3.addImage("heart");

life1.scale=0.05;
life2.scale=0.05;
life3.scale=0.05;



var captainMarvel=createSprite(150,200,10,10);
captainMarvel.addImage("captainMarvel.png");
captainMarvel.scale=0.13;

var ironMan=createSprite(276,200,10,10);
ironMan.addImage("ironMan.png");
ironMan.scale=0.13;

var spiderman=createSprite(190,200,10,10);
spiderman.addImage("spiderman.png");
spiderman.scale=0.13;

var thor=createSprite(235,200,10,10);
thor.addImage("thor.png");
thor.scale=0.10;

var wall1=createSprite(200,380);
wall1.addImage("obstacle_1.png");


var wall2=createSprite(200,15);
wall2.addImage("obstacle_1.png");


var wall3=createSprite(320,200);
wall3.addImage("obstacle_2.png");


var wall4=createSprite(78,200);
wall4.addImage("obstacle_2.png");


var wall5=createSprite(200,260);
wall5.addImage("obstacle_3.png");


var wall6=createSprite(200,130);
wall6.addImage("obstacle_3.png");


var gameOver=createSprite(200,200);
gameOver.addImage("game_over.png");
gameOver.visible=false;

var logo=createSprite(200,210);
logo.addImage("endgame.png");
logo.visible=true;

var foodGroup=new Group();

for(var a=50;a<400;a=a+40){
  var food1=createSprite(a,70);
  food1.addImage(space_stone.png);
  food1.scale=0.08;
  foodGroup.add(food1);
}

for(var b=70;b<320;b=b+40){
  var food2=createSprite(20,b);
  food2.addImage(space_stone.png);
  food2.scale=0.08;
  foodGroup.add(food2);
}

for(var c=100;c<400;c=c+40){
  var food3=createSprite(370,c);
  food3.addImage(space_stone.png);
  food3.scale=0.08;
  foodGroup.add(food3);
}
  
  for(var d=90;d<350;d=d+40){
  var food4=createSprite(120,d);
  food4.addImage(space_stone.png);
  food4.scale=0.08;
  foodGroup.add(food4);
}

for(var e=95;e<340;e=e+40){
  var food5=createSprite(275,e);
  food5.addImage(space_stone.png);
  food5.scale=0.08;
  foodGroup.add(food5);
}

for(var f=60;f<350;f=f+40){
  var food6=createSprite(f,345);
  food6.addImage(space_stone.png);
  food6.scale=0.08;
  
  foodGroup.add(food6);
}

var score=0;
var life=3;
var gameState="start";

function draw() {
  background("black");
 fill("white") ;
 textSize(17);
  text(score,370,25);
  
  if(gameState=="start"){
text("Press space to start",128,49);
foodGroup.visible=false;
  thanos.visible=false;
  captainMarvel.visible=false;
  ironMan.visible=false;
  spiderman.visible=false;
  thor.visible=false;
  wall1.visible=false;
  wall2.visible=false;
  wall3.visible=false;
  wall4.visible=false;
  wall5.visible=false;
  wall6.visible=false;
  life1.visible=false;
  life2.visible=false;
  life3.visible=false;
}
if(life==2){
  life3.visible=false;
  
}

if(life==1){
  life2.visible=false;
  
}

if(life==0){
  life1.visible=false;
  
}
if(thanos.isTouching(captainMarvel)||
thanos.isTouching(ironMan)||
thanos.isTouching(spiderman)||
thanos.isTouching(thor)){
  captainMarvel.x=150;
  captainMarvel.y=200;
  ironMan.x=276;
ironMan.y=200;
  spiderman.x=190;
  spiderman.y=200;
  thor.x=235;
  thor.y=200;
  thanos.x=30;
  thanos.y=350;
  life=life-1;
}
if(life==0){
  gameState="over";
  foodGroup.destroyEach();
  thanos.destroy();
  captainMarvel.destroy();
  ironMan.destroy();
  spiderman.destroy();
  thor.destroy();
  wall1.destroy();
  wall2.destroy();
  wall3.destroy();
  wall4.destroy();
  wall5.destroy();
  wall6.destroy();
  gameOver.visible=true;
}

if(keyDown(RIGHT_ARROW)){
   thanos.x=thanos.x+5;
 }
 
  if(keyDown(LEFT_ARROW)){
   thanos.x=thanos.x-5;
  }

if(keyDown(UP_ARROW)){
   thanos.y=thanos.y-5;
 }
 
  if(keyDown(DOWN_ARROW)){
   thanos.y=thanos.y+5;
  }

if(keyDown("SPACE")&&gameState=="start"){
  gameState="play";
foodGroup.visible=true; 
thanos.visible=true;
  captainMarvel.visible=true;
  ironMan.visible=true;
  spiderman.visible=true;
  thor.visible=true;
  wall1.visible=true;
  wall2.visible=true;
  wall3.visible=true;
  wall4.visible=true;
  wall5.visible=true;
  wall6.visible=true;
  life1.visible=true;
  life2.visible=true;
  life3.visible=true;
  logo.destroy();
  thanos.visible=true;
  captainMarvel.setVelocity(randomNumber(-4,3),randomNumber(-4,3))
  ironMan.setVelocity(randomNumber(-4,3),randomNumber(-4,3))
  spiderman.setVelocity(randomNumber(-4,3),randomNumber(-4,3))
  thor.setVelocity(randomNumber(-4,3),randomNumber(-4,3))
  
}
createEdgeSprites();
thanos.collide(wall1);
thanos.collide(wall2);
thanos.collide(wall3);
thanos.collide(wall4);
thanos.collide(wall5);
thanos.collide(wall6);

captainMarvel.bounceOff(edges);
ironMan.bounceOff(edges);
spiderman.bounceOff(edges);
thor.bounceOff(edges);
captainMarvel.bounceOff(wall1);
captainMarvel.bounceOff(wall2);
captainMarvel.bounceOff(wall3);
captainMarvel.bounceOff(wall4);
captainMarvel.bounceOff(wall5);
captainMarvel.bounceOff(wall6);

ironMan.bounceOff(wall1);
ironMan.bounceOff(wall2);
ironMan.bounceOff(wall3);      
ironMan.bounceOff(wall4);
ironMan.bounceOff(wall5);
ironMan.bounceOff(wall6);

thor.bounceOff(wall1);
thor.bounceOff(wall2);
thor.bounceOff(wall3);
thor.bounceOff(wall4);
thor.bounceOff(wall5);
thor.bounceOff(wall6);

spiderman.bounceOff(wall1);
spiderman.bounceOff(wall2);
spiderman.bounceOff(wall3);
spiderman.bounceOff(wall4);
spiderman.bounceOff(wall5);
spiderman.bounceOff(wall6);

if(score==920){
  gameState="win";
  foodGroup.visible=false;
  thanos.visible=false;
  captainMarvel.visible=false;
  ironMan.visible=false;
  spiderman.visible=false;
  thor.visible=false;
  wall1.visible=false;
  wall2.visible=false;
  wall3.visible=false;
  wall4.visible=false;
  wall5.visible=false;
  wall6.visible=false;
  life1.visible=false;
  life2.visible=false;
  life3.visible=false;
  trophy.visible=true;
  gameOver.visible=false;
  textSize(10);
  fill("white");
  text("Thanos : You have acquired the infinity gaunlet , you are invincible!!",20,315)
  text("You have defeated the avengers",70,335)
}

for(var z=0;z<foodGroup.length;z++){
  if(foodGroup.get(z).isTouching(thanos)){
    foodGroup.get(z).destroy();
    score=score+20;
  }
}

 drawSprites();
}
