class Box {

    constructor(x,y,width,height){

       this.body=bodies.rectangle(x,y,width,height);
    this.body.shapeColor=color("red")
    World.add(world,this.body)
    

    }
display(){

    rectMode(CENTER)
    rect(0,0,0,0)
}
    
}




















