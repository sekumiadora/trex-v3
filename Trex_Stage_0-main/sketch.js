var score = 0;
var cacto, gameover, gameoverImage, reseta,resetaImage;
var grupo;
var grupo_de_cakitos;
var play = 1, fim = 0, inicia = 2;
var estado = play
var cloudImage;
var groundImage;
var cactoImage, cactoImage1, cactoImage2, cactoImage3, cactoImage4, cactoImage5, cactoImage6;
function preload() {
  trex_running = loadAnimation("imagi/trex1.png", "imagi/trex3.png", "imagi/trex4.png");
  gameoverImage = loadImage("imagi/gameOver.png");
  resetaImage = loadImage("imagi/restart.png");
  groundImage = loadImage("imagi/ground2.png");
  cloudImage = loadImage("imagi/cloud.png");
  cactoImage1 = loadImage("imagi/obstacle1.png");
  cactoImage2 = loadImage("imagi/obstacle2.png");
  cactoImage3 = loadImage("imagi/obstacle3.png");
  cactoImage4 = loadImage("imagi/obstacle4.png");
  cactoImage5 = loadImage("imagi/obstacle5.png");
  cactoImage6 = loadImage("imagi/obstacle6.png");
}

function setup() {
  createCanvas(1000, 200);

  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  edges = createEdgeSprites();

  grupo_de_cakitos = createGroup();



  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;


  inviibleGround = createSprite(200, 190, 400, 10);
  inviibleGround.visible = false;
  
  gameover = createSprite(500,100);
  gameover.addImage( gameoverImage);
  gameover.visible = false;

  reseta = createSprite(500,170);
  reseta.addImage( resetaImage )
  reseta.visible = false;

}
function draw() {
  background("white");

  if (estado === "play") {
    score = score + Math.round(frameCount % 05 === 0);
    ground.velocityX = -2;
    if (keyDown("space") && trex.y >= 161) {
      trex.velocityY = -12;
    }

    trex.velocityY = trex.velocityY + 0.8;

    if (ground.x < 0) {
      ground.x = ground.width / 2;
    }

    if (grupo_de_cakitos.isTouching(trex)) {
      estado == "fim"
      reseta.visible = true;
      gameover.visible = true;
      
    }
  } else if (estado == fim) {

  }





  textSize(20);
  text("score : " + score, 850, 100);



  //console.log(ground.x);

  //console.log(trex.y);





  trex.collide(inviibleGround);
  //trex.collide(ground);
  reset();
  spawnClouds();
  cakitos();

  drawSprites();
}
function spawnClouds() {
  if (frameCount % 90 == 0) {
    var cloud = createSprite(1000, 100, 40, 10);
    cloud.velocityX = -5;
    cloud.y = Math.round(random(10, 70));
    cloud.addImage("cloud", cloudImage);
    cloud.depth = trex.depth - 1;
    cloud.lifetime = 250;
  }
}
function cakitos() {
  if (frameCount % 80 === 0) {
    cacto = createSprite(1000, 164, 10, 40);
    cacto.velocityX = -4;
    var cakitosA = Math.round(random(1, 6));


    switch (cakitosA) {
      case 1: cacto.addImage(cactoImage1);
        break;
      case 2: cacto.addImage(cactoImage2);
        break;
      case 3: cacto.addImage(cactoImage3);
        break;
      case 4: cacto.addImage(cactoImage4);
        break;
      case 5: cacto.addImage(cactoImage5);
        break;
      case 6: cacto.addImage(cactoImage6);
        break;
      default: break;
    }
    cacto.scale = 0.5;
    cacto.lifetime = 250;
    grupo_de_cakitos.add(cacto);
  }

}

function reset(){
  trex.addAnimation("running", trex_running);
}




