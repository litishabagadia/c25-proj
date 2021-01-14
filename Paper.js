class Paper
{
    constructor(x,y,radius){
        var option={
            isStatic:false,
            restitution:0.2,
            friction:0.5,
            density:1.2
         
        }
        this.body=Bodies.circle(x,y,radius/2,option)
        World.add(world,this.body)
     this.radius=radius
     this.paperImg=loadImage("paper.png")
    }

    display(){
        var pos=this.body.position
        fill ("red")
     image(this.paperImg,pos.x,pos.y,this.radius,this.radius)
    }
}