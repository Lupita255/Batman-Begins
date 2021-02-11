const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var maxDrops = 100;
var drops = [];


function preload(){

}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400, 700);
    umbrella = new Umbrella(200, 500);

    if(frameCount % 100 == 0){
        for(var i = 0; i < maxDrops; i++){
           drops.push(new Drops(random(0, 800), random(0, 800)));
        }   
    }
}

function draw(){
    Engine.update(engine);
    background(0);


    umbrella.display();

    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }

    drawSprites();
}   
