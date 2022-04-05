//console.log('player is speaking')

class Player {
    constructor(){
        this.x = 0
        this.y = 0
        this.width = 200
        this.height = 200
        this.gravity = 2
        this.velocity = 0
        this.isHurt = false

    }
    draw(){
        
        image(game.playerImage, this.x, this.y, this.width, this.height)

        this.velocity += this.gravity
        this.y += this.velocity
        //console.log(this.velocity);
        if (this.y >= 900 - this.height){
            this.y = 900 - this.height
        }

    }
    jump(){
        this.velocity = -40
    }
   /* right(){
      this.x += 120
   }
   left(){
       this.x -= 120
   } */
} 