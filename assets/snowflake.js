function getRandomSize() {

  let r = pow(random(0, 1), 3);
  return constrain(r * 32, 8, 32);

  // let r = randomGaussian() * 2;
  // return constrain(abs(r * r), 2, 36);

  // while (true) {
  //   let r1 = random(1);
  //   let r2 = random(1);
  //   if (r2 > r1) {
  //     return r1 * 36
  //   }
  // }
}

class Snowflake {

  constructor(sx, sy, img) {
    let x = sx || random(width);
    let y = sy || random(-100, -10);
    //random snowflake img
    this.img = img;
    //snowflake position
    this.pos = createVector(x, y);
    //snowflake velocity
    this.vel = createVector(0, 0);
    //snowflake acceleration
    this.acc = createVector();
    this.angle = random(TWO_PI)
    //snowflake size
    this.r = getRandomSize();
    //terminal velocity
    // this.terminal = this.r
  }

  applyForce(force) {
    //parallax effect hack
    let f = force.copy();
    f.mult(this.r)

    // let f = force.copy();
    // f.div(this.mass);
    this.acc.add(f);
  }

  randomize() {
    let x = random(width);
    let y = random(-100, -10);
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector();
    this.r = getRandomSize();
  }



  update() {
    //adds velocity to the position
    this.vel.add(this.acc);
    this.vel.limit(this.r * 0.2)

    if (this.vel.mag() < 1) {
      this.vel.normalize();
    }

    this.pos.add(this.vel)
    this.acc.mult(0);

    if (this.pos.y > height + this.r) {
      this.randomize()
    }
  }

  render() {
    // stroke(255);
    // strokeWeight(this.r);
    // point(this.pos.x, this.pos.y)
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.img, 0, 0, this.r, this.r)
    pop();

    //rotates snowflakes by the velocities magnitude
    this.angle += this.vel.mag() / 150;
  }

  // offScreen() {
  //   return (this.pos.y > height + this.r)
  // }











}