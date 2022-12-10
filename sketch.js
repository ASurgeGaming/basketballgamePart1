const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var bgIMG;
let bb1IMG,bb2IMG,bb3IMG;
let bb1,bb2,bb3;
let ballIMG;
var balls = [];

function preload() {
  bgIMG = loadImage("assets/bg.jpg");
  bb1IMG = loadAnimation("assets/bb1.png");
  bb2IMG = loadAnimation("assets/bb2.png");
  bb3IMG = loadAnimation("assets/bb3.png");
  ballIMG = loadImage("assets/ball.png")
}


function setup() {
  createCanvas(1520,700);
  engine = Engine.create();

  
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  bb1 = createSprite(770,400);
  bb1.addAnimation("standing",bb1IMG);
  bb1.addAnimation("throwing", bb2IMG);
  bb1.addAnimation("won", bb3IMG);
  bb1.changeAnimation("standing")
  bb1.scale = 2.7;

  
}

function draw() 
{
  background(51);
  image(bgIMG, 0, 0, width, height);
  Engine.update(engine);

  for (var i = 0; i < balls.length; i++) {
    showBalls(balls[i], i);
  }

  drawSprites();
}


function keyPressed(){
  if (keyCode === 32) {
    var ball = new Ball(770,400);
    balls.push(ball);  
  }
}

function keyReleased(){
  if(keyCode===32){
    balls[balls.length - 1].shoot();
    bb1.changeAnimation("thhrowing");
  }
}

function showBalls(ball,index){
  if (ball){
    ball.display();
  }
}