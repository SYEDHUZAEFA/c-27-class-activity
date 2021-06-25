class Bird
{
    constructor(x,y)
    {
        var option={
            'restitution' : 0.8,
            'friction': 0.3,
            'density': 0.1
        }
        this.body=Bodies.rectangle(x,y,20,20,option);
        World.add(world,this.body);
        
        this.width=20;
        this.height=20;
    }

    display()
    {
       
        var pos=this.body.position;
        var angle=this.body.angle;
        pos.x=mouseX;
        pos.y=mouseY;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("Red")
        rect(0,0,this.width,this.height);
        pop();     
    }
}