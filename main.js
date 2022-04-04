const game = new Game()

function setup(){
    console.log('this is the setup')
   createCanvas(600, 600) 
}

function draw(){
    game.draw()
  //  console.log('this is the draw in main')
}

function preload(){
    
    game.preload()
    console.log('this is the preload')
}

