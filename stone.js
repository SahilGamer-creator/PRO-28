class Stone {
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
  
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
    World.add(world, this.body);
    
    this.image = loadImage("sprites/stone.png");

	}
	display()
	{
			
			var stonepos=this.body.position;		

			push()
			translate(stonepos.x, stonepos.y);
      imageMode(CENTER)
      image(this.image,this.x,this.y,80,100);
			pop()
			
	}

}