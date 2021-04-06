const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var box1,box2,box3;

function setup() {
 var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  box1=new Box(200,300,50,50);
  box2=new Box(240,100,50,100);
 // box3=new Box(300,100,50,50);

  ground=new Ground(200,410,400,20);
}

function draw() {
  background(150); 
  Engine.update(engine);

  box1.display();
  box2.display();
 // box3.display();
  ground.display();
}