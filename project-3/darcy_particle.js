function preload() {
  AdultD = loadImage("Adult_Darcy.png");
  BabyD = loadImage("Baby_Darcy.png");
}

let bubbles = [];
let palette = ["#D8D8D8", "#555555", "#101010", "#8E8E8E", "#F6F6F6"];

function setup() {
  createCanvas(1000, 1000);
  image(BabyD,0,10);
  for (let i = 0; i < 50; i++) {
    bubbles[i] = new Bubble(random(width), random(height), 10);
  }
}

function mouseClicked() {
  //BabyD.hide();
  image(AdultD,0, 10);
}

function draw() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r, n) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = random(palette);
  }

  move() {
    this.x = this.x + random(-15, 15);
    this.y = this.y + random(0, 5);
    if (this.y > height) {
      this.y = 0;
    }
  }

  show() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, this.r * 2);
  }
}