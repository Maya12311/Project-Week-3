class Arbeitsamt{
constructor(img){
    this.x = (Math.random() *2000) 
    this.y = (Math.random() *600) 
    this.w = 50
    this.h = 50
    this.img = img
}

draw(){
    this.x-=5
    image(this.img, this.x, this.y, this.w, this.h)
}

}