
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	bobDiameter = 40


	engine = Engine.create();
	world = engine.world;
	bob = new Bob(220,600,70)
	bob1 = new Bob(330,600,70)
	bob2 = new Bob(230,600,70)
	bob3 = new Bob(380,600,70)
	bob4 = new Bob(460,600,70)

	roof = new Roof(300,200,430,40)

	line1 = new rope(bob.body,roof.body,-bobDiameter*2,0)
	line2 = new rope(bob1.body,roof.body,-bobDiameter*2,0)
	line3 = new rope(bob2.body,roof.body,-bobDiameter*2,0)
	line4 = new rope(bob3.body,roof.body,-bobDiameter*2,0)
	line5 = new rope(bob4.body,roof.body,-bobDiameter*2,0)

	groundObject=new Ground(width/2,670,width,20);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,0,0);
  bob.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  roof.display()
  line1.display()
  line2.display()
  line3.display()
  line4.display()
  line5.display()
  
  drawSprites();
 
}



