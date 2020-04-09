// HI THIS IS MY CASTLE
class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
            friction: 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        noStroke();
        translate(pos.x, pos.y);
        fill(100, 100, 100);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}