class Ground extends BaseClass {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
    super(x, y, width, height, PI/2, options);
      this.image = loadImage("sprites/ground.png");
      
    }
    
  };