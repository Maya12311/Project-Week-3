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
       { src: loadImage('/cyberpunk-street-files/PNG/cyberpunk-street.png')}
   ]
  // console.log('preload here in Game section')
   }

}