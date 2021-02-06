const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var maxDrops = 100;
var drops = [];

var man;

function preload(){
    
}

function setup(){
    createCanvas(500,800);
    engine = Engine.create();
    world = engine.world;
    
    if(frameCount%300===0){
        for(var i=0; i<maxDrops;i++){
          drops.push(new Drop(random(0,500),random(0,800),3,10));
         }
        }
    
    man = new Umbrella(250,400);
    

    Engine.run(engine);
}

function draw(){
    background(0)

  man.display();
 
    maxDrops.display();
}   

