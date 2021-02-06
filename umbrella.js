class umbrella{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.image=loadImage("walking_1.png")
		this.body=Bodies.circle(this.x, this.y,options)
		World.add(world, this.body);
	}

	display()
	{
		var umbrellaPos=this.body.position;	
		push()
		translate(umbrellaPos.x, umbrellaPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}