class Boy{
    constructor(){
      
       this.width=25;
       this.height=25;
       this.x=25;
       this.y=40;
       this.boy=createSprite(this.x,this.y,this.width,this.height);
       this.boyImage=loadImage("Pictures/Protagonist.png");
       this.boy.scale=0.5;
       this.boy.width=25;
       this.boy.height=25;
     
       this.boy.setCollider("rectangle",20,0,100,100);
       //this.boy.debug=true;
         }
         display(){
          this.boy.addImage(this.boyImage);

           drawSprites();  
         }
         control(){
          if(keyDown(LEFT_ARROW)){
           this.boy.x=this.boy.x-5;
       }
       if(keyDown(RIGHT_ARROW)){
        this.boy.x=this.boy.x+5;
     } 
     if(keyDown(UP_ARROW)){
        this.boy.y=this.boy.y-5;
    }
     if(keyDown(DOWN_ARROW)){
        this.boy.y=this.boy.y+5;
    }
        edges=createEdgeSprites();
    this.boy.collide(edges); 
    //this.boy.collide(wall1);  
   // if(this.boy.isTouching(wall1)){
   // this.boy.y=this.boy.y-2;
   // }
         }
}