var canvas, database; 
var gameState = 0;
var playerCount, form, player, game;

function setup(){
    database = firebase.database(); //Linked the variable database to the firebase database. Correct database found due to the configuration given in index.html.
    canvas = createCanvas(500,500); 

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    
}
