const lenght = 100;
let coefDiminution;
let angle;
let curvature;

function setup() {
  createCanvas(400, 400);
  angle = PI / 4;
  angleSlider = createSlider(0, PI, PI / 4, 0.01);
  coefSlidier = createSlider(0, 0.75, 0.67, 0.01);
  curvatureSlider = createSlider(0.1, 1.5, 1, 0.01);
}

function draw() {
  background(51);
  angle = angleSlider.value();
  coefDiminution = coefSlidier.value();
  curvature = curvatureSlider.value();
  stroke(255)
  translate(200, height)
  branch(lenght);
}

function branch(lenght) {
  line(0, 0, 0, - lenght);
  if (lenght < 3) {

    return
  }

  translate(0, -lenght);
  rotate(- angle);
  branch(lenght * coefDiminution);

  rotate(angle + curvature * angle);
  branch(lenght * coefDiminution)
  rotate(- curvature * angle);
  translate(0, lenght)
}
