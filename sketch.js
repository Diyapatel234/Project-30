
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
  

	engine = Engine.create();
	world = engine.world;
    
    
	//Create the Bodies Here
    Engine.run(engine);
    block1 = new Block(330,235,30,40);
    
	block2 = new Block(360,235,30,40);
	block3 = new Block(390,235,30,40);
	block4 = new Block(420,235,30,40);
	block5 = new Block(450,235,30,40);
	
	block6 = new Block(360,195,30,40);
	block7 = new Block(390,195,30,40);
	block8 = new Block(420,195,30,40);

    block9 = new Block(390,155,30,40);
    polygon = new Polygon(50,200,15);
	stand = new Ground(390,265,150,10);
	ground = new Ground(50,685,2000,30);
    
    slingshot = new Slingshot(polygon.body,{x:100,y:200});

    fill("cyan");
	
	
  
}


  
function draw() {
  rectMode(CENTER);

  
  background(225);
  
  
  
  stand.display();
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
 
  polygon.display();

  
  drawSprites();
 

}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   polygon.fly();
}