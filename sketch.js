/*

### The Game Project 6 – Adding game mechanics
*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var isJumping;

var trees_x;
var treePos_y;
var clouds;
var mountains;

var cameraPosX;
var old_gameChar_x;

var collectables;
var canyons;
var flagpole;

var game_score;
var lives;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
    lives = 3;
    startGame();
}

function draw()
{   
	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
    
    checkPlayerDie();
    // Implement scrolling
    cameraPosX = cameraPosX + gameChar_x - old_gameChar_x;
    old_gameChar_x = gameChar_x;
    
    push();
    translate(-cameraPosX, 0);

	//draw the canyon
    for(var i = 0; i < canyons.length; i++)
    {
        drawCanyon(canyons[i]);
        //detect when the character is over the canyon
        checkCanyon(canyons[i]);
    }
    
    //clouds
	drawClouds();
    // mountains
    drawMountains();
    // trees
    drawTrees();
    // poleflag
    renderFlagpole()
    if(flagpole.isReached == false)
    {
       checkFlagpole();
    }
    
    //a collectable token - eg. a jewel, fruit, coins
    for(var i = 0; i < collectables.length; i++)
    {
        if (!collectables[i].isFound)
        {
            drawCollectable(collectables[i]);
            checkCollectable(collectables[i]);
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
		// add walking left code
        
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
		// add walking right code
        
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
		// add jumping facing forwards code
        
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
    pop();
    
    for(var i=0; i<lives; i++)
    {
        // draw life tokens
        // add your standing front facing code
        // draw the face
        var lifeChar_x = width - (i+1) * 10
        var lifeChar_y = 25;
        var divider = 5
        fill(213, 216, 220);
        ellipse(lifeChar_x , lifeChar_y - 60/divider, 26/divider, 30/divider);

        // draw the body
        fill(0, 0, 256);
        rect(lifeChar_x - 15/divider, lifeChar_y - 45/divider, 30/divider, 40/divider);

        // draw hands
        fill(0);
        rect(lifeChar_x - 21/divider, lifeChar_y - 45/divider, 6/divider, 28/divider);
        rect(lifeChar_x + 15/divider, lifeChar_y - 45/divider, 6/divider, 28/divider);

        // draw the feets
        fill(0);
        rect(lifeChar_x - 15/divider, lifeChar_y - 5/divider, 10/divider, 8/divider); 
        rect(lifeChar_x + 5/divider, lifeChar_y - 5/divider, 10/divider, 8/divider);
    }
    
    fill(255);
    text('score: ' + game_score, 20, 15);
    
    if(lives < 1)
    {
        fill(255);
        text("Game over. Press space to continue.", width/2, height/2);
        return;
    }
    
    if(flagpole.isReached)
    {
        fill(255);
        text("Level complete. Press space to continue.", width/2, height/2);
        return;
    }
    
	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    if(isLeft)
    {
        gameChar_x -= 3;
    }
    
    if(isRight)
    {
        gameChar_x += 3;
    }
    
    if(gameChar_y < floorPos_y)
    {
        isFalling  = true;
        gameChar_y = min(gameChar_y + 5, floorPos_y);
    }
    else
    {
        isFalling  = false;
    }
    
    if(isJumping)
    {
       gameChar_y -= 180;
       isJumping = false;
       isFalling = true;
    }
    

}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
    if(keyCode == 39 && !isPlummeting)
    {
        isRight = true;   
    }
    
    if(keyCode == 37 && !isPlummeting)
    {
        isLeft = true;
    }
	
    if( (keyCode == 38 || keyCode == 32) && !isFalling && !isPlummeting)
    {
       isJumping = true;
    }
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.
    
    if(keyCode == 39)
    {
        isRight = false;
    }
    
    if(keyCode == 37)
    {
        isLeft = false;
    }
    
    if( (keyCode == 38 || keyCode == 32))
    {
       isJumping = false;
    }
    
}


function drawClouds()
{
    for(var i = 0; i < clouds.length; i++)
    {
        noStroke();
        fill(255);
        ellipse(clouds[i].x_pos, clouds[i].y_pos, clouds[i].width, 70);
        ellipse(clouds[i].x_pos - clouds[i].width/3, clouds[i].y_pos, clouds[i].width*0.8, 50);
        ellipse(clouds[i].x_pos + clouds[i].width/3, clouds[i].y_pos, clouds[i].width*0.8, 50);
    }
    
}


function drawMountains()
{
    for(var i = 0; i < mountains.length; i++)
    {
        fill(180);
        triangle(mountains[i].x_pos, floorPos_y, mountains[i].x_pos + mountains[i].width, floorPos_y, mountains[i].x_pos + mountains[i].width/2, floorPos_y-mountains[i].height);
        triangle(mountains[i].x_pos, floorPos_y, mountains[i].x_pos + mountains[i].width, floorPos_y, mountains[i].x_pos + mountains[i].width/4, floorPos_y-mountains[i].height*0.85);
    }
}


function drawTrees()
{
    for(var i = 0; i < trees_x.length; i++)
    {
        fill(148);
        rect(trees_x[i], treePos_y - 100, 50, 100);
        fill(0, 255, 0);

        triangle(trees_x[i] - 40, treePos_y - 40, trees_x[i] + 90, treePos_y - 40, trees_x[i] + 25, treePos_y -  152);
        triangle(trees_x[i] - 40, treePos_y -  70, trees_x[i] + 90, treePos_y - 70, trees_x[i] + 25, treePos_y - 182);
    }
}


function drawCollectable(t_collectable)
{
    fill(255, 215, 0);
    ellipse(t_collectable.x_pos, t_collectable.y_pos - t_collectable.size/2 , t_collectable.size, t_collectable.size);
}


function drawCanyon(t_canyon)
{
    fill(200);
    rect(t_canyon.x_pos, floorPos_y, t_canyon.width, height-floorPos_y);
    fill(100,100,100, 100);
    rect(t_canyon.x_pos, floorPos_y, t_canyon.width * 0.2 , height-floorPos_y);
    rect(t_canyon.x_pos + t_canyon.width * 0.8 , floorPos_y, t_canyon.width * 0.2, height-floorPos_y);
}


function checkCollectable(t_collectable)
{
    if(dist(gameChar_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos) < 25 + t_collectable.size/2)
    {
        t_collectable.isFound = true;
        game_score++
    }
}

function checkCanyon(t_canyon)
{
    if(gameChar_x > t_canyon.x_pos + 14 && gameChar_x < t_canyon.x_pos + t_canyon.width - 14 && gameChar_y >= floorPos_y)
    {
        isPlummeting = true;
    }
}

function renderFlagpole()
{
    push();
    fill(255);
    stroke(180);
    strokeWeight(5);
    line(flagpole.x_pos, floorPos_y , flagpole.x_pos, floorPos_y-200);
    noStroke();
    fill(255, 0, 0);
    if(flagpole.isReached)
    {
        rect(flagpole.x_pos, floorPos_y-200, 50, 40);
    }
    pop();
}

function checkFlagpole()
{
    if(abs(gameChar_x-flagpole.x_pos) < 20)
    {
        flagpole.isReached = true;
    }
}

function checkPlayerDie()
{
    if(gameChar_y > height)
    {
        lives--;
        if(lives > 0)
        {
            startGame();
        }
    }
}

function startGame()
{
    gameChar_x = width/2;
	gameChar_y = floorPos_y;
    game_score = 0;
    
    //These variables will be used to animate your game character.
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
    
    trees_x = [100, 300, 600, 900, 1200, 1600, 6000, 9000, 12000];
    treePos_y = floorPos_y;
    
    flagpole = {
        x_pos: width*2,
        isReached: false
    };
    
    collectables = [
        {x_pos: width/6,      y_pos: floorPos_y, size: 30, isFound: false},
        {x_pos: width/2.2,    y_pos: floorPos_y, size: 30, isFound: false},
        {x_pos: width * 0.75, y_pos: floorPos_y, size: 30, isFound: false},
        {x_pos: width,        y_pos: floorPos_y, size: 30, isFound: false},
        {x_pos: width * 1.2,  y_pos: floorPos_y, size: 30, isFound: false},
        {x_pos: width * 1.5,  y_pos: floorPos_y, size: 30, isFound: false},
        {x_pos: width * 1.8,  y_pos: floorPos_y, size: 30, isFound: false},
        {x_pos: width * 2.1,  y_pos: floorPos_y, size: 30, isFound: false},
        {x_pos: width * 2.4,  y_pos: floorPos_y, size: 30, isFound: false},
        {x_pos: width * 2.7,  y_pos: floorPos_y, size: 30, isFound: false}
    ];
    
    canyons = [
        {x_pos: width*0.25, width: 60},
        {x_pos: width*0.75, width: 60},
        {x_pos: width*1.25, width: 60},
        {x_pos: width*1.75, width: 60},
        {x_pos: width*2.25, width: 60},
        {x_pos: width*2.75, width: 60},
        {x_pos: width*3.75, width: 60},
        {x_pos: width*3.75, width: 60},
    ];
    
    clouds = [
        {x_pos: 150,  y_pos: 50 ,width: 150},
        {x_pos: 1400, y_pos: 40 ,width: 130},
        {x_pos: 600,  y_pos: 50 ,width: 100},
        {x_pos: 1900, y_pos: 45 ,width: 110},
        {x_pos: 1250, y_pos: 40 ,width: 90 },
        {x_pos: 2500, y_pos: 53 ,width: 180},
        {x_pos: 3700, y_pos: 55 ,width: 120},
        {x_pos: 4150, y_pos: 48 ,width: 70 }
    ];
    
    mountains = [
        {x_pos: width / 5,      width: 250, height: 300},
        {x_pos: width * 3,    width: 150, height: 300},
        {x_pos: width * 2,    width: 350, height: 300},
        {x_pos: width * 5.5,  width: 400, height: 300},
        {x_pos: width * 7,    width: 300, height: 300},
        {x_pos: width * 1,    width: 250, height: 300},
        {x_pos: width * 4,    width: 450, height: 300},
        {x_pos: width * 5,    width: 500, height: 300},
    ];
    
    cameraPosX = 0;
    old_gameChar_x = gameChar_x;
}