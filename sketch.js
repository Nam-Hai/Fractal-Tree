const lenght = 100;
const coefDiminution = 0.67;
let branchLenght = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);

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
  rotate(- PI / 4);
  branch(lenght * coefDiminution);

  rotate(PI / 2);
  branch(lenght * coefDiminution)
  rotate(-PI / 4);
  translate(0, lenght)
}