const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var engine, world;

var ball;
var blower, blower1;
var blow_btn;

function setup() {
  createCanvas(800,800);
  engine = Engine.create()
  world = engine.world 
  ball = new Ball(400, 450, 100)
  blower = new Blower(400, 470, 150, 150)
  blower1 = new Blower(250, 530, 300, 30)

  blow_btn = createButton("Click to Blow")
  blow_btn.position(10, 10)
  blow_btn.mousePressed(blow)



}

function draw() {
  background("black");  
  Engine.update(engine)
  drawSprites();
  ball.display()
  blower.show()
  blower1.show()
}
function blow(){
 Body.applyForce(ball.body, {x: 0, y: 0}, {x: 0, y: -1})
 console.log("test")
}
