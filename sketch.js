/*

The Game Project

Week 3

Canyons and coins

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;
//Declare four variables: `isLeft`, `isRight`, `isFalling` and `isPlummeting`.
var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var canyon;
var collectable;



function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    
    //Initialise each of them to `false`. These variables will be used to animate your game character.
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
    
    canyon = {x_pos: width*0.75, width: 60};    
    collectable = {x_pos: width/6, y_pos: floorPos_y, size: 30, isFound: false};
    collectable.y_pos = floorPos_y - collectable.size/2;

    
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon
    fill(200);
    rect(canyon.x_pos, floorPos_y, canyon.width, height-floorPos_y);
    fill(100,100,100, 100);
    rect(canyon.x_pos, floorPos_y, canyon.width * 0.2 , height-floorPos_y);
    rect(canyon.x_pos + canyon.width * 0.8 , floorPos_y, canyon.width * 0.2, height-floorPos_y);
    
    //a collectable token - eg. a jewel, fruit, coins
    if (!collectable.isFound)
    {
        fill(255, 215, 0);
        ellipse(collectable.x_pos, collectable.y_pos , collectable.size, collectable.size);
        
        if( dist(gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos) < 25 + collectable.size/2)
        {
            collectable.isFound = true;
        }
    }
    
    if (isPlummeting)
    {
        gameChar_y += 10;
        isLeft = isRight = false;
    }
    
    
	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
        
        // draw the face
        fill(213, 216, 220);
        ellipse(gameChar_x , gameChar_y - 60, 20, 30);

        // draw the body
        fill(0, 0, 256);
        rect(gameChar_x - 8, gameChar_y - 45, 16, 30);

        // draw hands
        fill(0);
        rect(gameChar_x - 23, gameChar_y - 45, 26, 6);

        // draw the feets
        fill(0);
        rect(gameChar_x - 5, gameChar_y - 15, 10, 8);

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
        
        // draw the face
        fill(213, 216, 220);
        ellipse(gameChar_x , gameChar_y - 60, 20, 30);

        // draw the body
        fill(0, 0, 256);
        rect(gameChar_x - 8, gameChar_y - 45, 16, 30);

        // draw hands
        fill(0);
        rect(gameChar_x - 3, gameChar_y - 45, 26, 6);

        // draw the feets
        fill(0);
        rect(gameChar_x - 5, gameChar_y - 15, 10, 8);
        

	}
	else if(isLeft)
	{
		// add your walking left code
        
        // draw the face
        fill(213, 216, 220);
        ellipse(gameChar_x , gameChar_y - 60, 20, 30);

        // draw the body
        fill(0, 0, 256);
        rect(gameChar_x - 8, gameChar_y - 45, 16, 40);

        // draw hands
        fill(0);
        rect(gameChar_x - 23, gameChar_y - 45, 26, 6);

        // draw the feets
        fill(0);
        rect(gameChar_x - 5, gameChar_y - 5, 10, 8); 

	}
	else if(isRight)
	{
		// add your walking right code
        
        // draw the face
        fill(213, 216, 220);
        ellipse(gameChar_x , gameChar_y - 60, 20, 30);

        // draw the body
        fill(0, 0, 256);
        rect(gameChar_x - 8, gameChar_y - 45, 16, 40);

        // draw hands
        fill(0);
        rect(gameChar_x - 3, gameChar_y - 45, 26, 6);

        // draw the feets
        fill(0);
        rect(gameChar_x - 5, gameChar_y - 5, 10, 8);

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
        
        // draw the face
        fill(213, 216, 220);
        ellipse(gameChar_x , gameChar_y - 60, 26, 30);

        // draw the body
        fill(0, 0, 256);
        rect(gameChar_x - 15, gameChar_y - 45, 30, 30);

        // draw hands
        fill(0);
        rect(gameChar_x - 21, gameChar_y - 65, 6, 28);
        rect(gameChar_x + 15, gameChar_y - 65, 6, 28);

        // draw the feets
        fill(0);
        rect(gameChar_x - 15, gameChar_y - 15, 10, 8); 
        rect(gameChar_x + 5, gameChar_y - 15, 10, 8);


	}
	else
	{
		// add your standing front facing code
        
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

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    if (isLeft)
    {
        gameChar_x -= 3;
    }
    
    if (isRight)
    {
        gameChar_x += 3;
    }
    
    if (gameChar_y < floorPos_y)
        {
            isFalling  = true;
            gameChar_y = min(gameChar_y + 5, floorPos_y);
        }
    else{
        isFalling  = false;
    }
    
//    detect when the character is over the canyon
    if(gameChar_x > canyon.x_pos + 14 && gameChar_x < canyon.x_pos + canyon.width - 14 && gameChar_y >= floorPos_y)
    {
        isPlummeting = true;
    }
    else
    {
        isPlummeting = false;
    }

}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
    if (keyCode == 39 && !isPlummeting)
    {
        isRight = true;   
    }
    
    if (keyCode == 37 && !isPlummeting)
    {
        isLeft = true;
    }
	
    if ( (keyCode == 38 || keyCode == 32) && !isFalling && !isPlummeting)
    {
        gameChar_y -= 150;
    }
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.
    
    if (keyCode == 39)
    {
        isRight = false;
    }
    
    if (keyCode == 37)
    {
        isLeft = false;
    }
    
}
