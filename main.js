thunder = "";
enemy = "";

function preload(){
    thunder = loadSound("thunder.mp3");
    enemy = loadSound("enemy.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
  
    video = createCapture(VIDEO);
    video.hide();
  }

  function draw() {
    image(video, 0, 0, 600, 500);
  }
  