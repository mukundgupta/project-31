class Particle {
    constructor(x,y,diameter){
  
        var options = {
            isStatic: false,
            restitution: 0.5,
            friction:1,
            density: 1.2
        }
        this.diameter = diameter
        this.body = Bodies.circle(x,y,diameter/3,options)
        this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
   
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       fill(this.color)
        ellipseMode(RADIUS)
        ellipse(0,0,this.diameter,this.diameter)
        pop();
    }
  }