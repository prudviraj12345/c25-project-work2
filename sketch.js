
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var dustbin1,dustbin2,dustbin3;


function preload()
{
	



}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	  ball= new paperBall(100,100,30);

	  dustbin1 = new Dustbin(900,450,20,130);
	  dustbin2 = new Dustbin(790,485,250,20);
	  dustbin3 = new Dustbin(670,450,20,130);
	 
   
	ground = new Ground(600,height,1200,20)


	  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  
  ball.display();


  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();

  


}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  
		Matter.Body.applyForce (ball.body,ball.body.position,{x:90,y:-90});



	}
	}
   
   
  

 




