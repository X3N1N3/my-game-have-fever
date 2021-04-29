var godzillaImg, xenoImg, soldierImg, alienImg, heartImg, backGroundImg1, backGroundImg2, gameOverImg
var Soldier, Alien, Xeno, Coin, BigCoin, Godzilla
var BG
var alienBullet = 0, xenoBullet = 0, godzillaBullet = 0
var bullet
var bulletsGroup
var invisGround
var alienGroup
var xenoGroup
var godzillaGroup
var heartGroup
var lives = 3
function preload() {
    heartImg = loadImage("Images/Heart.png")
    xenoImg = loadImage("Images/ajajjaja.png")
soldierImg = loadImage("Images/Soldow.png")
alienImg = loadImage("Images/AWIEN.png")
backGroundImg1 = loadImage("Images/WhyIsThereANuclearPowerplantNearCivilisation.jpg")
backGroundImg2 = loadImage("Images/WhyIsTheGroundCracked.jpg")
gameOverImg = loadImage("Images/6303-GAME_OVER.png")
godzillaImg = loadImage("Images/godzilla.png")

}
function setup() {
createCanvas(windowWidth,windowHeight)
BG = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
Soldier = createSprite(55,windowHeight-115, 50,50)
//Soldier.addImage(soldierImg)
Soldier.scale = 0.5
Soldier.debug = true
BG.addImage(backGroundImg1)
BG.scale = 3.7
//Alien = createSprite(500,windowHeight-100, 50, 50)
//Alien.addImage(alienImg)
//Godzilla = createSprite(800, windowHeight-300, 50, 50)
//Godzilla.addImage(godzillaImg)
//Godzilla.scale = 1.09
//Xeno = createSprite(950, windowHeight-150, 50 , 50)
//Xeno.addImage(xenoImg)
//Xeno.scale = 0.68
bulletsGroup = new Group()
alienGroup = new Group()
xenoGroup = new Group()
godzillaGroup = new Group()
invisGround = createSprite(windowWidth/2,windowHeight-55,windowWidth,10)
invisGround.visible = false
}
function draw() {
    background("white");
    if(frameCount%250 === 0){
        Alien = createSprite(windowWidth-10,windowHeight-115,50,50)
       // Alien.addImage(alienImg)
        Alien.velocityX = -1.99
        Alien.debug = true
        alienGroup.add(Alien)
         
    
    }
    
    for(var i = 0; i < lives; i = i+1){
        
        var heart = createSprite(windowWidth-100*i-100,50,50,50)
        //heart.addImage(heartImg)
       heart.scale = 0.285
        
        
        
        


        }
        
           
          
        


       /*    if(frameCount%2625 === 0){
Xeno = createSprite(windowWidth-10,windowHeight-220,50,50)
Xeno.addImage(xenoImg)
Xeno.velocityX = -1.9
Xeno.scale = 0.659
xenoGroup.add(Xeno)
        }*/ 

if(keyIsDown("space")){
    if(frameCount %15=== 0){


    
    

    bullet = createSprite(Soldier.x+70,Soldier.y-28.6,4,4)
    bullet.velocityX = 2
bulletsGroup.add(bullet)
    
    
    }
    }
    if(frameCount%10000 === 0){
Godzilla = createSprite(windowWidth, windowHeight-300,50,50)
//Godzilla.addImage(godzillaImg)
Godzilla.velocityX = -1.4
Godzilla.scale = 1.1
godzillaGroup.add(Godzilla)


    }
    //for(var j = 0; j < alienGroup.length; j = j+1){
        if(bulletsGroup.isTouching(alienGroup)){
            for(var i = 0; i<alienGroup.length;i = i+1){
            if(bulletsGroup.isTouching(alienGroup[i])){
            bulletsGroup.destroyEach()
            alienBullet = alienBullet + 1
            if(alienBullet >= 3){
                alienGroup[i].destroy()
alienBullet = 0
            }
            
        
            }
            
            
          //  }
            
            
            
                }


    }
    

if(bulletsGroup.isTouching(godzillaGroup)){
   for(var i = 0; i<godzillaGroup.length;i = i+1){
    if(bulletsGroup.isTouching(godzillaGroup[i])){
    bulletsGroup.destroy()
    godzillaBullet = godzillaBullet + 1
if(godzillaBullet >= 10){
godzillaGroup[i].destroy()
godzillaBullet = 0

}
    }
    
    
   }
    
    
    
        }
        if(bulletsGroup.isTouching(xenoGroup)){
            for(var i = 0; i<xenoGroup.length;i = i+1){
             if(bulletsGroup.isTouching(xenoGroup[i])){
             bulletsGroup.destroy()
             xenoBullet = xenoBullet + 1
         if(xenoBullet >= 5){
         xenoGroup[i].destroy()
         xenoBullet = 0


        }
    }
    
    
   }
    
    
    
        }
   



   if(keyDown("UP_ARROW")){
Soldier.velocityY = -6





    }
Soldier.velocityY = Soldier.velocityY + 0.5
if(Soldier.isTouching(alienGroup)||Soldier.isTouching(xenoGroup)||Soldier.isTouching(godzillaGroup) ){
    lives = lives - 1
    
    alienGroup.destroyEach()
    xenoGroup.destroyEach()
        godzillaGroup.destroyEach()
    
    console.log(lives)
    
    
    
              }
    drawSprites();
    Soldier.collide(invisGround)


            }
  