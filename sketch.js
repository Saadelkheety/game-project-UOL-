/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;
//Declare four variables: `isLeft`, `isRight`, `isFalling` and `isPlummeting`.
var isLeft;
var isRight;
var isFalling;
var isPlummeting;



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

    
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon


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
            gameChar_y = min(gameChar_y + 6, floorPos_y);
        }
    else{
        isFalling  = false;
    }

}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
    if (keyCode == 39)
    {
        isRight = true;   
        console.log("keyPressed: " + key);
        console.log("keyPressed: " + keyCode);
    }
    
    if (keyCode == 37)
    {
        isLeft = true;
        console.log("keyPressed: " + key);
        console.log("keyPressed: " + keyCode);
    }
	
    if ( (keyCode == 38 || keyCode == 32) && !isFalling )
    {
        gameChar_y -= 100;
    }
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.
    console.log("keyReleased: " + key);
    console.log("keyReleased: " + keyCode);
    
    if (keyCode == 39)
    {
        isRight = false;   
        console.log("keyReleased: " + key);
        console.log("keyReleased: " + keyCode);
    }
    
    if (keyCode == 37)
    {
        isLeft = false;
        console.log("keyReleased: " + key);
        console.log("keyReleased: " + keyCode);
    }
    
}
