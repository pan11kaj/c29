class Block{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
      isStatic:false
      }
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.body = Bodies.rectangle(x, y, width, height, options);
    
      World.add(world, this.body);
    }
    display(){
     rectMode(CENTER);
     var pos = this.body.position;
     var pos2 = this.body.position;
      push();
      translate(pos,pos2);
      rect(pos.x,pos.y,this.width,this.height); 
      
      pop();
    }
}