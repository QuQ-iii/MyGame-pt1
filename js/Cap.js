class Cap{
    constructor(x,y,width,height,color){

        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.cap = color
        this.blueCapIMG = loadImage("Images/blueCap.png");
        this.redCapIMG = loadImage("Images/redCap.png");
        
    }
    display(){
        
        push();
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
        translate(this.x, this.y);

        imageMode(CENTER);
        if(this.color = "red"){
            image(this.redCapIMG, 0,0,50,50);
        }else if(this.color = "blue"){
            image(this.blueCapIMG, 0,0,50,50);
        }
        pop();

        

    }
}