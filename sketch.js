const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tower,ground,canon;
var bgImg;

function preload(){
    bgImg = loadImage("assets/background.gif")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    var angle = -PI/4

    tower = new Tower(150,350,160,310);
    ground = new Ground(600,590,1200,20)  
    canon = new Canon(180,110,100,50,angle)  
}

function draw(){
    background(220);

    image(bgImg,0,0,1200,600)

    Engine.update(engine);

    tower.display();
    canon.display();
}
