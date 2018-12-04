function getRandomSize() {
  while (true) {
    let r1 = random(1);
    let r2 = random(1);
    if (r2 > r1) {
      return r1
    }
  }
}

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
    //snowflake size
    this.r = getRandomSize();
    //terminal velocity
    this.terminal = this.r
  }

  applyForce(force) {
    //parallax effect hack
    let f = force.copy();
    f.mult(this.r * 0.3)

    // let f = force.copy();
    // f.div(this.mass);
    this.acc.add(force);
  }

  render() {
    stroke(255);
    strokeWeight(this.r);
    point(this.pos.x, this.pos.y)
  }

  update() {
    //adds velocity to the position
    this.vel.limit(this.r)
    this.vel.add(this.acc);
    this.pos.add(this.vel)
    this.acc.mult(0);
  }


  offScreen() {
    return (this.pos.y > height + this.r)
  }











}