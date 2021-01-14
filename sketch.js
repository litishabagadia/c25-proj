
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  
 
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground =new Ground(400,650,800,10)
paper=new Paper(100,100,30)
dustbinLeft=new Dustbin(500,603,10,80)
dustbinRight=new Dustbin(600,603,10,80)
dustbinBottom=new Dustbin(550,640,100,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  ground.display();
  paper.display();
  dustbinLeft.display();
  dustbinRight.display();
  dustbinBottom.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{
    x:32,y:-33
   })
}
}


