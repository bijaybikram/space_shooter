// this.shootSound = new Audio();
// shootSound.src = "./sounds/shoot.wav";
class Bullet {
  constructor(x = 0, y = 0) {
    this.position = {
      x: x,
      y: y,
    };
    this.velocity = {
      x: 0,
      y: -5,
    };
    this.size = { width: 30, height: 30 };

    this.bullet = new Image();
    this.bullet.src = "./images/bullet.png";
  }
  draw() {
    c.beginPath();
    c.fillStyle = "yellow";
    c.drawImage(
      this.bullet,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }
  move() {
    this.position.y += this.velocity.y;
  }
  update() {
    this.draw();
    this.move();
  }
}
