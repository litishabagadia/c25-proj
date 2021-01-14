class Dustbin
{
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,option)
        World.add(world,this.body)
     this.width=width
     this.height=height
     this.dustbinImg=loadImage("dustbingreen.png");
    }

    display(){
        var pos=this.body.position
        translate (pos.x,pos.y)
        fill ("orange")
        image(this.dustbinImg,0,-30,this.width+80,this.height)
    }
}