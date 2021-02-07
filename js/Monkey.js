class Monkey{
    constructor(x,y,width,height){

        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.image = loadImage("Images/Monkey.png");
        this.image2 = loadImage("Images/MonkeyS.png");
        this.side = this.image;
        
    }
    movement() {

        if(keyDown(UP_ARROW)){
            this.y = this.y - 5;
          }
          if(keyDown(DOWN_ARROW)){
            this.y = this.y + 5;
          }
          if(keyDown(LEFT_ARROW)){
            this.x = this.x - 5;
            this.side = this.image;

          }
          if(keyDown(RIGHT_ARROW)){
            this.x = this.x + 5;
            this.side = this.image2;

          }

    }
    display(){
        
        push();
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
        translate(this.x, this.y);

        imageMode(CENTER);
        image(this.side, 0,0,50,50);
        pop();

        

    }
}