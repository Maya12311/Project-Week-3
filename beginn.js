class Beginn {
    constructor() {
        this.startpic
        this.x=0
        this.y =0
        this.width =2145
        this.height = 1000
            
        }
        draw(){
            image(this.startpic, this.x, this.y, this.width, this.height)
            if(!beginn){
                game.draw()
            }
            
           // game.draw()
    }
    preload(){
        this.startpic = loadImage('/Images/190332-crop0_131_600_468-yjyqncye-v4-2.png')
        if(!beginn){
            game.preload()
        }
       // game.preload()
    }
    start(){
       // game.draw()
      //  game.preload()
    }
   
}