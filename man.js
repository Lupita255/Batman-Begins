class Boy{
    constructor(x,y,width,height){
        var options={
            
            isStatic:true,
            friction:0.1
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("images/Walk/walking_1.png");
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode (CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}
