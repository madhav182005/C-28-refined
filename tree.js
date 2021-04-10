class Tree{
  constructor(x,y){
      this.x = x;
      this.y = y;
      this.width = 450; 
      this.height = 600; 
      this.thickness = 10; 
      this.image = loadImage("tree.png"); 
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic:true})
      World.add(world, this.body); 
  }
  display(){
    push();
    translate(this.body.position.x, this.body.position.y+10);
    imageMode(CENTER);
    image(this.image, 0, -this.height/2, this.width, this.height);
    pop();
  }
}