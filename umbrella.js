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
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image,pos.x, pos.y + 70, 300, 300)
		pop()
 }
}
