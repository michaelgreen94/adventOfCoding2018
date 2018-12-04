let snow = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0)
  snow.push(new Snowflake())

  for (flake of snow) {
    flake.update()
    flake.render()
  }
}