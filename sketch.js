
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var title,button,button2,start;
var name1
var player,robot;
var gameState=0;
var count=1
var timer=600;
var score=0;
function preload(){
  bgImage=loadImage("bg.png")
  dodge=loadAnimation("dodge.png")
  punch=loadAnimation("punch1.png")
  punch1=loadAnimation("punch2.png")
  gameover=loadAnimation("gameover.png")
  start1 = loadAnimation("start.png")
  robot1=loadAnimation("output-onlinepngtools(1).png")
}
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  
  title=createElement("h2")
  title.html("BOXING GAME")
  button=createButton("SINGLE PLAYER")
  title.position(400,10)
  button.position(500,10)
  button2=createButton("MULTI PLAYER")
  button2.position(550,10)
 button.mousePressed(()=>{
    button.hide()
    button2.hide()
    start=createButton("START")
  input=createInput("Name")
    input.position(350,10)
    name1=input.value()
    start.position(300,10)
    start.mousePressed(()=>{
      input.hide()
      start.hide()
      player=createSprite(200,300,10,10)
player.addAnimation("start",start1)
      robot=createSprite(700,300,10,10)
      gameState=1
      
      })
  })
}


function draw() {
  background("white");  
  if(gameState==1){
    if(keyDown("left")){
      player.x=player.x-1
      robot.x=robot.x+1
    }
    if(timer===0){
      gameState=2
    }
    if(timer>=0){
      timer=timer-1
    }
    text("timer:"+timer,300,50)
    if(keyDown("right")){
      player.x=player.x+1
      robot.x=robot.x-1
    }
    if(player.y==150){
      score=score+100

    }
    else if(player.y==250){
      score=score+50
    }
    text("score:"+score,300,100)
    if(keyDown("up")){
      player.addAnimation("pun",punch1)
      player.changeAnimation("pun",punch1)
    }
    if(keyDown("down")){
      player.addAnimation("punc",punch)
      player.changeAnimation("punc",punch)
    }
    if(keyWentDown("space")&& count==1){
      player.addAnimation("dod",dodge)
      player.changeAnimation("dod",dodge)
      count=0
    }
   
    if(keyWentUp("space")){
   player.changeAnimation("sta",punch)
}  }
if(gameState===2){
player.addAnimation("over",gameover)
player.changeAnimation("over",gameover)
}


  drawSprites();
}
