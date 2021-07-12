
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var rock;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
   var bo1 ={
    isStatic: true
  };

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  var ro={
    restitution: 0.85
  }
   rock=Bodies.circle(300,20,10,ro);
    World.add(world,rock);
    console.log(rock);

    ball1=Bodies.rectangle(300,200,200,20,bo1);
    World.add(world,ball1);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(rock.position.x,rock.position.y,20,20);
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(ball1.position.x,ball1.position.y,200,10);
}

