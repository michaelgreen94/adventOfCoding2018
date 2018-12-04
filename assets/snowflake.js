class Snowflake {

  constructor() {
    //snowflake position
    this.pos = createVector(300, 200);
    //snowflake velocity
    this.vel = createVector();
    //snowflake acceleration
    this.acc = createVector();
  }

  render() {
    stroke(255);
    strokeWeight(4);
    point(this.pos.x, this.pos.y)
  }
}