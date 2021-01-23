
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var stone, rubber;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,800,20)
	hammer = new Hammer(100,100);
	stone = new Stone(200, 100, 100, 100);
	rubber = new Rubber(400,100,55)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
}



