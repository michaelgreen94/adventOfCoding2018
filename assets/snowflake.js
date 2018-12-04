class Snowflake {

  constructor() {
    let x = random(width);
    let y = random(height);

    //snowflake position
    this.pos = createVector(x, y);
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