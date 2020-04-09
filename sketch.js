// HI THIS IS MY CASTLE
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var stick1, stick2, stick3, stick4, stick5, stick6, stick7;
var ground;
var tri1;

function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;
  stick1 = new Stick(300, 450, 40, 500);
  stick2 = new Stick(350, 570, 80, 250);
  stick3 = new Stick(430, 520, 80, 350);
  stick4 = new Stick(510, 470, 80, 450);
  stick5 = new Stick(580, 520, 80, 350);
  stick6 = new Stick(660, 570, 80, 250);
  stick7 = new Stick(700, 450, 40, 500);
  ground = new Ground(600, 695, 1200, 15);
}

function draw() {
  background(20,20,20);
  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();
  stick5.display();
  stick6.display();
  stick7.display();
  ground.display();
  fill(255);
  noStroke();
  
  engine.update(engine);
}