class Paper{
    constructor(){
        var paperProps = {
            isStatic : false,
            resitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(200, 400, 28,paperProps);
        // this.radius = r;
        this.i = loadImage('paper.png');
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.i,0,0,80,80);
        pop();
    }
}