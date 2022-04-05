class Game {
    constructor(){
        this.background = new Background()
        this.backgroundImage = []
        this.player = new Player()
        this.playerImage = ''
        this.obstacle = new Obstacle()
        this.obstacleImage = ''

    }
   draw(){
       this.background.draw()
      // console.log('draw here in Game section')
      this.player.draw()
      this.obstacle.draw()
      

   }
   preload(){
    
   this.backgroundImage = [

    { src: loadImage('/cyberpunk-street-files/PNG/layers/far-buildings.png'), x:0, speed: 0 },
  
    { src: loadImage('/cyberpunk-street-files/PNG/layers/back-buildings.png'), x:0, speed: 1},

    { src: loadImage('/cyberpunk-street-files/PNG/layers/foreground.png'), x:0, speed: 3},

    // { src: loadImage('/cyberpunk-street-files/PNG/cyberpunk-street.png'), x:0, speed: 0},

    
   ]
   this.playerImage = loadImage('/Images/kisspng-stickman-ninja-gif-pro-evolution-soccer-2-17-graph-pixilart-woman-by-anonymous-5b6c43a02f6966.7061471315338218561942.png')
   this.obstacleImage = loadImage('/Images/tile000.png')
  // console.log('preload here in Game section')
   } 
   

}