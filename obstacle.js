class Obstacle {
    constructor() {
       
        this.x     = 600
        this.y     = (Math.random() *600) /2.5
        this.width = 50
        this.height= 50
    }
    draw() {
       this.x--
        image(game.obstacleImage, this.x, this.y, this.width, this.height)
    }
}