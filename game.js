class Game {
    constructor(){
        this.background = new Background()
        this.backgroundImage = []
        this.player = new Player()
        this.playerImage = ''
        this.obstacles = []
        

    }
   draw(){
       this.background.draw()
      // console.log('draw here in Game section')
      this.player.draw()
      
      if(frameCount % 120 === 0){
        this.obstacles.push(new Obstacle (this.obstacleImage))
     // console.log(frameCount)
    
    }
    this.obstacles.forEach(function (obstacle){
        obstacle.draw()
        
   })

   }
   preload(){
    
   this.backgroundImage = [

    { src: loadImage('/cyberpunk-street-files/PNG/layers/far-buildings.png'), x:0, speed: 0 },
  
    { src: loadImage('/cyberpunk-street-files/PNG/layers/back-buildings.png'), x:0, speed: 1},

    { src: loadImage('/cyberpunk-street-files/PNG/layers/foreground.png'), x:0, speed: 3},

    // { src: loadImage('/cyberpunk-street-files/PNG/cyberpunk-street.png'), x:0, speed: 0},

    
   ]
   this.playerImage = loadImage('/WalkingMan/ZfUU.gif')
   this.obstacleImage = loadImage('/Images/tile000.png')
  // console.log('preload here in Game section')
   } 
   

}