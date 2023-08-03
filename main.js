canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
greencar_width = 75;
greeencar_height = 100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

geencar_x = 5;
greencar_y = 225;
function add() {
background_imgTag = new_image();
background_imgTag.onload = uploadBackground();
background_imgTag.src = background_Image();

greencar_ImgTag = new Image();
greencar_imagTag.onload = uploadBackground();
greencar_src = background_Image();
}

function uploadBackground() {
	//Define function ‘uploadBackground’

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
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
	//Define function to move the car upward
}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
