var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var rotFruits;
var rotFruitGroup;
var rotFruit1_img, rotFruit2_img, rotFruit3_img, rotFruit4_img, rotFruit5_img;
var rotFruit6_img, rotFruit7_img, rotFruit8_img, rotFruit9_img;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
  rotFruit1_img = loadImage("images/rotApple.png");
  rotFruit2_img = loadImage("images/rotApricot.png");
  rotFruit3_img = loadImage("images/rotAvocado.png");
  rotFruit4_img = loadImage("images/rotBanana.png");
  rotFruit5_img = loadImage("images/rotCherry.png");
  rotFruit6_img = loadImage("images/rotLemon.png");
  rotFruit7_img = loadImage("images/rotMango.png");
  rotFruit8_img = loadImage("images/rotOrange.png");
  rotFruit9_img = loadImage("images/rotPear.png");
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}