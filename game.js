class Game {
    constructor(){
        this.background = new Background()
        this.backgroundImage = []
    }
   draw(){
       this.background.draw()
      // console.log('draw here in Game section')

   }
   preload(){
    
   this.backgroundImage = [

    { src: loadImage('/cyberpunk-street-files/PNG/layers/far-buildings.png'), x:0, speed: 0},
  
    { src: loadImage('/cyberpunk-street-files/PNG/layers/back-buildings.png'), x:0, speed: 1},

    { src: loadImage('/cyberpunk-street-files/PNG/layers/foreground.png'), x:0, speed: 3},

    // { src: loadImage('/cyberpunk-street-files/PNG/cyberpunk-street.png'), x:0, speed: 0},

    
   ]
  // console.log('preload here in Game section')
   }

}