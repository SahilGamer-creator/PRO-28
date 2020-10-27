
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree;
var boy;
var stone;
var mango1,mango2,mango3,mango4;
var sling;

function preload()
{

}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	 ground = new Ground(800,780,1600,20);
	 tree = new Tree(1200,200,1200,160);
	 boy = new Boy(350,760,20,20);
	 stone = new Stone(450,750,20,20);
	 mango1 = new Mango(680,100,20,10);
	 mango2 = new Mango(600,80,20,10);
	 slingshot = new SlingShot(stone.body,{x: 450, y:750});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(66, 245, 102);
  
  drawSprites();
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  slingshot.display();
 
}

