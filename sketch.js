
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;

var top_wall;
var ball;
var rock

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.5,
  }
  var rock_options = {
    restitution: 0.2,

  }
   
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
   
  
  

  ground =new Ground(200,400,400,20);


  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);

  rock = Bodies.circle(200,200,20,rock_options)
  World.add(world,rock)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
ellipse(ball.position.x,ball.position.y,20);

ellipse(rock.position.x,rock.position.y,30)
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.02});
}
  


