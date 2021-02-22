const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var superhero;
function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
    world = engine.world;
  // create sprites here
  ground = new Ground(600,500,1000,10);
  superhero = new Superhero(400,3,100,100)
}

function draw() {
  background(0);
ground.display();
superhero.display();
}

