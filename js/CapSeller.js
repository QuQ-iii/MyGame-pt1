class CapSeller{
    constructor(x,y,width,height){

        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.image = loadImage("Images/capSeller.png.png");
        this.image2 = loadImage("Images/CapSellerS.png");
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
            this.side = this.image2;

          }
          if(keyDown(RIGHT_ARROW)){
            this.x = this.x + 5;
            this.side = this.image;

          }

    }

    display(){
        
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);

        imageMode(CENTER);
        image(this.side,this.x,this.y,50,50);

    }
}