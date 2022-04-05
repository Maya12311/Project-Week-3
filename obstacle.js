class Obstacle {
    constructor(image) {
        this.image = image
        this.x     = (Math.random() *2000) 
        this.y     = (Math.random() *600) 
        this.width = 50
        this.height= 50
    }
    draw() {
       this.x--
        image(this.image, this.x, this.y, this.width, this.height)
    }
}