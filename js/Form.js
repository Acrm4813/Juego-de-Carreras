class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.reset = createButton('Restart');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2, 0)

    this.input.position(displayWidth/2, 160);
    this.button.position((displayWidth/10)*6, 200);
    this.reset.position(displayWidth-100, 20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/3, 100);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });
  }
}
