
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var   bg,bg1,ground,paper1,paper,dustbin,dustbin1;

function preload(){
	paper1 = loadImage("images/paper.png");
	dustbin1 = loadImage("images/dustbingreen.png");
	bg = loadImage("images/bg.jpg");     
	
   
}

function setup() {
	createCanvas(800, 700);

	

	paper = createSprite(200,630 );
	paper.addImage(paper1)
	paper.scale=0.5;

	dustbin = createSprite(700, 555, 10, 10);
	dustbin.addImage(dustbin1)
	dustbin.scale=0.7;

 
   
	engine = Engine.create();
	world = engine.world;

	

	ground = new Ground(400,680,800,20);
	
	
	




	Engine.run(engine);
 
}


function draw() {
	rectMode(CENTER);
	background(bg);
	
 

 // Engine.update(engine);


 ground.display();
 dustbin.display();
 paper.display();

 

 drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 85, y: 85 });
    }
}