const Engine = Matter.Engine;
const World = Matter.World
const Body = Matter.Body;
const Bodies = Matter.Bodies;


var engine, world;
var player1, player2,player3,player4
var ground

var playerCount = 0;


function preload(){


}

function setup(){
 var canvas = createCanvas(800,600)

  engine = Engine.create();
  world = engine.world;


  player1 = new Player(400,300,10,30)
  player2 = new Player(410,200,40,20)
  //player3 = new Player(100,200)
  //player4 = new Player(500,100)
  ground = new Ground(400,595,600,20)

  

}

function draw(){
  background("gray")
  Engine.update(engine);

  player1.display();
  player2.display();
  //player3.display();
  //player4.display();

  ground.display();

  
}

