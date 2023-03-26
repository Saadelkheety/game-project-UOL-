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

var jumpSound;
var fallSound;
var coinSound;
var deathSound;
var gameOverSound;
var fallSoundRun;
var deathSoundRun;
var gameOverSoundRun;
var difficulty_level;
var level;



function preload()
{
    soundFormats('mp3','wav');
    
    //load your sounds here
    jumpSound = loadSound('assets/jump.wav');
    fallSound = loadSound('assets/fall.wav');
    coinSound = loadSound('assets/coin.mp3')
    deathSound = loadSound('assets/death.mp3')
    gameOverSound = loadSound('assets/over.mp3')
}

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
    lives = 3;
    difficulty_level = 1;
    level = 1;
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
    for (var i = 0; i < canyons.length; i++)
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
    
    if (flagpole.isReached == false)
    {
       checkFlagpole();
    }
    
    //a collectable token - eg. a jewel, fruit, coins
    for (var i = 0; i < collectables.length; i++)
    {
        if (!collectables[i].isFound)
        {
            drawCollectable(collectables[i]);
            checkCollectable(collectables[i]);
        }
    }
    
    
    if (isPlummeting)
    {
        gameChar_y += 7;
        isLeft = isRight = false;
    }
    
	//the game character
	drawGameCharacter();
    pop();
    
    for (var i=0; i<lives; i++)
    {
        // draw life tokens
        var lifeChar_x = width - (i+1) * 10
        var lifeChar_y = 25;
        var divider = 5
        drawLifeToken(lifeChar_x, lifeChar_y, divider);
    }
    
    fill(255);
    text('score: ' + game_score + ', level: ' + level, 20, 15);
    
    if (lives < 1)
    {
        push();
        fill(255);
        textSize(24);
        text("Game over. Press space to continue.", width/4, height/2);
        if (!deathSoundRun)
        {
            deathSound.play();
            deathSoundRun = true;
        }
        pop();
        return;
    }
    
    if (flagpole.isReached)
    {
        push();
        fill(255);
        textSize(24);
        text("Level complete. Press space to continue.", width/4, height/2);
        pop();
        return;
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
        gameChar_y = min(gameChar_y + 4, floorPos_y);
    }
    else
    {
        isFalling  = false;
    }
    
    if (isJumping)
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
    if (flagpole.isReached)
    {
        if (keyCode == 32)
        {
            difficulty_level += 0.5;
            level += 1;
            startGame();
        }

        return;
    }
    else if (lives < 1)
        {
            if (keyCode == 32)
            {
                lives = 3;
                level = 1;
                startGame();
            }

            return;
            
        }
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
       jumpSound.play();
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
    
    if( (keyCode == 38 || keyCode == 32))
    {
       isJumping = false;
    }
    
}

function checkCollectable(t_collectable)
{
    if (dist(gameChar_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos) < 25 + t_collectable.size/2)
    {
        t_collectable.isFound = true;
        coinSound.play();
        game_score++
    }
}

function checkCanyon(t_canyon)
{
    if (gameChar_x > t_canyon.x_pos + 14 && gameChar_x < t_canyon.x_pos + t_canyon.width - 14 && gameChar_y >= floorPos_y)
    {
        isPlummeting = true;
        if (!fallSoundRun)
        {
          fallSound.play();
          fallSoundRun = true;
        }
    }
}

function checkFlagpole()
{
    if (abs(gameChar_x-flagpole.x_pos) < 20)
    {
        flagpole.isReached = true;
    }
}

function checkPlayerDie()
{
    if (gameChar_y > height)
    {
        lives--;
        if (lives > 0)
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
    fallSoundRun = false;
    deathSoundRun = false;
    gameOverSoundRun = false;
    if (lives < 1)
    {
        lives = 3;
    }
    //These variables will be used to animate your game character.
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
    trees_x = [100, 300, 600, 900, 1200, 1600, 6000, 9000, 12000];
    treePos_y = floorPos_y;
    flagpole = {
        x_pos: width*3,
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
        {x_pos: width*0.20, width: 60},
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