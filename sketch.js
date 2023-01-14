/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/4;
	treePos_y = height/2;
    
    canyon = {x_pos: 50, width: 80};    
    mountain = {x_pos: width/5, width: 250, height: 300};    
    cloud = {x_pos: 400, y_pos: 40 ,width: 100};


    collectable = {x_pos: width/6, y_pos: height/1.5, size: 30}
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground
    
    
    
    //1. a cloud in the sky
	
	noStroke();
	fill(255);
    ellipse(cloud.x_pos, cloud.y_pos, cloud.width, 70);
    ellipse(cloud.x_pos - cloud.width/3, cloud.y_pos, cloud.width*0.8, 50);
    ellipse(cloud.x_pos + cloud.width/3, cloud.y_pos, cloud.width*0.8, 50);



	// a mountain in the distance
    
    fill(180);
    triangle(mountain.x_pos, floorPos_y, mountain.x_pos + mountain.width, floorPos_y, mountain.x_pos + mountain.width/2, floorPos_y-mountain.height);
    triangle(mountain.x_pos, floorPos_y, mountain.x_pos + mountain.width, floorPos_y, mountain.x_pos + mountain.width/4, floorPos_y-mountain.height*0.85);

    // tree
    fill(148);
    rect(treePos_x, treePos_y + 50, 50, 100);
    fill(0, 255, 0);
    
    triangle(treePos_x - 40, treePos_y + 110, treePos_x + 90, treePos_y + 110, treePos_x + 25, treePos_y -  2);
    triangle(treePos_x - 40, treePos_y +  80, treePos_x + 90, treePos_y +  80, treePos_x + 25, treePos_y - 32);

    
    // a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen
    fill(200);
    rect(canyon.x_pos, 432, canyon.width, 144);
    fill(100,100,100, 100);
    rect(canyon.x_pos, 432, canyon.width * 0.2 , 144);
    rect(canyon.x_pos + canyon.width * 0.8 , 432, canyon.width * 0.2, 144);
    
    //a collectable token - eg. a jewel, fruit, coins
    fill(255, 215, 0);
    ellipse(collectable.x_pos, collectable.y_pos, collectable.size, collectable.size);
    
    // the game character
    // draw the face
    fill(213, 216, 220);
    ellipse(gameChar_x , gameChar_y - 60, 26, 30);
    
    // draw the body
    fill(0, 0, 256);
    rect(gameChar_x - 15, gameChar_y - 45, 30, 40);
    
    // draw hands
    fill(0);
    rect(gameChar_x - 21, gameChar_y - 45, 6, 28);
    rect(gameChar_x + 15, gameChar_y - 45, 6, 28);
    
    // draw the feets
    fill(0);
    rect(gameChar_x - 15, gameChar_y - 5, 10, 8); 
    rect(gameChar_x + 5, gameChar_y - 5, 10, 8);
    
    
    
    

}

function mousePressed()
{
    gameChar_x = mouseX;
    gameChar_y = mouseY;

}
