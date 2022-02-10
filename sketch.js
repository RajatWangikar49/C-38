var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var car1Image;
var car2Image;
var trackImage;
var car1,car2;
var allPlayers;
var cars = [];
var gameState;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Image = loadImage("./assets/car1.png");
  car2Image = loadImage("./assets/car2.png");
  trackImage = loadImage("./assets/track.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState()
  game.start();

}

function draw() {
  background(backgroundImage);
  if(playerCount === 2){
    game.update(1)
  }
  if(gameState === 1){
    game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
