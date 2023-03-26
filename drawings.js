/* this file has drawings functions needed for the game project */


function drawGameCharacter()
{
    if (isLeft && isFalling)
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
	else if (isRight && isFalling)
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
	else if (isLeft)
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
	else if (isRight)
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
	else if (isFalling || isPlummeting)
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
}

function drawLifeToken(lifeChar_x, lifeChar_y, divider)
{
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


function drawClouds()
{
    for (var i = 0; i < clouds.length; i++)
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
    for (var i = 0; i < mountains.length; i++)
    {
        fill(180);
        triangle(mountains[i].x_pos, floorPos_y, mountains[i].x_pos + mountains[i].width, floorPos_y, mountains[i].x_pos + mountains[i].width/2, floorPos_y-mountains[i].height);
        triangle(mountains[i].x_pos, floorPos_y, mountains[i].x_pos + mountains[i].width, floorPos_y, mountains[i].x_pos + mountains[i].width/4, floorPos_y-mountains[i].height*0.85);
    }
}


function drawTrees()
{
    for (var i = 0; i < trees_x.length; i++)
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
    if(!difficulty_level)
    {
        difficulty_level = 1;
    }
    canyonWidth = t_canyon.width * difficulty_level;
    fill(200);
    rect(t_canyon.x_pos, floorPos_y, canyonWidth, height-floorPos_y);
    fill(100,100,100, 100);
    rect(t_canyon.x_pos, floorPos_y, canyonWidth * 0.2 , height-floorPos_y);
    rect(t_canyon.x_pos + canyonWidth * 0.8 , floorPos_y, canyonWidth * 0.2, height-floorPos_y);
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
    if (flagpole.isReached)
    {
        rect(flagpole.x_pos, floorPos_y-200, 50, 40);
        if(!gameOverSoundRun)
        {
           gameOverSound.play();
           gameOverSoundRun = true;
        }
    }
    pop();
}

