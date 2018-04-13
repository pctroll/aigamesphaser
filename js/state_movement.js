
let StateMovement = {
  preload: function() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.load.image('bkgPurple', 'img/purple.png');
    this.load.image('ufoGreen', 'img/ufoGreen.png');
    this.load.image('ufoRed', 'img/ufoRed.png');
  },
  create: function() {
    this.background = this.add.tileSprite(0, 0, this.world.width, this.world.height, 'bkgPurple');
    
    this.player = this.add.image(this.world.centerX, this.world.centerY, 'ufoGreen');
    this.player.anchor.set(0.5, 0.5);
    this.player.speed = 300;
    // this.player.kill();

    this.keyboard = this.input.keyboard;
    this.player.direction = new Phaser.Point();

    this.enemy = this.add.image(0, this.world.centerY, 'ufoRed');
    this.enemy.anchor.set(0, 0.5);
    this.enemy.amplitude = 100;
    this.enemy.speed = 400;
    this.enemy.kill();

    // this.enemy.steering = new Steering();
    // this.enemy.speed = 200;
    // this.enemy.velocity = new Phaser.Point();

  },
  update: function() {
    // INPUT NAIVE
    // this.getInputNaive();

    // INPUT PROPER
    this.getInput();
    this.player.x += this.player.direction.x * this.player.speed * this.time.physicsElapsed;
    this.player.y += this.player.direction.y * this.player.speed * this.time.physicsElapsed;


    // AUTOMATIC MOVEMENT
    // this.enemyMovement();


  },
  getInputNaive: function() {
    
    if (this.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      this.player.x += this.player.speed * this.time.physicsElapsed;
    }
    else if (this.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      this.player.x -= this.player.speed * this.time.physicsElapsed;
    }
    if (this.keyboard.isDown(Phaser.Keyboard.UP)) {
      this.player.y -= this.player.speed * this.time.physicsElapsed;
    } else if (this.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      this.player.y += this.player.speed * this.time.physicsElapsed;
    }
  },
  getInput: function() {
    let up = this.keyboard.isDown(Phaser.Keyboard.UP);
    let down = this.keyboard.isDown(Phaser.Keyboard.DOWN);
    let right = this.keyboard.isDown(Phaser.Keyboard.RIGHT);
    let left = this.keyboard.isDown(Phaser.Keyboard.LEFT);

    let vertical = 0;
    if (up) vertical -= 1;
    if (down) vertical += 1;

    let horizontal = 0;
    if (left) horizontal -= 1;
    if (right) horizontal += 1;

    this.player.direction.x = horizontal;
    this.player.direction.y = vertical;
    this.player.direction.normalize();
  }
  // enemyMovement: function() {

  //   if (!this.enemy.alive) return;

  //   this.enemy.x += this.enemy.speed * this.time.physicsElapsed;
  //   this.enemy.y = this.world.centerX;

  //   if (this.enemy.x > this.world.width) {
  //     this.enemy.x = - this.enemy.width;
  //   }
  // }
};