var playingGround;
var capSeller, monkey1,monkey2;
var border1, border2, border3, border4, border5, border6, border7, border8;
var bg1, bg2;

function preload() {
  

}
function setup(){
  canvas = createCanvas(windowWidth,windowHeight);

  bg1 = createSprite(windowWidth/2, (windowHeight/2) + 50, windowWidth - 100, windowHeight - 200);
  bg1.shapeColor = "white";

  border1 = new Wall(windowWidth - 50, (windowHeight/2) + 50, 20,windowHeight - 200);
  border2 = new Wall(windowWidth - (windowWidth - 50), (windowHeight/2) + 50, 20,windowHeight - 200);
  border3 = new Wall(windowWidth/4 -60, windowHeight - 50, (windowWidth/2) - 200,20);
  border4 = new Wall(windowWidth - (windowWidth/4 -60), windowHeight - 50, (windowWidth/2) - 200,20);
  border5 = new Wall(windowWidth/2, windowHeight - (windowHeight - 150), windowWidth - 80,20);

  capSeller = new CapSeller(300,300,20,20);

  monkey1 = new Monkey(200,200,20,20);
  monkey2 = new Monkey(300,200,20,20);
}
function draw(){
  background(56, 54, 54);

  capSeller.movement();
  monkey1.movement();
  monkey2.movement();

  // if(keyDown(UP_ARROW)){
  //   capSeller.y = capSeller.y - 5;
  // }
  // if(keyDown(DOWN_ARROW)){
  //   capSeller.y = capSeller.y + 5;
  // }
  // if(keyDown(LEFT_ARROW)){
  //   capSeller.x = capSeller.x - 5;
  // }
  // if(keyDown(RIGHT_ARROW)){
  //   capSeller.x = capSeller.x + 5;
  // }

  drawSprites();
  capSeller.display();
  border1.display();
  border2.display();
  border3.display();
  border4.display();
  border5.display();
  monkey1.display();
  monkey2.display();
}