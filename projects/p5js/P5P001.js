function setup() {
    let canvas = createCanvas(getSize(windowWidth), getSize(windowWidth));
    canvas.parent("P5P001");
    background(0);
}

function windowResized() {
    resizeCanvas(getSize(windowWidth), getSize(windowWidth));
}

function getSize(size){
    const maxSize = 600;
    return size > maxSize ? maxSize : size;
}

let p = [];
function draw() {
  background(0, 15);

  fill(0);
  stroke(255);

  let midW = width / 2;
  let midH = height / 2;
  let r = 20+map(mouseX,0,400,0,300);
  let rChange = map(sin(frameCount / 50), -1, 1, 0.3, 2);

  //偏差值
  let d = 20;
  let f = frameCount / 20;

  for (let i = 5; i > 0.3; i -= 0.3) {

    let n = map(noise(i * 2), 0, 1, 1, 100);
    let n2 = map(noise((i + 0.3) * 2), 0, 1, 1, 100);

    let q=sin(frameCount /300)*8;
    
    strokeWeight(5);
    point(midW, midH);

    point(
      midW + (i * r * sin(f - i * q)) * rChange,
      midH + (i * r * cos(f - i * q)) * rChange);

    strokeWeight(1);

   if (i < 5) {
      line(
        midW + ((i + 0.3) * r * sin(f - (i + 0.3) * q)) * rChange,
        midH + ((i + 0.3) * r * cos(f - (i + 0.3) * q)) * rChange,
        midW + (i * r * sin(f - i * q)) * rChange,
        midH + (i * r * cos(f - i * q)) * rChange);

      if (i < 0.7) {
        line(midW, midH,
          midW + (i * r * sin(f - i * q)) * rChange,
          midH + (i * r * cos(f - i * q)) * rChange);
      }
    }
  }
}