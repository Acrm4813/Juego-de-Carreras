var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1, car2, car3, car4;
var cars;
var form, player, game;

function preload(){
  car1Img = loadImage("../Images/car1.png");
  car2Img = loadImage("../Images/car2.png");
  car3Img = loadImage("../Images/car3.png");
  car4Img = loadImage("../Images/car4.png");
  groundImg = loadImage("../Images/ground.png");
  trackImg = loadImage("../Images/track.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.End();
  }
}
