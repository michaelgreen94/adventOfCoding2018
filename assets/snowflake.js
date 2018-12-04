class Snowflake {

  constructor() {
    let x = random(width);
    let y = random(-100, -10);

    //snowflake position
    this.pos = createVector(x, y);
    //snowflake velocity
    this.vel = createVector(0, 5);
    //snowflake acceleration
    this.acc = createVector();
  }

  update() {
    //adds velocity to the position
    this.pos.add(this.vel)
  }

  render() {
    stroke(255);
    strokeWeight(4);
    point(this.pos.x, this.pos.y)
  }
}