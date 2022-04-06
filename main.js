const width = 2145;
const height = 1000;
const game = new Game()
let running = true
//let mySound

function setup(){
  //  console.log('this is the setup')
 createCanvas(width, height) 
 
}

function draw(){
    background(200);
    if (running) {
        game.draw();
    }
   
    
   
   
    }
  //  console.log('this is the draw in main')


function preload(){
    
    game.preload()

   // console.log('this is the preload')
}

function keyPressed(){
    if (keyCode === 32){
        game.player.jump()
    }
    if (keyCode === 37){
       game.player.left()
    }
    if (keyCode === 39){
        game.player.right()
    }
    
}






//let canvas = document.getElementById('canvas')
//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight
