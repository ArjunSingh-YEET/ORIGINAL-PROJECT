const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat
var man1
var engine, world;
var drops = [];
var rand;

var maxDrops=100;

var thunderCreatedFrame=0;

function preload(){
    batAnimation=loadAnimation ("bat1.png","bat2.png","bat3.png","bat4.png","bat5.png","bat6.png","bat7.png","bat8.png","bat9.png","bat10.png","bat11.png","bat12.png")

    thunder1 = loadImage("thunder.png");
    thunder2 = loadImage("thunder.png");
    thunder3 = loadImage("thunder.png");
    thunder4 = loadImage("thunder.png");
    man1 = loadImage("batman.png")
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);

    //creating drops
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400), random(0,400)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(0); 

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 5);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.08,0.1);
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }
    bat = createSprite(Math.round(random(0,400)),Math.round(random(0,400)))
   bat.addAnimation("moving_bat",batAnimation)
   bat.visible=false

    if(frameCount%80===0){
        bat.visible=true
        bat.velocityY= 3
        bat.velocityX= 3
        bat.scale=0.4
    }
    umbrella.display();
    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }
   
    drawSprites();
}   

