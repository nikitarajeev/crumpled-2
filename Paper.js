class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			strokeWeight(3);
			fill(255,0,255)
			image(this.img, this.ball.position.x, this.ball.position.y, this.r, this.r);
			pop()
			
	}

}