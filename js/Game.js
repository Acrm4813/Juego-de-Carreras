class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1 = createSprite(350,200);
    car2 = createSprite(500,200);
    car3 = createSprite(650,200);
    car4 = createSprite(1000,200);
    car1.addImage(car1Img);
    car2.addImage(car2Img);
    car3.addImage(car3Img);
    car4.addImage(car4Img);
    cars =[car1,car2,car3,car4];
  }

  play(){
    form.hide();
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    if(allPlayers !== undefined){
      background("#c68767");
      image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
      //var display_position = 130;
      var index=0;
      var x =325;
      var y;
      for(var plr in allPlayers){
        index=index+1;
        x=x+200;
        y = displayHeight - allPlayers[plr].distance; 
        cars[index-1].x = x; 
        cars[index-1].y = y;
        if (index === player.index){ 
        stroke(10);
        fill("red");
        ellipse(x,y,60,100);
        cars[index - 1].shapeColor = "purple"; 
        camera.position.x = displayWidth/2; 
        camera.position.y = cars[index-1].y 
      }
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    if (player.distance>5250){
      gameState=2;
      player.rank+=1
      Player.updateCarsAtEnd(player.rank);
    }
    drawSprites();
  }

  End(){
    console.log("EndGame");
    console.log(player.rank);
  }
}
