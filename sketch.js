const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground,stand1,stand2,slingshot,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;


var engine, world;
function preload(){
polygon=loadImage("polygon.png")


}


function setup(){
createCanvas(900,400)
engine = Engine.create();
world = engine.world;
ground=new Ground(450,390,900,20)
stand1=new stand(400,300,250,10)
stand2=new stand(700,200,200,10)
block1=new block(300,275,30,40)
block2 = new block(330,275,30,40);
 block3 = new block(360,275,30,40);
block4 = new block(390,275,30,40);
block5 = new block(420,275,30,40);
 block6 = new block(450,275,30,40);
 block7 = new block(480,275,30,40);
 block8 = new block(330,235,30,40);
 block9 = new block(360,235,30,40);
 block10 = new block(390,235,30,40);
 block11 = new block(420,235,30,40);
 block12 = new block(450,235,30,40);
 block13 = new block(360,195,30,40);
 block14 = new block(390,195,30,40);
 block15 = new block(420,195,30,40);
 block16 = new block(390,155,30,40);
 block17 = new block(635,173,30,40);
 block18 = new block(665,173,30,40);
 block19 = new block(695,173,30,40);
 block20 = new block(725,173,30,40);
 block21 = new block(755,173,30,40);
 block22 = new block(665,133,30,40);
 block23 = new block(695,133,30,40);
 block24 = new block(725,133,30,40);
 block25 = new block(695,93,30,40);

ball=Bodies.circle(50,200,20)
World.add(world,ball);
slingshot= new SlingShot(this.ball,{x:100,y:200})


}
function draw(){
background("black")
    Engine.update(engine);


ground.display();
stand1.display();
stand2.display();
fill("lightgreen");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
fill("pink")
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
fill("skyblue")
block13.display();
block14.display();
block15.display();
fill("lightwhite")
block16.display();
fill("grey")
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
fill("lightgreen");
block22.display();
block23.display();
block24.display();
fill("lightpink");
block25.display();

imageMode(CENTER)
image(polygon,ball.position.x,ball.position.y,40,40)
slingshot.display();

}
function mouseDragged(){
   
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}
function mouseReleased(){
slingshot.fly();




}