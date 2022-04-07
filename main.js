const width = 2145;
const height = 1000;
const game = new Game()
let beginn = true
let endGame = false
const classBeginn = new Beginn()
//let mySound

function setup(){
  //  console.log('this is the setup')
 createCanvas(width, height) 
 
}

function draw(){
    //background(200);
    if(beginn ===true){
        classBeginn.draw()
    } else if (beginn === false){
        game.draw()
    }
}

    
    
  //  console.log('this is the draw in main')


function preload(){
        classBeginn.preload()
        game.preload()
    }
    

   // console.log('this is the preload')


function keyPressed(){
   if (keyCode === 32 ){
        beginn = !beginn
        draw(beginn)
        preload(beginn)
   }
    if (keyCode === 37){
       game.player.left()
    }
    if (keyCode === 39){
        game.player.right()
    }
    if(keyCode === 38) {
        game.player.jump()
    }
   

}