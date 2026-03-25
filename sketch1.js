let cam;

function setup() {
  createCanvas(640, 480);
  cam = createCapture(VIDEO);
  cam.hide();
  pixelDensity(1);
}

function draw() {
  cam.loadPixels();
  loadPixels();

  let index = 0;
  let radius = 150;
  let zoom = 0.5;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let d = dist(x, y, mouseX, mouseY);
      let lookX = x;
      let lookY = y;

      if (d < radius) {
        lookX = mouseX + (x - mouseX) * zoom;
        lookY = mouseY + (y - mouseY) * zoom;
      }
      let camIndex = (floor(lookX) + floor(lookY) * cam.width) * 4;

      pixels[index] = cam.pixels[camIndex];
      pixels[index + 1] = cam.pixels[camIndex + 1];
      pixels[index + 2] = cam.pixels[camIndex + 2];
      pixels[index + 3] = 255;

      index += 4;
    }
  }
  updatePixels();
}
