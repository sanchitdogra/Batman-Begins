class Drop 
{
    constructor(x, y, r)
     {
        var options = 
        {
            restitution: 0.4,
            friction: 1.4
        }
        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);

    }
    display() 
    {
        push();
        var pos = this.body.position;
        var angle = this.body.angle;
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0, 0, this.r, this.r);
        pop();
    }

    position()
    {
        if(this.body.position.y > height)
        {
            Matter.Body.setPosition(this.body,{x:random(0,400), y:random(0,400)});
        }
    }
}