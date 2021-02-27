const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var floor,binside1,binside2,binside3,rubbish


function preload()
{
	boximage = loadImage('rbbish bin.png');
}

function setup() {
	
	
	var canvas = createCanvas(1400, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	


	
	binside1 = new Boxside(1100,495,150,15);
	binside2 = new Boxside(1185,420,15,170);
	binside3 = new Boxside(1015,420,15,170);
	
	floor = new Ground(700,550,1400,30);
	
	rubbish
	 = new Paper(200,300);
	
	 Engine.run(engine);
  
}




function draw() {
	background("beige");
	Engine.update(engine);
	
	
	rubbish
	.display();
	floor.display();
	binside3.display();
	binside1.display();
	binside2.display();
	image(boximage,1000,330,200,210);
	
	
 
}

	function keyPressed()	{
		if(keyCode===RIGHT_ARROW)	{
			Matter.Body.applyForce(rubbish
				.body,rubbish
				.body.position,{x:110,y:-110});

		}
	}



