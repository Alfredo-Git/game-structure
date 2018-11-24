function Game(canvasElement) {
  this.ctx = canvasElement.getContext("2d");

  this.player = new Player(this.ctx);

  this.intervalId = undefined;
  this.bg = new Background(this.ctx);
  this.setListener();
  this.obstacles = [];
  this.drawCount = 0;
}

Game.prototype.setListener = function(){
  document.addEventListener("keydown", this.player.onKeyDown.bind(this.player));
  document.addEventListener("keyup", this.player.onKeyUp.bind(this.player));
}

Game.prototype.start = function() {
  this.intervalId = setInterval(function() {
    this.drawCount++;
    this.clear();
    this.drawAll();
    this.checkGameOver();
    this.moveAll();
    if (this.drawCount % OBSTACLE_INTERVAL == 0){
   this.addObstacle();
   this.drawCount = 0;
  }
  }.bind(this), DRAW_INTERVAL_MS);
};

Game.prototype.addObstacle = function() {
  var o = new Obstacle(this.ctx);
  this.obstacles.push(o);
}

Game.prototype.drawAll = function(action) {
    this.bg.draw();
    this.player.draw();
    this.obstacles.forEach(function(o){
      
      o.draw();
  
});
};
Game.prototype.moveAll = function(action) {  
  this.bg.move();
  this.player.move();

  // this.obstacles.forEach(function(o){
  //   o.move();
  // })
    
  
};

Game.prototype.checkGameOver = function() {
};

Game.prototype.gameOver = function() {
  clearInterval(this.intervalId);

  if (confirm("GAME OVER! Play again?")) {
    location.reload();
  }
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
};
