
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,50,30);
	mango2=new Mango(1000,200,30);
	mango3=new Mango(890,190,30);
	mango4=new Mango(1200,210,30);
	mango5=new Mango(1100,200,30);
	mango6=new Mango(930,260,30);
	mango7=new Mango(1150,140,30);
	mango8=new Mango(1026,100,30);

	treeObj=new Tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);
	stone1=new Stone(235,420,5);
	rope1=new Rope(stone1.body,{x:235,y:420});
	Engine.run(engine);

}

function draw() {

  background("pink");
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
rope1.display();
  treeObj.display();
  mango1.display();
stone1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
  groundObject.display();
  detectcollision(stone1,mango1);
  detectcollision(stone1,mango2);
  detectcollision(stone1,mango3);
  detectcollision(stone1,mango4);
  detectcollision(stone1,mango5);
  detectcollision(stone1,mango6);
  detectcollision(stone1,mango7);
  detectcollision(stone1,mango8);
  textSize(30);
  fill("red");
  text("HOLD AND RELEASE THE STONE TO THROW IT",200,100);
  fill("cyan");
	textSize(30);
	text("PRESS SPACE TO GET A SECOND CHANCE",200,180);
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
	rope1.fly();
	
}
function detectcollision(stone,mango){
	mangoBodyPosition=mango.body.position;
	stoneBodyPosition=stone.body.position;
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=50){
		Matter.Body.setStatic(mango.body,false);
	}
}
function keyPressed(){
	if(keyCode===32){
		
		Matter.Body.setPosition(stone1.body,{x:235,y:420})
		rope1.attach();
	}
}