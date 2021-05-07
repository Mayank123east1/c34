const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;
var boggy1,boggy2,boggy3,boggy4,boggy5,boggy6;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  boggy1=new BOGGY(50,378,50,50);
  boggy2=new BOGGY(125,378,50,50);
  boggy3=new BOGGY(200,378,50,50);
  boggy4=new BOGGY(275,378,50,50);
  boggy5=new BOGGY(350,378,50,50);
  boggy6=new BOGGY(425,378,50,50);
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  boggy1.show();
  boggy2.show();
  boggy3.show();
  boggy4.show();
  boggy5.show();
  boggy6.show();
 
  }

  
;