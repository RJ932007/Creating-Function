//Global Variables

var rec1,rec2,rec3,rec4;

function setup() {

  createCanvas(800,400);

  rec1 = createSprite(400, 200, 50, 50);
  rec1.shapeColor="yellow";

  rec2 = createSprite(500,200,50,50);
  rec2.shapeColor="green";

  rec3 = createSprite(600, 200, 50, 50);
  rec3.shapeColor="cyan";

  rec4 = createSprite(700, 200, 50, 50);
  rec4.shapeColor="red";

}

function draw() {
  background("black");
  
  rec2.x=mouseX;
  rec2.y=mouseY;

  if(isTouching(rec1,rec2)){

    rec1.shapeColor="blue";
    rec2.shapeColor="white";

  }
  else{

    rec1.shapeColor="yellow";
    rec2.shapeColor="green";

  }

  if(isTouching(rec2,rec3)){

    rec2.shapeColor="blue";
    rec3.shapeColor="white";

  }
  else{

    rec3.shapeColor="yellow";
    rec2.shapeColor="green";

  }
  drawSprites();
}

function isTouching(rec1,rec2){

if(rec1.x-rec2.x<rec1.width/2+rec2.width/2 && 
  rec2.x-rec1.x<rec1.width/2+rec2.width/2 && 
  rec1.y-rec2.y<rec1.height/2+rec2.height/2 &&
  rec2.y-rec1.y<rec1.height/2+rec2.height/2){

    return true;
    

  }

  else return false;


}