
// Create canvas variable
canvas=new fabric.Canvas("myCanvas")

//Set initial positions for ball and hole images.
bx=0;
by=0;
hx=800;
hy=400;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas

function lode_img(){
fabric.Image.fromURL("golf-h1.png", function(Img)  {
	holr_obj = Img;
	hole_obj.scaleToWidth(50);
	hole_obj.scaleToHeight(50);
	hole_obj.set({
		top:hole_y,
		left:hole_x
	});
	canvas.add(hole_obj);
});
new_image();
}
fabric.Image.fromURL('golf-h.png', function(Img){
hole=Img;
hole.scaleToWidth(50);
hole.scaleToHeight(50);
hole.set({top:hy,left:hx});canvas.add(hole);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
	ball_obj = Img
	ball_obj.scaleToWidth(50);
	ball_obj.scaleToHeight(50);
	 top:ball_y,
	 left:ball_x
	});
canvas.add(ball_obj);
};

	// write code to Upload ball image on canvas
	fabric.Image.fromURL('ball.png', function(Img){
		ball=Img;
		ball.scaleToWidth(50);
		ball.scaleToHeight(50);
		ball.set({top:by,left:bx});canvas.add(ball);
			});


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x==hole_X)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You have won";
		document.getElementById("mycanvas").style.borderColor="red";
	}
	
	else {
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		if (ball_y >=450)
		
		ball_y = ball_y + block_image_height;
		console. log("block image height = " + block_image_height)
		"+ball_x);
		console. log("When up arrow key is pressed, y = " + ball_y +
		canvas . remove (ball_obj) ;
		new_image() ;
	}

	function down()
	{
		 // Write a code to move ball downward
if (ball_y <=450)

ball_y = ball_y - block_image_height;
console. log("block image height = " - block_image_height);
"-ball_y);
console. log("When Down arrow key is pressed, X = " + ball_x +
canvas . remove (ball_obj) ;
new_image() ;
	}

	function left()
	{
		if(ball_x >5)
		ball_x = ball_X - block_image_height;
console. log("block image height = " - block_image_height)
"-ball_y);
console. log("When Down arrow key is pressed, X = " + ball_x +
canvas . remove (ball_obj) ;
new_image() ;
			
	
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{ball_y = ball y - block_image_height;
			console. log("block image height = " - block_image_height);
			"-ball_y);
			console. log("When Down arrow key is pressed, X = " + ball_x +
			canvas . remove (ball_obj) ;
			new_image() ;
			// Write a code to move ball right side.
		}
	}
	
}

