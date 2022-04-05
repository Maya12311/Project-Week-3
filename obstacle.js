class Obstacle {
    constructor(image) {
        this.image = image
        this.x     = (Math.random() *2000) 
        this.y     = (Math.random() *600) 
        this.width = 50
        this.height= 50
    }
    draw() {
       this.x-=5
        image(this.image, this.x, this.y, this.width, this.height)
    }
    collision(playerInfo){
       // console.log('collision', playerInfo)
        const obstacleX = this.x + this.width /2
        const obstacleY = this.y + this.height /2
        const playerX = playerInfo.x + playerInfo.width /2
        const playerY = playerInfo.y + playerInfo.height/2
        if(dist(obstacleX, obstacleY, playerX, playerY) < 40) {
            game.score += 10
            document.getElementById('score').innerHTML =`Score: ${game.score}`

            return true

        } else{
            return false
        }
    }
} 