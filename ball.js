class Ball {
    constructor(x, y) {
      var options = {
        isStatic: true
      };
      this.r = 30;
      this.speed = 0.05;
      this.body = Bodies.circle(x, y, this.r, options);
      this.image = loadImage("assets/ball.png");
      World.add(world, this.body);
    }
  display(){
    var pos=this.body.position;
    push();
    imageMode(CENTER)
    image(this.image,pos.x,pos.y,this.r,this.r)
    pop();
  }
  shoot(){
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {
      x:  -2, y: -2 });
  }
   

  }