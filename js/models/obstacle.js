function Obstacle(ctx) {
    this.ctx = ctx;
  
    this.x = 30;//this.ctx.canvas.width;
    this.y = 30 //this.ctx.canvas.height - 115;
    this.w = 50;
    this.h = 60;
  
    this.vx = 0;
  }
  
  Obstacle.prototype.draw = function() {
    this.ctx.fillStyle = "white";
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.w, this.h);
    this.ctx.fill();
    this.ctx.closePath();
  }
  
  Obstacle.prototype.move = function() {
    this.x += this.vx;
  }