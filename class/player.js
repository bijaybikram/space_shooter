class Player {
  constructor() {
    // init
    this.position = { x: canvas.width / 2.1, y: canvas.height / 1.5 };

    this.velocity = { x: 0, y: 0 };

    this.isAlive = true;
    this.size = { width: 40, height: 40 };

    this.ship = new Image();
    this.ship.src = "./images/ship3.png";
  }

  draw() {
    c.beginPath();
    c.fillStyle = "red";
    c.drawImage(
      this.ship,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }

  move() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  update() {
    this.draw();
    if (this.isAlive) {
      this.move();
    }
  }
}
