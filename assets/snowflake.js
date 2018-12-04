class Snowflake {

  constructor() {
    let x = random(width);
    let y = random(-100, -10);

    //snowflake position
    this.pos = createVector(x, y);
    //snowflake velocity
    this.vel = createVector(0, 0);
    //snowflake acceleration
    this.acc = createVector();
    this.r = random(4, 8);
  }

  applyForce(force) {
    this.acc.add(force)
  }

  update() {
    //adds velocity to the position
    this.vel.add(this.acc);
    this.pos.add(this.vel)
    this.acc.mult(0);
  }

  render() {
    stroke(255);
    strokeWeight(this.r);
    point(this.pos.x, this.pos.y)
  }
}