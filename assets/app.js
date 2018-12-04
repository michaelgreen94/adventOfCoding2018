let snow = [];
let gravity;
let wind;
let zOff = 0;
let spreadsheet;
let textures = [];

function preload() {
  spreadsheet = loadImage('/assets/img/flakes32.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.5);
  //consistantly only has 300 flakes
  for (let x = 0; x < spreadsheet.width; x += 32) {
    for (let y = 0; y < spreadsheet.height; y += 32) {
      let img = spreadsheet.get(x, y, 32, 32)
      image(img, x, y)
      textures.push(img)
    }
  }
  for (let i = 0; i < 1000; i++) {
    let x = random(width);
    let y = random(height);
    let design = random(textures)
    snow.push(new Snowflake(x, y, design));
  }
}

function draw() {
  background(0)
  // snow.push(new Snowflake())
  // let wx = map(mouseX, 0, width, -0.05, 0.05);
  // let wind = createVector(wx, 0);
  zOff += 0.01;

  for (flake of snow) {
    let xOff = flake.pos.x / width;
    let yOff = flake.pos.y / height;
    let wAngle = noise(xOff, yOff, zOff) * TWO_PI;
    let wind = p5.Vector.fromAngle(wAngle)
    wind.mult(0.05)
    flake.applyForce(gravity)
    flake.applyForce(wind)
    flake.update()
    flake.render()
  }
  // for (let i = snow.length - 1; i >= 0; i--) {
  //   if (snow[i].offScreen()) {
  //     snow.splice(i, 1)
  //   }
  // }
}