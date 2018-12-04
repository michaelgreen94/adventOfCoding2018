let snow = [];
let gravity;

let spreadsheet;
let textures = [];

function preload() {
  spreadsheet = loadImage('/assets/img/flakes32.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.02);
  //consistantly only has 300 flakes
  for (let i = 0; i < 300; i++) {
    let x = random(width);
    let y = random(height);
    snow.push(new Snowflake(x, y));
  }

  for (let x = 0; x < spreadsheet.width; x += 32) {
    for (let y = 0; y < spreadsheet.height; y += 32) {
      let img = spreadsheet.get(x, y, 32, 32)
      image(img, x, y)
      textures.push(img)
    }
  }



}

function draw() {
  background(0)
  // snow.push(new Snowflake())

  for (flake of snow) {
    flake.applyForce(gravity)
    flake.update()
    flake.render()
  }

  // for (let i = snow.length - 1; i >= 0; i--) {
  //   if (snow[i].offScreen()) {
  //     snow.splice(i, 1)
  //   }
  // }

}