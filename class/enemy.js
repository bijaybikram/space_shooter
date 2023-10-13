class Enemy {
  constructor() {
    this.position = {
      x: Math.random() * (canvas.width - 50 - 10) + 10,
      y: -50,
    };
    this.velocity = { x: 0, y: 1 };
    this.size = { width: 40, height: 40 };
  }
  draw() {
    c.beginPath();
    c.fillStyle = "yellow";
    c.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }
  move() {
    this.position.y += this.velocity.y;
  }

  collisionWithBullets(bullet) {
    // check collision between enemy and player
    for (let i = 0; i < bullet.length; i++) {
      if (
        this.position.x + this.size.width >= bullet[i].position.x &&
        this.position.x <= bullet[i].position.x + bullet[i].size.width &&
        this.position.y + this.size.height >= bullet[i].position.y &&
        this.position.y <= bullet[i].position.y + bullet[i].size.height
      ) {
        this.velocity = 0;
        this.position.x = -100;
        this.position.y = -100;
      }
    }
  }

  collision(player1) {
    // check collision between enemy and player
    if (
      (this.position.x + this.size.width >= player1.position.x &&
        this.position.x <= player1.position.x + player1.size.width &&
        this.position.y + this.size.height >= player1.position.y &&
        this.position.y <= player1.position.y + player1.size.height) ||
      this.position.y + this.size.height >= canvas.height
    ) {
      player1.isAlive = false;
      //   console.log("Player is dead");
    }
  }

  update() {
    this.draw();
    if (player1.isAlive) {
      this.move();
    }
  }
}
