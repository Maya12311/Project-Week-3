//console.log('player is speaking')

class Player {
    constructor(){
        this.x = 0
        this.y = 1200
        this.width = 300
        this.height = 200
        this.gravity = 0.2
        this.velocity = 0

    }
    draw(){
        this.velocity += this.gravity
        this.y += this.velocity
        if (this.y >= 1000 - this.height){
            this.y = 1000 - this.height
        }
      image(game.playerImage, this.x, this.y, this.width, this.height)

    }
    jump(){
        this.velocity = -20
    }
} 