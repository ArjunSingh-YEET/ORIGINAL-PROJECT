class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 80;
        World.add(world, this.umbrella)
        this.batmanImg = loadImage("batman.png")
    }
    

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
      

        if(frameCount >=200){
            image(this.batmanImg,pos.x +40,pos.y+60,250,250)
        }
        else{
            image(this.image,pos.x + 40,pos.y+60,250,250);

        }
    }
}