class Archery{
    constructor(x,y,w,h,angle)
    {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.angle = angle;
     this.archerimage = loadImage("./assets/playerArcher.png");
      //this.arrowimage = loadImage("./assets/arrow.png");
      // player = cannonBase
      // playerArcher = cannon
      // arrow = cannonBall
    }
    display()
    {

      
    // image(this.arrowimage,this.x,this.y,this.w,this.h);
    image(this.archerimage,300,200,150,150);
    
    }
  }