/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.

WARNING: Do not get too carried away. If you're shape takes more than 15 lines of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here

	noStroke();
	fill(255);
	text("cloud", 200, 100);
    ellipse(200, 150, 95, 70);
    ellipse(160, 150, 70, 50);
    ellipse(240, 150, 75, 50);



	//2. a mountain in the distance
	//... add your code here
    
    fill(180);
    triangle(470, 432, 650, 432, 585, 290);
    triangle(470, 432, 650, 432, 555, 270);

	noStroke();
	fill(255);
	text("mountain", 500, 256);



	//3. a tree
	//... add your code here
    fill(148);
    rect(880, 332, 50, 100);
    fill(0, 255, 0);
    triangle(840, 392, 970, 392, 905, 280);
    triangle(840, 362, 970, 362, 905, 250);

	noStroke();
	fill(255);
	text("tree", 800, 346);
    


	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here
    fill(200);
    rect(150, 432, 60, 144);
    fill(100,100,100, 100);
    rect(150, 432, 15, 144);
    rect(195, 432, 15, 144);


	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here
    fill(255, 215, 0);
    ellipse(380, 412, 40, 40);
    
	noStroke();
	fill(255);
	text("collectable item", 400, 400);
}
