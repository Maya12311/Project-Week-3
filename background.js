class Background{
    draw(){
        game.backgroundImage.forEach(function (img){
            img.x -= img.speed
            image(img.src, img.x, 0, width, height)
            image(img.src, img.x + width, 0, width, height)
            if (img.x <= - width) {
                img.x = 0
            }
        })
           
    // image(game.backgroundImage[0].src, 0, 0, width, height) 
      // console.log('this is the background')
    }
   
}

