var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music ;

function preload(){
music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,50);
    block1.shapeColor = "blue";

    block2 = createSprite(285,580,200,50);
    block2.shapeColor = "orange";

    block3 = createSprite(495,580,200,50);
    block3.shapeColor = "red";

    block4 = createSprite(700,580,200,50);
    block4.shapeColor = "yellow";

   

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    if(ball.isTouching(block1)){
        ball.y = ball.y -1
    } 


    if(ball.isTouching(block2)){
        ball.y = ball.y -1
    } 


    if(ball.isTouching(block3)){
        ball.y = ball.y -1
    } 


    if(ball.isTouching(block4)){
        ball.y = ball.y -1
    } 


    if(block1.isTouching(ball)){
        ball.shapeColor = "blue"; 
        
    
  
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
       

      
    }

    if(block3.isTouching(ball)){
        ball.shapeColor = "red";
 
       
        
    }


    if(block4.isTouching(ball)){
        ball.shapeColor = "yellow";
 
       
    }

    drawSprites();
}
