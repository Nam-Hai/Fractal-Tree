const lenght = 100;
const coefDiminution = 0.67;
let angle;
let branchLenght = [];

function setup() {
  createCanvas(400, 400);
  angle = PI / 4;
  slider = createSlider(0, PI, PI / 4, 0.01)
}

function draw() {
  background(51);
  angle = slider.value();
  stroke(255)
  translate(200, height)
  branch(lenght);
}

function branch(lenght) {
  line(0, 0, 0, - lenght);
  if (lenght < 5) {

    return
  }

  translate(0, -lenght);
  rotate(- angle);
  branch(lenght * coefDiminution);

  rotate(2 * angle);
  branch(lenght * coefDiminution)
  rotate(- angle);
  translate(0, lenght)
}