const width = 2145;
const height = 1000;
const game = new Game()

function setup(){
    console.log('this is the setup')
 createCanvas(width, height) 
}

function draw(){
    background(200);
    game.draw();
  //  console.log('this is the draw in main')
}

function preload(){
    
    game.preload()
   // console.log('this is the preload')
}

function keyPressed(){
    if (keyCode === 32){
        game.player.jump()
    }
}

function keyPressed() {
    if(keyCode === 39){
        game.player.right()
    }
}

//let canvas = document.getElementById('canvas')
//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight
