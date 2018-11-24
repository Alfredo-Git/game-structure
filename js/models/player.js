function Player(ctx) {
  this.ctx = ctx;

  this.img = new Image();
  this.img.src = "img/mario.png";
  this.img.frames = 3;
  this.img.frameIndex = 0;

  this.x = 20;
  this.y = this.ctx.canvas.height - 115;
  this.w = 50;
  this.h = 80;
  this.vx = 0;
  this.vy = 0;

  this.y0 = this.y;

  this.frameCounter = 0;
}

Player.prototype.draw = function() {
  this.ctx.drawImage(
    this.img,
    this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
    0,
    this.img.width / this.img.frames,
   this.img.height,
   this.x,
   this.y,
   this.w, 
   this.h);
  
   

    
};

Player.prototype.move = function() {
  this.animate();
  this.x += this.vx;
  this.vy += 0.5;
  this.y += this.vy;

  if (this.y >= this.y0){
    this.y = this.y0;
    this.vy = 0;
  }

};

Player.prototype.animate = function() {
  if (++this.frameCounter % 10 === 0 ) {
    this.frameCounter = 0 ;
    if (this.img.frameIndex === this.img.frames - 1){
      this.img.frameIndex = 0;
    } else{
      this.img.frameIndex++;
    }
  }
};

Player.prototype.jump = function() {
  this.vy -= 10;

};

Player.prototype.isJumping = function() {
};

Player.prototype.onKeyDown = function(event) {
  switch (event.keyCode) {
    case KEY_UP:
      this.jump();
      break;
    case KEY_RIGHT:
      this.vx = 10;
      this.x += this.vx;
      console.log('hola', this.vx, this.x, this);
      break;
    case KEY_LEFT:
      this.vx = -10;
      break;
  }
  console.log(event.keyCode)

};

Player.prototype.onKeyUp = function(event) {
  console.log(event)
};
