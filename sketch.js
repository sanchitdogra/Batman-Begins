const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var maxDrops = 100;
var drops = [];
var elec, elec1, elec2, elec3, elec4;
var rand;
var thunderFrame = 0;



function preload()
{
    elec1 = loadImage("1.png");
    elec2 = loadImage("2.png");
    elec3 = loadImage("3.png");
    elec4 = loadImage("4.png");
}

function setup()
{
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,750);
    
    umbrella = new Umbrella(175,550);
}

function draw()
{
    Engine.update(engine);

    background("black");

    for(var i = 0; i < maxDrops; i++)
    {
        drops.push(new Drop(random(0,400), random(0,400), 2));
    }

    for (var i = 0; i < maxDrops; i++)
    {
        drops[i].display();
        drops[i].position();
    }

    umbrella.display();

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderFrame=frameCount;
        elec = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: elec.addImage(elec1);
            break;
            case 2: elec.addImage(elec2);
            break; 
            case 3: elec.addImage(elec3);
            break;
            case 4: elec.addImage(elec4);
            break;
            default: break;
        }
        elec.scale = random(0.3,0.5)
    }

    if(thunderFrame + 10 ===frameCount && elec){
        elec.destroy();
    }

    drawSprites();
}   

